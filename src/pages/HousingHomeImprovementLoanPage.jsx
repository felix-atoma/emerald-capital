import React from "react";

// ✅ Import all the child components you are using
import HousingHomeImprovementLoanHero from "../components/HousingHomeImprovementLoanHero";
import HousingHomeImprovementLoanDetails from "../components/HousingHomeImprovementLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <HousingHomeImprovementLoanHero/>
      <HousingHomeImprovementLoanDetails />
      {/* <DownloadAppSection /> */}
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
