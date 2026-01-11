import React from "react";

// ✅ Import all the child components you are using
import FuneralLoanHero from "../components/FuneralLoanHero";
import FuneralLoanDetails from "../components/FuneralLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <FuneralLoanHero/>
      <FuneralLoanDetails />
      {/* <DownloadAppSection /> */}
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
