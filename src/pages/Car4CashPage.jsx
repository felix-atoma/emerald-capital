import React from "react";
import Car4CashHero from "../components/Car4CashHero";
import Car4CashLoanDetails from "../components/Car4CashLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";

const Car4CashPage = () => {
  return (
    <div>
      <Car4CashHero/>
      <Car4CashLoanDetails/>
        {/* <DownloadAppSection /> */}
        <FAQsSection />
        <LoanCalculator />
        <BusinessCTABanner />
    </div>
  );
};

export default Car4CashPage;
