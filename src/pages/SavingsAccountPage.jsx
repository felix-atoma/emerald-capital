import React from "react";

// ✅ Import all the child components you are using
import SavingsHeroBanner from "../components/SavingsHeroBanner";
import SavingsAccountSection from "../components/SavingsAccountSection";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <SavingsHeroBanner />
      <SavingsAccountSection />
      {/* <DownloadAppSection /> */}
      <FAQsSection />
      <BusinessCTABanner />
    </div>
  );
}
