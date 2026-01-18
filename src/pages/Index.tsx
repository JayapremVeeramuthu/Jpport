import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import TerminalDemo from "@/components/TerminalDemo";
import WhySection from "@/components/WhySection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Features />
        <TerminalDemo />
        <WhySection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
