import React from "react";

// ✅ Import all the child components you are using
import WorkingCapitalLoanHero from "../components/WorkingCapitalLoanHero";
import WorkingCapitalLoanDetails from "../components/WorkingCapitalLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <WorkingCapitalLoanHero/>
      <WorkingCapitalLoanDetails />
      {<DownloadAppSection /> }
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
