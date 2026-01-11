import React from "react";

// ✅ Import all the child components you are using
import InvestmentWealthManagementHero from "../components/Investmentwealthmanagementhero";
import InvestmentWealthManagementDetails from "../components/InvestmentWealthManagementDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <InvestmentWealthManagementHero/>
      <InvestmentWealthManagementDetails />
      {/* <DownloadAppSection /> */}
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
