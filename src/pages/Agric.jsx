import React from "react";
import AgribusinessHero from "../components/AgribusinessHero";
import AgricFinanceDetails from "../components/AgricFinanceDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const Agric = () => {
  return (
    <div>
      <AgribusinessHero/>
      <AgricFinanceDetails/>
        <DownloadAppSection />
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default Agric;
