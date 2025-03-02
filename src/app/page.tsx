import { Hero, Features, HowItWorks } from "@/components/home";

function HomePage() {
  return (
    <div className="bg-[#F4F6F8] ">
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default HomePage;
