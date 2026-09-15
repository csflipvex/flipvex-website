import { Container } from '../common/Container';

export const IntroStatsSection = () => {
  return (
    <section className="w-full bg-brand-sand py-16 md:py-24 border-b border-brand-sand-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">
              Engineering Metrics
            </span>
            
            <p className="text-sm font-mono text-zinc-600">
              Successful digital platforms and custom modules shipped.
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-dark leading-snug">
              We are a specialized engineering and design consultancy building brand identities, automated ERP suites, and reactive web applications <span className="text-brand-purple underline decoration-brand-accent decoration-2 underline-offset-4">tailored for real business growth</span>.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};