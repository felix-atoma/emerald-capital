import React from "react";
import FixedDepositHero from "../components/FixedDepositHero";
import FixedDepositSection from "../components/FixedDepositSection";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const FixedDepositPage = () => {
  return (
    <div>
      <FixedDepositHero/>
      <FixedDepositSection/>
        <DownloadAppSection />
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default FixedDepositPage;
