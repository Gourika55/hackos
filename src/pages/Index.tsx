import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import RolesSection from "@/components/landing/RolesSection";
import ResourceSection from "@/components/landing/ResourceSection";
import AnalyticsSection from "@/components/landing/AnalyticsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <RolesSection />
        <ResourceSection />
        <AnalyticsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
