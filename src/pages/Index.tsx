import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { VoiceVisualizer } from "@/components/VoiceVisualizer";
import { InfrastructureMonitor } from "@/components/InfrastructureMonitor";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Dashboard />
      <VoiceVisualizer />
      <InfrastructureMonitor />
      <Team />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
