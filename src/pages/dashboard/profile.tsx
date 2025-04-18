import { PreferencesForm } from '@/components/profile/PreferencesForm';

export const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container-custom">
        <h1 className="text-3xl font-serif font-bold mb-8">Mon profil investisseur</h1>
        <div className="bg-card rounded-lg shadow p-6">
          <PreferencesForm />
        </div>
      </main>
    </div>
  );
}; 