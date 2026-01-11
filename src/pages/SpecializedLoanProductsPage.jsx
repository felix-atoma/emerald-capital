import React from "react";

// ✅ Import all the child components you are using
import SpecializedLoanProductsHero from "../components/SpecializedLoanProductsHero";
import SpecializedLoanProductsDetails from "../components/SpecializedLoanProductsDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";


export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <SpecializedLoanProductsHero/>
      <SpecializedLoanProductsDetails />
      {/* {<DownloadAppSection /> } */}
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
