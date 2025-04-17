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
      const { data, error } = await supabase
        .from('profiles')
        .select('objectif_invest, horizon, risque, patrimoine_bracket, experience')
        .single();

      if (error) throw error;
      return data as Preferences;
    },
  });

  const updatePreferences = useMutation({
    mutationFn: async (updates: Partial<Preferences>) => {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', (await supabase.auth.getUser()).data.user?.id)
        .select()
        .single();

      if (error) throw error;
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