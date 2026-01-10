import React from "react";

// ✅ Import all the child components you are using
import SavingsProductsHero from "../components/SavingsProductsHero";
import SavingsProductsDetails from "../components/SavingsProductsDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <SavingsProductsHero/>
      <SavingsProductsDetails />
      {<DownloadAppSection /> }
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
