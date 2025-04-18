import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';

const CTA = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleStartClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à prendre le contrôle de votre avenir financier ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez Orbit Patrimoine aujourd'hui et commencez votre voyage vers une meilleure gestion de patrimoine.
          </p>
          <Button 
            onClick={handleStartClick}
            className="btn-orange-gradient text-lg px-8 py-6 rounded-full"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
