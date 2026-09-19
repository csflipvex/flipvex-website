import { Link } from 'react-router-dom';
import { company } from '../../data/company';
import { servicesList } from '../../data/services';
import { Container } from '../common/Container';

export const Footer = () => {
  return (
    <footer className="w-full bg-zinc-50 text-zinc-900 pt-20 pb-12 border-t-2 border-zinc-300 shadow-inner">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-200">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              
              <span className="font-extrabold text-2xl tracking-tight text-zinc-900">
                {company.shortName}
              </span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
              {company.description}
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-500">
              CIN: {company.cin}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-900 uppercase">
              Directory
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-zinc-600 hover:text-zinc-900 transition">Home</Link>
              </li>
              <li>
                <Link to="/our-clients" className="text-zinc-600 hover:text-zinc-900 transition">Our Clients</Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-600 hover:text-zinc-900 transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-900 uppercase">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              {servicesList.map(s => (
                <li key={s.id} className="">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-900 uppercase">
              Registered Office
            </h3>
            <address className="not-italic text-sm text-zinc-600 leading-relaxed">
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

        {/* Scaled text wrapper to prevent overflow / clipping on standard viewports */}
        <div className="py-12 border-b border-zinc-200 overflow-hidden select-none text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-300 uppercase whitespace-nowrap">
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