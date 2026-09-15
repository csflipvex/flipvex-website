import { Link } from 'react-router-dom';
import { company } from '../../data/company';
import { servicesList } from '../../data/services';
import { Container } from '../common/Container';

export const Footer = () => {
  return (
    <footer className="w-full bg-brand-dark text-white pt-20 pb-12 border-t border-zinc-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center text-white font-black text-lg">
                F
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                {company.shortName}
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              {company.description}
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-500">
              CIN: {company.cin}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase">
              Directory
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/our-clients" className="text-zinc-400 hover:text-white transition">Our Clients</Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-white transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              {servicesList.map(s => (
                <li key={s.id} className="">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase">
              Registered Office
            </h3>
            <address className="not-italic text-sm text-zinc-400 leading-relaxed">
              {company.address.line1}<br />
              {company.address.line2}<br />
              {company.address.city}, {company.address.state}<br />
              PIN: {company.address.pincode}
            </address>
            <div className="pt-2">
              <a 
                href={`mailto:${company.email}`}
                className="text-xs font-mono text-brand-accent hover:underline block"
              >
                {company.email}
              </a>
            </div>
          </div>

        </div>

        <div className="py-12 border-b border-zinc-800/80 overflow-hidden select-none">
          <div className="text-sm sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-800/40 uppercase whitespace-nowrap">
            Build Something Extraordinary
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
          <div>
            Kozhikode, Kerala, India
          </div>
        </div>
      </Container>
    </footer>
  );
};