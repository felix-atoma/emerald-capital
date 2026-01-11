import React from "react";
import HeroSection from '../components/HeroSection';
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import DownloadAppSection from "../components/DownloadAppSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

function SusuAccount() {
  return (
    <div className="min-h-screen">
      <HeroSection />
        {/* <DownloadAppSection /> */}
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
      
    </div>
  );
}

export default SusuAccount