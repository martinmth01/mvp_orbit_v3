import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Layout = ({ children, isDarkMode, toggleDarkMode }: LayoutProps) => {
  const { pathname } = useLocation();
  
  // Pages qui n'ont pas besoin de la navbar/footer
  const isAuthPage = ['/login', '/signup', '/reset-password'].includes(pathname);
  const isDashboardMainPage = pathname === '/dashboard';
  
  if (isAuthPage || isDashboardMainPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-[calc(var(--navbar-height)+1rem)] px-6 md:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}; 