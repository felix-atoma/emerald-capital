import React from "react";
import HeroSectionMTL from "../components/HeroSectionMTL";
import MTLoansSection from "../components/MTLoansSection";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const LoanPage = () => {
  return (
    <div>
      <HeroSectionMTL />
      <MTLoansSection />
        <DownloadAppSection />
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default LoanPage;
