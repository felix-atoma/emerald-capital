import React from "react";

// ✅ Import all the child components you are using
import TransportAndEquipmentLoanHero from "../components/TransportAndEquipmentLoanHero";
import TransportAndEquipmentLoanDetails from "../components/TransportAndEquipmentLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <TransportAndEquipmentLoanHero/>
      <TransportAndEquipmentLoanDetails />
      {<DownloadAppSection /> }
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
