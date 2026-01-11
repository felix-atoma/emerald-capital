import React from "react";
import BusinessLoanHero from "../components/Businessloanhero";
import BusinessLoanDetails from "../components/BusinessLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const FixedDepositPage = () => {
  return (
    <div>
      <BusinessLoanHero/>
      <BusinessLoanDetails/>
        {/* <DownloadAppSection /> */}
        <FAQsSection />
        {/* <LoanCalculator /> */}
        <BusinessCTABanner />
    </div>
  );
};

export default FixedDepositPage;
