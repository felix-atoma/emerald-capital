import React from "react";
import BusinessStarterLoanHero from "../components/BusinessStarterLoanHero";
import BusinessStarterLoanDetails from "../components/BusinessStarterLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const FixedDepositPage = () => {
  return (
    <div>
      <BusinessStarterLoanHero/>
      <BusinessStarterLoanDetails/>
        {/* <DownloadAppSection /> */}
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default FixedDepositPage;
