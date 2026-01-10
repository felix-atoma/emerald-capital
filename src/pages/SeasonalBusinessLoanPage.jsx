import React from "react";
import SeasonalBusinessLoanHero from "../components/SeasonalBusinessLoanHero";
import SeasonalBusinessLoanDetails from "../components/SeasonalBusinessLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const Agric = () => {
  return (
    <div>
      <SeasonalBusinessLoanHero/>
      <SeasonalBusinessLoanDetails/>
        <DownloadAppSection />
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default Agric;
