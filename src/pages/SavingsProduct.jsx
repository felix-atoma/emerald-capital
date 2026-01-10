import React from "react";

// ✅ Import all the child components you are using
import SavingsHero from '../components/SavingsHero';
import SavingsDetails from "../components/SavingsDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <SavingsHero/>
      <SavingsDetails />
      <DownloadAppSection />
      <FAQsSection />
      <BusinessCTABanner />
    </div>
  );
}
