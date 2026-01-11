import React from "react";

// ✅ Import all the child components you are using
import InsuranceProductsHero from "../components/InsuranceProductsHero";
import InsuranceProductsDetails from "../components/InsuranceProductsDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <InsuranceProductsHero/>
      <InsuranceProductsDetails />
      {/* <DownloadAppSection /> */}
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
