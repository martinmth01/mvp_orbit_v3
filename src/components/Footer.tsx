
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-primary">Orbit Patrimoine</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Solutions intelligentes de gestion de patrimoine qui privilégient votre bien-être financier.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Gestion de Patrimoine</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Planification Financière</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Conseils d'Investissement</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Planification de Retraite</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Optimisation Fiscale</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">À Propos</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Carrières</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">123 Rue de la Finance</p>
            <p className="text-muted-foreground">Paris, 75001</p>
            <p className="text-muted-foreground mt-2">+33 1 23 45 67 89</p>
            <p className="text-muted-foreground">contact@orbitpatrimoine.com</p>
            <div className="mt-4">
              <Link to="/contact" className="flex items-center text-primary hover:underline">
                <Mail size={18} className="mr-2" />
                Envoyez-nous un message
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Orbit Patrimoine. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Politique de Confidentialité</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Conditions d'Utilisation</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Politique de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
