import React from "react";
import EmergencyPersonalLoanHero from "../components/EmergencyPersonalLoanHero";
import EmergencyPersonalLoanDetails from "../components/EmergencyPersonalLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const FixedDepositPage = () => {
  return (
    <div>
      <EmergencyPersonalLoanHero/>
      <EmergencyPersonalLoanDetails/>
        <DownloadAppSection />
        {/* <FAQsSection /> */}
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default FixedDepositPage;
