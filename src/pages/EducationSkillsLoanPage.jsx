import React from "react";
import EducationSkillsLoanHero from "../components/EducationSkillsLoanHero";
import EducationSkillsLoanDetails from "../components/EducationSkillsLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const FixedDepositPage = () => {
  return (
    <div>
      <EducationSkillsLoanHero/>
      <EducationSkillsLoanDetails/>
        {/* <DownloadAppSection /> */}
        {/* <FAQsSection /> */}
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default FixedDepositPage;
