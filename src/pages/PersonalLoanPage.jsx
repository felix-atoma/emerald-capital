import React from "react";
import PersonalLoanHero from "../components/PersonalLoan";
import PersonalLoanDetails from "../components/PersonalLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const Agric = () => {
  return (
    <div>
      <PersonalLoanHero/>
      <PersonalLoanDetails/>
        <DownloadAppSection />
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default Agric;
