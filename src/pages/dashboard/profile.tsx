import { PreferencesForm } from '@/components/profile/PreferencesForm';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export const ProfilePage = () => {
  return (
    <ProtectedRoute>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Mon profil investisseur</h1>
        <div className="bg-card rounded-lg shadow p-6">
          <PreferencesForm />
        </div>
      </div>
    </ProtectedRoute>
  );
}; 