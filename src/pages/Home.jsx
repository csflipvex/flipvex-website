import { HeroSection } from '../components/home/HeroSection';
import { IntroStatsSection } from '../components/home/IntroStatsSection';
import { PackagesSection } from '../components/home/PackagesSection';
import { ServicesAccordion } from '../components/home/ServicesAccordion';
import { ApplicationsGrid } from '../components/home/ApplicationsGrid';
import { WhyChooseSection } from '../components/home/WhyChooseSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <IntroStatsSection />
      <PackagesSection />
      <ServicesAccordion />
      <ApplicationsGrid />
      <WhyChooseSection />
    </>
  );
};