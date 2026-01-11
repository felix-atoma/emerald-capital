import React from "react";
import LeadershipAndGovernanceHero from "../components/LeadershipAndGovernanceHero";
import LeadershipAndGovernanceDetails from "../components/LeadershipAndGovernanceDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";
import MicrofinanceHero from "../components/MicrofinanceHero";

const MicroEnterpriseExpansionPage = () => {
  return (
    <div>
      <LeadershipAndGovernanceHero/>
      <LeadershipAndGovernanceDetails/>
        {/* <DownloadAppSection /> */}
        {/* <FAQsSection /> */}
        {/* <LoanCalculator /> */}
        {/* <BusinessCTABanner /> */}
    </div>
  );
};

export default MicroEnterpriseExpansionPage;
