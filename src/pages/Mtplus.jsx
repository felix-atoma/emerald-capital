import React from "react";
import LoanHero from "../components/IPLoanHero";
import LoanDetailsSection from "../components/LoanDetailsSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";
import DownloadAppSection from "../components/DownloadAppSection";

const MTPlus = () => {
  return (
    <div>
      <LoanHero />       {/* ✅ Fixed capitalization */}
      <LoanDetailsSection />
      <DownloadAppSection />
      <FAQsSection />
      <LoanCalculator />
      <BusinessCTABanner />
    </div>
  );
};

export default MTPlus;
