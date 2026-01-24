import React from "react";

// ✅ Import all the child components you are using
import PurchaseHero from '../components/PurchaseHero'
import PurchaseDetails from '../components/PurchaseDetails'

export default function PurchasePage() {
  return (
    <div className="min-h-screen">
      <PurchaseHero />
      <PurchaseDetails />
    </div>
  );
}