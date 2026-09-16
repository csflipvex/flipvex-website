import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { company } from '../../data/company';
import { Container } from '../common/Container';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md border-b border-zinc-100">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo (Left Side) */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center p-2 shadow-sm transition group-hover:scale-105">
                <img 
                  src="/favicon.svg" 
                  alt="Flipvex Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-brand-purple leading-none">
                  {company.shortName}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mt-1">
                  Creative Solutions
                </span>
              </div>
            </Link>

            {/* Right Side Container: Desktop Navigation & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              {/* Desktop Navigation (Pushed Right) */}
              <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/70 p-1.5 rounded-full border border-zinc-200/50">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => `px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                      isActive
                        ? 'bg-white text-brand-purple shadow-sm'
                        : 'text-zinc-600 hover:text-brand-purple'
                    }`}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl bg-zinc-100 text-zinc-800 hover:bg-zinc-200 focus:outline-none transition"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu Component */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};