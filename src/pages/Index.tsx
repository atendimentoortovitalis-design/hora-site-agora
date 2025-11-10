import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <HowItWorks />
      <Testimonials />
      <Offer />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;
