import React from "react";
import MicroEnterpriseExpansionLoanHero from "../components/Microenterpriseloanhero";
import MicroEnterpriseExpansionLoanDetails from "../components/MicroEnterpriseExpansionLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";
import MicrofinanceHero from "../components/MicrofinanceHero";

const MicroEnterpriseExpansionPage = () => {
  return (
    <div>
      <MicroEnterpriseExpansionLoanHero/>
      <MicroEnterpriseExpansionLoanDetails/>
        {/* <DownloadAppSection /> */}
        {/* <FAQsSection /> */}
        {/* <LoanCalculator /> */}
        {/* <BusinessCTABanner /> */}
    </div>
  );
};

export default MicroEnterpriseExpansionPage;
