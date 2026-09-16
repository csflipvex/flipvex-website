import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { company } from '../../data/company';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-brand-dark text-white pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
      
      {/* Background Video Layer with Bright Display and Softer Side Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-90 scale-105"
        >
          <source src="/flipvex/flipvex_banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Soft gradient overlay on the left to keep text legible while letting the video shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/40 to-transparent" />
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