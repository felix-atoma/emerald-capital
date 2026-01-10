import React from "react";

// ✅ Import all the child components you are using
import MicrofinanceLoanProductsHero from "../components/MicrofinanceLoanProductsHero";
import MicroEnterpriseExpansionLoanDetails from "../components/MicroEnterpriseExpansionLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function MicrofinanceLoanProductsPage() {
  return (
    <div className="min-h-screen">
      <MicrofinanceLoanProductsHero/>
      <MicroEnterpriseExpansionLoanDetails />
      <DownloadAppSection />
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
