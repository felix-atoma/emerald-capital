import React from "react";
import BoardAndExecutiveLeadershipHero from "../components/BoardAndExecutiveLeadershipHero";
import BoardAndExecutiveLeadershipDetails from "../components/BoardAndExecutiveLeadershipDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";
import MicrofinanceHero from "../components/MicrofinanceHero";

const MicroEnterpriseExpansionPage = () => {
  return (
    <div>
      <BoardAndExecutiveLeadershipHero/>
      <BoardAndExecutiveLeadershipDetails/>
        {/* <DownloadAppSection /> */}
        {/* <FAQsSection /> */}
        {/* <LoanCalculator /> */}
        {/* <BusinessCTABanner /> */}
    </div>
  );
};

export default MicroEnterpriseExpansionPage;
