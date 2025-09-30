import React from "react";
import MudarabahHero from "../components/MudarabahHero";
import MudarabahService from "../components/MudarabahService";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";
import DownloadAppSection from "../components/DownloadAppSection";

const SMELoan = () => {
  return (
    <div>
      <MudarabahHero/>       {/* ✅ Fixed capitalization */}
      <MudarabahService />
      <DownloadAppSection />
      <FAQsSection />
      <LoanCalculator />
      <BusinessCTABanner />
    </div>
  );
};

export default SMELoan;
