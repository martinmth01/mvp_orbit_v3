import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';

const Hero = () => {
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
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="animate-slide-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Gestion Intelligente de Patrimoine Pour Votre Avenir
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Orbit Patrimoine combine les insights propulsés par l'IA avec des conseils personnalisés pour vous aider à prendre des décisions financières en toute confiance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleStartClick}
                  className="btn-orange-gradient text-lg px-6 py-6 rounded-full"
                >
                  Commencer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/about">
                  <Button variant="outline" className="text-lg px-6 py-6 rounded-full">
                    En savoir plus
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-orbit-gray-light flex items-center justify-center text-xs`}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">250+</span> personnes ont commencé leur parcours patrimonial aujourd'hui
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-fade-in">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-orbit-blue/10 to-orbit-teal/10 rounded-2xl p-4 md:p-6 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Tableau de bord de planification financière" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
