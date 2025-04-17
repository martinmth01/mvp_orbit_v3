import { Link } from 'react-router-dom';
import AuthForm from "@/components/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#FF8C00] via-[#FFA500] to-[#FFD700] p-8 md:p-12 flex flex-col justify-center items-center text-white">
        <div className="max-w-md">
          <Link to="/" className="text-white hover:opacity-80 transition-opacity">
            <span className="text-3xl font-serif font-bold">Orbit Patrimoine</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6">Welcome to your financial journey</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Access your personal wealth dashboard and get expert financial guidance at your fingertips.
          </p>
          <div className="flex flex-col space-y-6">
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Personalized Guidance</h3>
                <p className="text-white/80 mt-1">Get answers tailored to your unique financial situation</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Secure & Private</h3>
                <p className="text-white/80 mt-1">Your financial data is encrypted and protected</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Intelligent Insights</h3>
                <p className="text-white/80 mt-1">AI-powered recommendations to optimize your wealth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-background flex justify-center items-center p-8">
        <AuthForm type="login" />
      </div>
    </div>
  );
};

export default Login;
