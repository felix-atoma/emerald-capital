import React from "react";

// ✅ Import all the child components you are using
import GroupCommunityLoanHero from "../components/GroupCommunityLoanHero";
import GroupCommunityLoanDetails from "../components/GroupCommunityLoanDetails";
import DownloadAppSection from "../components/DownloadAppSection";
import FAQsSection from "../components/FAQsSection";
import BusinessCTABanner from "../components/BusinessCTABanner";

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen">
      <GroupCommunityLoanHero/>
      <GroupCommunityLoanDetails />
      {/* <DownloadAppSection /> */}
      <FAQsSection />
      {/* <BusinessCTABanner /> */}
    </div>
  );
}
