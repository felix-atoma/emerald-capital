import React from "react";
import TreasuryNotesHero from "../components/TreasuryNotesHero";
import TreasuryNoteDetails from "../components/TreasuryNoteDetails";
import FAQsSection from "../components/FAQsSection";
import LoanCalculator from "../components/LoanCalculator";
import BusinessCTABanner from "../components/BusinessCTABanner";
import DownloadAppSection from "../components/DownloadAppSection";

const LoanPage = () => {
  return (
    <div>
      <TreasuryNotesHero/>       {/* ✅ Fixed capitalization */}
      <TreasuryNoteDetails/>
      <DownloadAppSection />
      <FAQsSection />
      <LoanCalculator />
      <BusinessCTABanner />
    </div>
  );
};

export default LoanPage;
