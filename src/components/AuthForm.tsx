import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from 'lucide-react';

interface AuthFormProps {
  type: 'login' | 'signup' | 'reset';
}

const AuthForm = ({ type }: AuthFormProps) => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      if (type === 'login') {
        await signIn(email, password);
        navigate('/dashboard');
      } else if (type === 'signup') {
        // TODO: Implémenter signUp
        navigate('/dashboard');
      } else if (type === 'reset') {
        // TODO: Implémenter resetPassword
        alert('Instructions de réinitialisation du mot de passe envoyées à votre email');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'login':
        return 'Bienvenue';
      case 'signup':
        return 'Créez votre compte';
      case 'reset':
        return 'Réinitialisez votre mot de passe';
      default:
        return '';
    }
  };

  const getSubtitle = () => {
    switch (type) {
      case 'login':
        return 'Connectez-vous pour accéder à votre tableau de bord de gestion de patrimoine';
      case 'signup':
        return 'Commencez votre parcours vers la liberté financière';
      case 'reset':
        return 'Entrez votre email pour recevoir les instructions de réinitialisation';
      default:
        return '';
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{getTitle()}</h2>
        <p className="text-muted-foreground">{getSubtitle()}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="vous@exemple.com"
          />
        </div>

        {type !== 'reset' && (
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        )}

        {type === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>
        )}

        {type === 'login' && (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label htmlFor="remember" className="text-sm">
              Se souvenir de moi
            </Label>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Chargement...' : type === 'login' ? 'Se connecter' : type === 'signup' ? 'S\'inscrire' : 'Réinitialiser'}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;

