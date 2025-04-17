import { Link } from 'react-router-dom';
import AuthForm from "@/components/AuthForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#FF8C00] via-[#FFA500] to-[#FFD700] p-8 md:p-12 flex flex-col justify-center items-center text-white">
        <div className="max-w-md">
          <Link to="/" className="text-white hover:opacity-80 transition-opacity">
            <span className="text-3xl font-serif font-bold">Orbit Patrimoine</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6">Start your wealth journey today</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Create an account to access personalized financial guidance and tools designed to help you achieve your goals.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center text-xs">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-white/90">
                Join over <span className="font-semibold">10,000</span> users
              </p>
            </div>
            <div className="pt-4 pb-6">
              <div className="border-t border-white/20"></div>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white/90">Free 14-day trial, no credit card required</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white/90">Personalized financial recommendations</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white/90">24/7 AI chatbot assistant</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white/90">Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-background flex justify-center items-center p-8">
        <AuthForm type="signup" />
      </div>
    </div>
  );
};

export default Signup;
