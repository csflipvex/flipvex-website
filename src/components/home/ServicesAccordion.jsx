import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { servicesList } from '../../data/services';

export const ServicesAccordion = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="w-full py-20 md:py-32 bg-zinc-50 border-y border-zinc-200/80">
      <Container>
        <SectionHeading 
          badge="Core Competencies"
          title="Designed with intention. Engineered for durability."
          subtitle="Every project begins with concrete architectural requirements and completes with reliable, production-tested software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          <div className="lg:col-span-7 space-y-4">
            {servicesList.map((service, index) => {
              const isOpen = activeIdx === index;
              return (
                <div 
                  key={service.id}
                  className={`border rounded-2xl transition duration-200 overflow-hidden bg-white ${
                    isOpen ? 'border-brand-dark shadow-sm' : 'border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <button
                    onClick={() => setActiveIdx(index)}
                    aria-expanded={isOpen}
                    className="w-full p-6 sm:p-7 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-sm font-bold text-brand-accent">
                        ({service.id})
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                        {service.title}
                      </h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-accent' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-zinc-100 space-y-4">
                      <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.capabilities.map((cap, i) => (
                          <span key={i} className="text-xs font-mono font-medium px-3 py-1 bg-zinc-100 text-zinc-700 rounded-md">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-zinc-200 relative bg-zinc-100">
              <img 
                src={servicesList[activeIdx].image} 
                alt={servicesList[activeIdx].title}
                className="w-full h-full object-cover transition-opacity duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                  {servicesList[activeIdx].category}
                </span>
                <div className="text-lg font-bold mt-1">
                  {servicesList[activeIdx].title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};