import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import { Database } from '@/types/database';

type Preferences = {
  objectif_invest: 'CroissanceLongTerme' | 'RevenuComplémentaire' | 'PréparerRetraite' | 'ProjetMoyenTerme' | 'TransmissionSuccession';
  horizon: '<3ans' | '3-5ans' | '5-8ans' | '8-12ans' | '>12ans';
  risque: 'TrèsFaible' | 'Faible' | 'Modéré' | 'Élevé' | 'TrèsÉlevé';
  patrimoine_bracket: '<50k' | '50-100k' | '100-250k' | '250-500k' | '>500k';
  experience: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Professionnel';
};

export const usePreferences = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ['preferences'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Utilisateur non connecté');

      // Vérifier si le profil existe
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      // Si le profil n'existe pas, le créer
      if (profileError && profileError.code === 'PGRST116') {
        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .insert([{ id: user.id }])
          .select()
          .single();

        if (createError) throw createError;
        return newProfile as Preferences;
      }

      if (profileError) throw profileError;
      return profile as Preferences;
    },
  });

  const updatePreferences = useMutation({
    mutationFn: async (updates: Partial<Preferences>) => {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) throw new Error('Erreur d\'authentification');
      if (!user) throw new Error('Utilisateur non connecté');

      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single();

      if (error) {
        console.error('Erreur lors de la mise à jour:', error);
        throw new Error('Erreur lors de la mise à jour des préférences');
      }
      return data as Preferences;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['preferences'] });
    },
  });

  return {
    data,
    error,
    isLoading,
    updatePreferences,
  };
}; 