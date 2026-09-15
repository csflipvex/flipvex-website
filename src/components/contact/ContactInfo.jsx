import { Mail, MapPin, Phone, Building } from 'lucide-react';
import { company } from '../../data/company';

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">
          Communications Channel
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark mt-2">
          Let’s discuss your technical roadmap.
        </h2>
        <p className="mt-4 text-base text-black leading-relaxed">
          Inquire regarding web engineering, custom ERP deployments, or corporate identity projects. Our engineering team reviews submissions within 24 hours.
        </p>
      </div>

      <div className="space-y-6 pt-2">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-brand-sand flex items-center justify-center text-brand-dark flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500">Corporate Email</span>
            <a href={`mailto:${company.email}`} className="text-base font-bold text-brand-dark hover:text-brand-purple transition">
              {company.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-brand-sand flex items-center justify-center text-brand-dark flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500">Kozhikode Office</span>
            <address className="not-italic text-sm font-medium text-brand-dark leading-relaxed">
              {company.address.full}
            </address>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-brand-sand flex items-center justify-center text-brand-dark flex-shrink-0">
            <Building className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500">Corporate Registration</span>
            <span className="text-sm font-semibold text-brand-dark block">
              {company.name}
            </span>
            <span className="text-xs font-mono text-zinc-500">
              CIN: {company.cin}
            </span>
          </div>
        </div>

        {company.hasPhone && (
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand-sand flex items-center justify-center text-brand-dark flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500">Phone Support</span>
              <a href={`tel:${company.phone}`} className="text-base font-bold text-brand-dark hover:text-brand-purple transition">
                {company.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};