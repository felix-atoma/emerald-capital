import React from "react";

// ✅ Import all the child components you are using
import InvestmentDetails from "../components/InvestmentDetails";
import InvestmentHero from '../components/InvestmentHero';
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <InvestmentHero/>
      <InvestmentDetails />
      <DownloadAppSection />
      {/* <FAQsSection /> */}
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
