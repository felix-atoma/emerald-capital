import React from "react";
import BankingHero from "../components/BankingHero";
import WhoWeAre from "../components/WhoWeAre";
import HowItStarted from "../components/HowItStarted";
import FinancialSolutions from "../components/FinancialSolutions";

export default function AboutPage() {
  return (
    <div className="w-full">
      <BankingHero />
      <WhoWeAre />
      {/* <HowItStarted imageUrl="/path-to-relaxed-person.jpg" /> */}
      <FinancialSolutions imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80" />
    </div>
  );
}
