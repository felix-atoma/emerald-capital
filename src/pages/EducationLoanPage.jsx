import React from "react";

// ✅ Import all the child components you are using
import EducationLoanHero from "../components/EducationLoanHero";
import EducationLoanDetails from "../components/EducationLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <EducationLoanHero/>
      <EducationLoanDetails/>
      {/* {<DownloadAppSection /> } */}
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
