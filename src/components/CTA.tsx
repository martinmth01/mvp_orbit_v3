import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="section hero-gradient text-white">
      <div className="container-custom">
        <div className="rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Prendre le Contrôle de Votre Avenir Financier ?</h2>
          <p className="text-xl mb-8 text-white/90">
            Rejoignez des milliers d'utilisateurs qui bénéficient déjà de nos solutions intelligentes de gestion de patrimoine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white hover:from-[#2d2d2d] hover:to-[#1a1a1a] text-lg px-6 py-6 rounded-full transition-all duration-300 hover:scale-105">
                Commencer Maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" className="bg-white/90 border-2 border-white text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] text-lg px-6 py-6 rounded-full transition-all duration-300 hover:scale-105">
                Demander une Démo
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-white/80">
            Aucune carte de crédit requise. Essai gratuit de 14 jours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
