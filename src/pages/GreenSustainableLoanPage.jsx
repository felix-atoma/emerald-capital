import React from "react";
import GreenSustainableLoanHero from "../components/GreenSustainableLoanHero";
import GreenSustainableLoanDetails from "../components/GreenSustainableLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const FixedDepositPage = () => {
  return (
    <div>
      <GreenSustainableLoanHero/>
      <GreenSustainableLoanDetails/>
        <DownloadAppSection />
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default FixedDepositPage;
