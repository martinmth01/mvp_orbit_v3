import { supabase } from './supabaseClient';

// Fonction pour créer un profil utilisateur après l'inscription
export async function createUserProfile(userId: string, userData: { 
  email: string;
  full_name?: string;
  avatar_url?: string;
}) {
  console.log('Création du profil utilisateur pour:', userId, userData);
  
  try {
    // Vérifier si le profil existe déjà
    const { data: existingProfile, error: checkError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();
      
    if (checkError && checkError.code !== 'PGRST116') {
      // Une erreur autre que "pas de résultat" s'est produite
      console.error('Erreur lors de la vérification du profil:', checkError);
      throw checkError;
    }
    
    if (existingProfile) {
      console.log('Profil utilisateur existant, pas besoin de le créer');
      return { data: existingProfile, error: null };
    }
    
    // Vérification de l'authentification avant insertion
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      console.error('Aucune session active pour créer le profil utilisateur');
      return { 
        data: null, 
        error: new Error('Utilisateur non authentifié. La création de profil sera effectuée lors de la prochaine connexion.') 
      };
    }
    
    // Créer le profil s'il n'existe pas
    const { data, error } = await supabase
      .from('user_profiles')
      .insert([
        {
          id: userId,
          email: userData.email,
          full_name: userData.full_name || null,
          avatar_url: userData.avatar_url || null,
          updated_at: new Date().toISOString()
        }
      ])
      .select()
      .single();
      
    if (error) {
      console.error('Erreur lors de la création du profil:', error);
      throw error;
    }
    
    console.log('Profil utilisateur créé avec succès:', data);
    return { data, error: null };
  } catch (error) {
    console.error('Erreur lors de la création du profil utilisateur:', error);
    return { data: null, error };
  }
}

// Fonction pour récupérer le profil utilisateur
export async function getUserProfile(userId: string) {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();
      
    if (error) {
      throw error;
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur:', error);
    return { data: null, error };
  }
}

// Fonction pour mettre à jour le profil utilisateur
export async function updateUserProfile(userId: string, updates: any) {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
      
    if (error) {
      throw error;
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil utilisateur:', error);
    return { data: null, error };
  }
}
