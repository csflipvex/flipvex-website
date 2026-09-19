import { Check, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { packagesData } from '../../data/services';

export const PackagesSection = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <Container>
        <SectionHeading 
          badge="Productized Stacks"
          title="Enterprise Architecture Packages"
          subtitle="Engineered modules designed to automate operations, simplify catalogs, and establish market leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-zinc-50 text-zinc-900 shadow-xl ring-2 ring-brand-purple border border-transparent' 
                  : 'bg-zinc-50 border border-zinc-200 text-zinc-900 hover:border-zinc-300 hover:shadow-sm'
              }`}
            >
              <div>
                <span className="inline-block text-[11px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-4 bg-brand-accent text-white">
                  {pkg.tag}
                </span>
                
                <h3 className="text-2xl font-bold tracking-tight mb-2 text-zinc-900">
                  {pkg.title}
                </h3>
                
                <p className="text-sm mb-6 text-zinc-600">
                  {pkg.subtitle}
                </p>

                <div className="h-px w-full my-6 bg-zinc-200" />

                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-snug">
                      <span className="p-0.5 rounded-full mt-0.5 text-brand-purple">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="text-zinc-700">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                to="/contact" 
                variant={pkg.highlight ? 'primary' : 'outline'}
                className="w-full"
              >
                <span className="flex items-center justify-center gap-2">
                  Inquire Scope
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};