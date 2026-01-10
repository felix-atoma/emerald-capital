import React from "react";

// ✅ Import all the child components you are using
import HealthMedicalLoanHero from "../components/HealthMedicalLoanHero";
import HealthMedicalLoanDetails from "../components/HealthMedicalLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <HealthMedicalLoanHero/>
      <HealthMedicalLoanDetails />
      <DownloadAppSection />
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
