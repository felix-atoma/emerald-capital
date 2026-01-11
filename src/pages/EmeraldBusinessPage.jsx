import React from "react";

// ✅ Import all the child components you are using
import EducationLoanHero from "../components/EducationLoanHero";
import EmeraldBusinessDetails from "../components/EmeraldBusinessDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";
import EmeraldBusinessHero from "../components/EmeraldBusinessHero";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <EmeraldBusinessHero/>
      <EmeraldBusinessDetails />
      <DownloadAppSection />
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
