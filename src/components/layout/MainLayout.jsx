import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';
import { Toaster } from 'sonner';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-brand-accent selection:text-white">
      <ScrollToTop />
      <Toaster position="top-right" richColors />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};