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
      <HowItStarted imageUrl="/path-to-relaxed-person.jpg" />
      <FinancialSolutions imageUrl="/path-to-professional.jpg" />
    </div>
  );
}
