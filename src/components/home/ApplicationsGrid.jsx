import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { applicationsBuilt } from '../../data/services';

export const ApplicationsGrid = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading 
          badge="Domain Expertise"
          title="Solutions Crafted For Scale"
          subtitle="From retail pharmaceutical workflows to high-volume B2B contract pipelines, our foundations handle complexity cleanly."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {applicationsBuilt.map((app, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-brand-sand/50 border border-brand-sand-dark flex flex-col justify-between hover:bg-brand-sand transition"
            >
              <div>
                <div className="font-mono text-xs text-brand-accent font-bold mb-3">
                  SYS.0{idx + 1}
                </div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">
                  {app.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};