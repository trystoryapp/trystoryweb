import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Tariffs from "@/components/site/Tariffs";
import Perks from "@/components/site/Perks";
import AppSection from "@/components/site/AppSection";
import Channel from "@/components/site/Channel";
import Support from "@/components/site/Support";
import Footer from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Tariffs />
        <Perks />
        <AppSection />
        <Channel />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default Index;