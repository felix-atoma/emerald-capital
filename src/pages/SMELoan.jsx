import React from "react";
import DarkHeroSection from "../components/DarkHeroSection";
import LightDetailsSection from "../components/LightDetailsSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";
import DownloadAppSection from "../components/DownloadAppSection";

const SMELoan = () => {
  return (
    <div>
      <DarkHeroSection/>       {/* ✅ Fixed capitalization */}
      <LightDetailsSection />
      <DownloadAppSection />
      <FAQsSection />
      <LoanCalculator />
      <BusinessCTABanner />
    </div>
  );
};

export default SMELoan;
