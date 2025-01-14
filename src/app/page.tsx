import { Hero, Features, HowItWorks } from "@/components/home";
import { PublicFooter, PublicHeader } from "@/components/layouts";

function HomePage() {
  return (
    <div className="bg-[#F4F6F8] ">
      <PublicHeader />

      <Hero />
      <Features />
      <HowItWorks />

      <PublicFooter />
    </div>
  );
}

export default HomePage;
