import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { usePreferences } from '@/hooks/usePreferences';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const preferencesSchema = z.object({
  objectif_invest: z.enum([
    'CroissanceLongTerme',
    'RevenuComplémentaire',
    'PréparerRetraite',
    'ProjetMoyenTerme',
    'TransmissionSuccession',
  ]),
  horizon: z.enum(['<3ans', '3-5ans', '5-8ans', '8-12ans', '>12ans']),
  risque: z.enum(['TrèsFaible', 'Faible', 'Modéré', 'Élevé', 'TrèsÉlevé']),
  patrimoine_bracket: z.enum(['<50k', '50-100k', '100-250k', '250-500k', '>500k']),
  experience: z.enum(['Débutant', 'Intermédiaire', 'Avancé', 'Professionnel']),
});

type PreferencesFormData = z.infer<typeof preferencesSchema>;

export const PreferencesForm = () => {
  const { data, isLoading, updatePreferences } = usePreferences();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PreferencesFormData>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: data,
  });

  const onSubmit = async (formData: PreferencesFormData) => {
    try {
      await updatePreferences.mutateAsync(formData);
      toast({
        title: 'Succès',
        description: 'Vos préférences ont été mises à jour avec succès.',
      });
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue lors de la mise à jour de vos préférences.',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="objectif_invest">Objectif d'investissement</label>
        <Select
          onValueChange={(value: string) => setValue('objectif_invest', value as PreferencesFormData['objectif_invest'])}
          defaultValue={data?.objectif_invest}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre objectif" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CroissanceLongTerme">Croissance long terme</SelectItem>
            <SelectItem value="RevenuComplémentaire">Revenu complémentaire</SelectItem>
            <SelectItem value="PréparerRetraite">Préparer sa retraite</SelectItem>
            <SelectItem value="ProjetMoyenTerme">Projet à moyen terme</SelectItem>
            <SelectItem value="TransmissionSuccession">Transmission et succession</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="horizon">Horizon d'investissement</label>
        <Select
          onValueChange={(value: string) => setValue('horizon', value as PreferencesFormData['horizon'])}
          defaultValue={data?.horizon}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre horizon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="<3ans">Moins de 3 ans</SelectItem>
            <SelectItem value="3-5ans">3 à 5 ans</SelectItem>
            <SelectItem value="5-8ans">5 à 8 ans</SelectItem>
            <SelectItem value="8-12ans">8 à 12 ans</SelectItem>
            <SelectItem value=">12ans">Plus de 12 ans</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="risque">Niveau de risque accepté</label>
        <Select
          onValueChange={(value: string) => setValue('risque', value as PreferencesFormData['risque'])}
          defaultValue={data?.risque}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre niveau de risque" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="TrèsFaible">Très faible</SelectItem>
            <SelectItem value="Faible">Faible</SelectItem>
            <SelectItem value="Modéré">Modéré</SelectItem>
            <SelectItem value="Élevé">Élevé</SelectItem>
            <SelectItem value="TrèsÉlevé">Très élevé</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="patrimoine_bracket">Patrimoine total</label>
        <Select
          onValueChange={(value: string) => setValue('patrimoine_bracket', value as PreferencesFormData['patrimoine_bracket'])}
          defaultValue={data?.patrimoine_bracket}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre patrimoine" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="<50k">Moins de 50k€</SelectItem>
            <SelectItem value="50-100k">50k€ - 100k€</SelectItem>
            <SelectItem value="100-250k">100k€ - 250k€</SelectItem>
            <SelectItem value="250-500k">250k€ - 500k€</SelectItem>
            <SelectItem value=">500k">Plus de 500k€</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="experience">Niveau d'expérience</label>
        <Select
          onValueChange={(value: string) => setValue('experience', value as PreferencesFormData['experience'])}
          defaultValue={data?.experience}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre niveau d'expérience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Débutant">Débutant</SelectItem>
            <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
            <SelectItem value="Avancé">Avancé</SelectItem>
            <SelectItem value="Professionnel">Professionnel</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Enregistrer mes préférences</Button>
    </form>
  );
}; 