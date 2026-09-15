import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { clientsData } from '../../data/clients';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ClientMarqueeSection = () => {
  // Duplicate array 3 times to ensure a seamless, gap-free infinite loop on large screens
  const scrollingClients = [...clientsData, ...clientsData, ...clientsData];

  return (
    <section className="w-full py-20 bg-brand-dark text-white overflow-hidden border-t border-zinc-800">
      <Container>
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-accent text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Flagship Customers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Trusted by businesses to build, manage, and scale their digital commerce
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Powering high-performance e-commerce platforms, custom web applications, and enterprise software for industry leaders.
          </p>
        </div>
      </Container>

      {/* Infinite Scrolling Marquee Track Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left / Right Fade Gradients for smooth edge blending */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-8">
          {scrollingClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-brand-accent/50 transition-all duration-300 shadow-lg min-w-[260px] flex-shrink-0"
            >
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-base font-bold text-white truncate tracking-tight">
                  {client.name}
                </h4>
                <span className="text-xs font-mono text-brand-accent uppercase tracking-wider block truncate">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call to Action Button */}
      <Container className="mt-14">
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-brand-dark hover:bg-brand-accent hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-brand-accent/25"
          >
            <span>Build Your Digital Commerce Platform Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
};