import React from "react";
import AutoFinanceHero from "../components/AutoFinanceHero";

import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const Car4CashPage = () => {
  return (
    <div>
      
      <AutoFinanceHero/>
        <DownloadAppSection />
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default Car4CashPage;
