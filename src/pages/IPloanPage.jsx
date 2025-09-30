import React from "react";
import IPLoanHero from "../components/IPLoanHero";
import IPPISLoan from "../components/IPPISLoan";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const IPloanPage = () => {
  return (
    <div>
      <IPLoanHero />
      <IPPISLoan/>
        <DownloadAppSection />
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default IPloanPage;
