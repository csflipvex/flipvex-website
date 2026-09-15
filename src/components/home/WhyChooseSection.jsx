import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const WhyChooseSection = () => {
  return (
    <section className="w-full py-20 bg-brand-dark text-white overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">
              Engineering Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Let's construct your company's digital advantage.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-zinc-300">
              <div className="border-l-2 border-brand-accent pl-4">
                <div className="font-bold text-white mb-1">Tailored Architecture</div>
                Engineered specifically around your operational constraints, never generic themes.
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <div className="font-bold text-white mb-1">Modern Performance</div>
                High Google Core Web Vitals, reactive frontends, and accessible markup.
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <div className="font-bold text-white mb-1">Scalable Storage</div>
                Modular databases capable of growing into comprehensive corporate hubs.
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <div className="font-bold text-white mb-1">Direct Engineering Support</div>
                Ongoing technical advisory and infrastructure maintenance based out of Kozhikode.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Corporate Engagement
            </div>
            <p className="text-xl font-bold leading-snug text-white">
              Ready to automate manual spreadsheets or commission a high-velocity web portal?
            </p>
            <Button to="/contact" variant="primary" className="w-full">
              Book Architecture Consultation
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};