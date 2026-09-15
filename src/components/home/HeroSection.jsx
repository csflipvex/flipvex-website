import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { company } from '../../data/company';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-brand-dark text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 text-white font-black text-[18vw] leading-none tracking-tighter uppercase whitespace-nowrap">
        FLIPVEX
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
            We engineer high-impact <span className="text-zinc-400 italic">digital systems</span> that scale without friction.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            {company.tagline}. Purpose-built web platforms, unified ERP packages, and custom IT software engineered for performance.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button to="/contact" variant="primary">
              <span className="flex items-center gap-2">
                Initiate Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button to="/our-clients" variant="outline" className="border-zinc-700 text-white hover:bg-white hover:text-black">
              Explore Our Portfolio
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};