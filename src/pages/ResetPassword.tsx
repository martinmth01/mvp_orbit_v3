
import { Link } from 'react-router-dom';
import AuthForm from "@/components/AuthForm";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-primary to-orbit-teal p-8 md:p-12 flex flex-col justify-center items-center text-white">
        <div className="max-w-md">
          <Link to="/" className="text-white hover:opacity-80 transition-opacity">
            <span className="text-3xl font-serif font-bold">Orbit Patrimoine</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6">Réinitialisez votre mot de passe</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Ne vous inquiétez pas, cela arrive aux meilleurs d'entre nous. Entrez votre adresse e-mail et nous vous enverrons des instructions pour réinitialiser votre mot de passe.
          </p>
          <div className="border border-white/20 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Besoin d'aide ?</h3>
            <p className="text-white/80 mb-4">
              Si vous avez des difficultés à accéder à votre compte, notre équipe de support est prête à vous aider.
            </p>
            <Link to="/contact" className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white">
              Contacter le Support
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-background flex justify-center items-center p-8">
        <AuthForm type="reset" />
      </div>
    </div>
  );
};

export default ResetPassword;
