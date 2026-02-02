import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import MissionSection from "@/components/sections/mission";
import CapabilitiesFlow from "@/components/sections/capabilities-flow";
import UseCasesBanner from "@/components/sections/use-cases-banner";
import FeaturesGrid from "@/components/sections/features-grid";
import EnterpriseReady from "@/components/sections/enterprise-ready";
import CTAFooter from "@/components/sections/cta-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow pt-10">
        <HeroSection />
        <MissionSection />
        <CapabilitiesFlow />
        <UseCasesBanner />
        <FeaturesGrid />
        <EnterpriseReady />
        <CTAFooter />
      </main>
    </div>
  );
}
