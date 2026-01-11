import React from "react";
import OwnershipAndShareholdersHero from "../components/OwnershipAndShareholdersHero";
import OwnershipAndShareholdersDetails from "../components/OwnershipAndShareholdersDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";
import MicrofinanceHero from "../components/MicrofinanceHero";

const MicroEnterpriseExpansionPage = () => {
  return (
    <div>
      <OwnershipAndShareholdersHero/>
      <OwnershipAndShareholdersDetails/>
        {/* <DownloadAppSection /> */}
        {/* <FAQsSection /> */}
        {/* <LoanCalculator /> */}
        {/* <BusinessCTABanner /> */}
    </div>
  );
};

export default MicroEnterpriseExpansionPage;
