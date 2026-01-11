import React from "react";
import EmeraldPayHero from "../components/EmeraldPayHero";
import EmeraldPayDetails from "../components/EmeraldPayDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const FixedDepositPage = () => {
  return (
    <div>
      <EmeraldPayHero/>
      <EmeraldPayDetails/>
        <DownloadAppSection />
        {/* <FAQsSection /> */}
        {/* <LoanCalculator /> */}
        <BusinessCTABanner />
    </div>
  );
};

export default FixedDepositPage;
