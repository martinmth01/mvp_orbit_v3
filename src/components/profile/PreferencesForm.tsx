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
import { Target, Clock, AlertTriangle, Wallet, GraduationCap } from 'lucide-react';
import { useEffect } from 'react';

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

const defaultValues: PreferencesFormData = {
  objectif_invest: 'CroissanceLongTerme',
  horizon: '3-5ans',
  risque: 'Modéré',
  patrimoine_bracket: '50-100k',
  experience: 'Débutant',
};

export const PreferencesForm = () => {
  const { data, isLoading, updatePreferences } = usePreferences();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<PreferencesFormData>({
    resolver: zodResolver(preferencesSchema),
    defaultValues,
  });

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  const onSubmit = async (formData: PreferencesFormData) => {
    try {
      await updatePreferences.mutateAsync(formData);
      toast({
        title: 'Succès',
        description: 'Vos préférences ont été mises à jour avec succès.',
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue lors de la mise à jour de vos préférences.',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Objectif d'investissement */}
        <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Objectif d'investissement</h3>
          </div>
          <Select
            onValueChange={(value: string) => setValue('objectif_invest', value as PreferencesFormData['objectif_invest'])}
            defaultValue={data?.objectif_invest || defaultValues.objectif_invest}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionnez votre objectif" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="CroissanceLongTerme" className="text-foreground hover:bg-accent hover:text-accent-foreground">Croissance long terme</SelectItem>
              <SelectItem value="RevenuComplémentaire" className="text-foreground hover:bg-accent hover:text-accent-foreground">Revenu complémentaire</SelectItem>
              <SelectItem value="PréparerRetraite" className="text-foreground hover:bg-accent hover:text-accent-foreground">Préparer sa retraite</SelectItem>
              <SelectItem value="ProjetMoyenTerme" className="text-foreground hover:bg-accent hover:text-accent-foreground">Projet à moyen terme</SelectItem>
              <SelectItem value="TransmissionSuccession" className="text-foreground hover:bg-accent hover:text-accent-foreground">Transmission et succession</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Horizon d'investissement */}
        <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Horizon d'investissement</h3>
          </div>
          <Select
            onValueChange={(value: string) => setValue('horizon', value as PreferencesFormData['horizon'])}
            defaultValue={data?.horizon || defaultValues.horizon}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionnez votre horizon" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="<3ans" className="text-foreground hover:bg-accent hover:text-accent-foreground">Moins de 3 ans</SelectItem>
              <SelectItem value="3-5ans" className="text-foreground hover:bg-accent hover:text-accent-foreground">3 à 5 ans</SelectItem>
              <SelectItem value="5-8ans" className="text-foreground hover:bg-accent hover:text-accent-foreground">5 à 8 ans</SelectItem>
              <SelectItem value="8-12ans" className="text-foreground hover:bg-accent hover:text-accent-foreground">8 à 12 ans</SelectItem>
              <SelectItem value=">12ans" className="text-foreground hover:bg-accent hover:text-accent-foreground">Plus de 12 ans</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Niveau de risque */}
        <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Niveau de risque accepté</h3>
          </div>
          <Select
            onValueChange={(value: string) => setValue('risque', value as PreferencesFormData['risque'])}
            defaultValue={data?.risque || defaultValues.risque}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionnez votre niveau de risque" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="TrèsFaible" className="text-foreground hover:bg-accent hover:text-accent-foreground">Très faible</SelectItem>
              <SelectItem value="Faible" className="text-foreground hover:bg-accent hover:text-accent-foreground">Faible</SelectItem>
              <SelectItem value="Modéré" className="text-foreground hover:bg-accent hover:text-accent-foreground">Modéré</SelectItem>
              <SelectItem value="Élevé" className="text-foreground hover:bg-accent hover:text-accent-foreground">Élevé</SelectItem>
              <SelectItem value="TrèsÉlevé" className="text-foreground hover:bg-accent hover:text-accent-foreground">Très élevé</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Patrimoine total */}
        <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Patrimoine total</h3>
          </div>
          <Select
            onValueChange={(value: string) => setValue('patrimoine_bracket', value as PreferencesFormData['patrimoine_bracket'])}
            defaultValue={data?.patrimoine_bracket || defaultValues.patrimoine_bracket}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionnez votre patrimoine" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="<50k" className="text-foreground hover:bg-accent hover:text-accent-foreground">Moins de 50k€</SelectItem>
              <SelectItem value="50-100k" className="text-foreground hover:bg-accent hover:text-accent-foreground">50k€ - 100k€</SelectItem>
              <SelectItem value="100-250k" className="text-foreground hover:bg-accent hover:text-accent-foreground">100k€ - 250k€</SelectItem>
              <SelectItem value="250-500k" className="text-foreground hover:bg-accent hover:text-accent-foreground">250k€ - 500k€</SelectItem>
              <SelectItem value=">500k" className="text-foreground hover:bg-accent hover:text-accent-foreground">Plus de 500k€</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Niveau d'expérience */}
        <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Niveau d'expérience</h3>
          </div>
          <Select
            onValueChange={(value: string) => setValue('experience', value as PreferencesFormData['experience'])}
            defaultValue={data?.experience || defaultValues.experience}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionnez votre niveau d'expérience" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="Débutant" className="text-foreground hover:bg-accent hover:text-accent-foreground">Débutant</SelectItem>
              <SelectItem value="Intermédiaire" className="text-foreground hover:bg-accent hover:text-accent-foreground">Intermédiaire</SelectItem>
              <SelectItem value="Avancé" className="text-foreground hover:bg-accent hover:text-accent-foreground">Avancé</SelectItem>
              <SelectItem value="Professionnel" className="text-foreground hover:bg-accent hover:text-accent-foreground">Professionnel</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="btn-orange-gradient">
          Enregistrer mes préférences
        </Button>
      </div>
    </form>
  );
}; 