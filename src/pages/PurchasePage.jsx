import React from "react";

// ✅ Import all the child components you are using
import PurchasePageHero from "../components/PurchaseHero";
import PurchasePageDetails from "../components/PurchasePageDetails";

export default function PurchasePage() {
  return (
    <div className="min-h-screen">
      <PurchasePageHero />
      <PurchasePageDetails />
    </div>
  );
}