import { HeroSection } from '../components/home/HeroSection';
import { HomeClientsSection } from '../components/home/HomeClientsSection';
import { IntroStatsSection } from '../components/home/IntroStatsSection';
import { PackagesSection } from '../components/home/PackagesSection';
import { ServicesAccordion } from '../components/home/ServicesAccordion';
import { ApplicationsGrid } from '../components/home/ApplicationsGrid';
import { WhyChooseSection } from '../components/home/WhyChooseSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeClientsSection />
      <IntroStatsSection />
      <PackagesSection />
      <ServicesAccordion />
      <ApplicationsGrid />
      <WhyChooseSection />
    </>
  );
};