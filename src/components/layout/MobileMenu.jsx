import { NavLink } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { company } from '../../data/company';
import { useScrollLock } from '../../hooks/useScrollLock';

export const MobileMenu = ({ isOpen, onClose }) => {
  useScrollLock(isOpen);

  return (
    <div 
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
            <span className="font-extrabold tracking-tight text-lg text-brand-purple">
              {company.shortName}
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2.5 rounded-full hover:bg-zinc-100 text-zinc-600 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) => `flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition ${
                  isActive 
                    ? 'bg-brand-purple text-white' 
                    : 'text-brand-ink hover:bg-zinc-50'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="border-t border-zinc-100 pt-6 space-y-3">
          <p className="text-xs text-brand-muted font-mono">{company.address.city}, {company.address.state}</p>
          <a href={`mailto:${company.email}`} className="text-xs font-bold text-brand-purple block truncate">
            {company.email}
          </a>
        </div>
      </div>
    </div>
  );
};