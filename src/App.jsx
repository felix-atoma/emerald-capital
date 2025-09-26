import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/Rootlayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* RootLayout wraps all content */}
        <Route path="/*" element={<RootLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
