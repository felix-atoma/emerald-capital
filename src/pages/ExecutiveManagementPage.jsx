import React from "react";
import ExecutiveManagementHero from "../components/ExecutiveManagementHero";
import ExecutiveManagementDetails from "../components/ExecutiveManagementDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";
import MicrofinanceHero from "../components/MicrofinanceHero";

const MicroEnterpriseExpansionPage = () => {
  return (
    <div>
      <ExecutiveManagementHero/>
      <ExecutiveManagementDetails/>
        {/* <DownloadAppSection /> */}
        {/* <FAQsSection /> */}
        {/* <LoanCalculator /> */}
        {/* <BusinessCTABanner /> */}
    </div>
  );
};

export default MicroEnterpriseExpansionPage;
