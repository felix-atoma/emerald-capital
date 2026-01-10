import React from "react";
import RemittanceHero from "../components/RemittanceHero";
import RemittanceDetails from "../components/RemittanceDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const Agric = () => {
  return (
    <div>
      <RemittanceHero/>
      <RemittanceDetails/>
        <DownloadAppSection />
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default Agric;
