import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 

const FinancialProductsSite = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Only fix nav when this section is in view
        setIsNavFixed(rect.top <= 0 && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gray-50 overflow-x-hidden relative"
    >
      {/* Animated Background Elements - Now absolutely positioned within this component */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Spider web lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="#6366f1"
            strokeWidth="1"
          />
          <line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#6366f1"
            strokeWidth="1"
          />
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="#6366f1"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="#6366f1"
            strokeWidth="1"
          />
        </svg>

        {/* Orbiting color bubbles */}
        <div
          className="absolute top-10 left-10 w-12 h-12 bg-purple-500 rounded-full opacity-60 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-8 h-8 bg-pink-400 rounded-full opacity-50 animate-pulse"
          style={{ animationDuration: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-10 h-10 bg-purple-400 rounded-full opacity-50 animate-pulse"
          style={{ animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-14 h-14 bg-red-300 rounded-full opacity-40 animate-bounce"
          style={{ animationDuration: "2.5s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-12 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="text-gray-700">
              Excellent financial products to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              help you with your financial needs
            </span>
          </h1>
        </div>
      </div>

      {/* Navigation - Increased z-index to prevent conflicts */}
      <nav
        className={`${
          isNavFixed ? "fixed top-20 left-8 right-8 shadow-lg" : "relative"
        } bg-blue-50 z-[100] transition-all duration-300 rounded-full`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 py-4">
            <button
              onClick={() => scrollToSection("ippis")}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              SME Loan
            </button>
            <button
              onClick={() => scrollToSection("mtgreen")}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              Business Loan
            </button>
            <button
              onClick={() => scrollToSection("mtloan")}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              Personal Loan
            </button>
            <button
              onClick={() => scrollToSection("sme")}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              Funeral Loan
            </button>
            <button
              onClick={() => scrollToSection("car4cash")}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              Educational Loan
            </button>
          </div>
        </div>
      </nav>

      {/* IPPIS Loan Section */}
      <section id="ippis" className="relative py-20 bg-white">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-gray-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-purple-500 rounded-full opacity-40 animate-bounce"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl">
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/loans img.jpg"
                    alt="IPPIS Loan Illustration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 right-10 bg-white px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm font-semibold">Loan Disbursement</p>
                <p className="text-xl font-bold">GHS 1,000,000</p>
                <p className="text-green-600 font-bold">PAID</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                SME Loan
              </p>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-gray-700">Prompt Cash Loans for</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FG Civil Servants
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Put your financial worries to rest with our fast and easy SME
                loans. Pay your rent, school fees, medical expenses and other
                financial needs at a go.
              </p>
              <Link to="/applyforloanpage">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition">
                  Apply For SME Loan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MTGreen Section */}
      <section id="mtgreen" className="relative py-20 bg-gray-50">
        <div className="absolute top-10 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-10 h-10 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Business Loan:
              </p>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-gray-700">
                  Say goodbye to high costs of fuel and
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  electricity today
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Enjoy uninterrupted power supply to your homes, shops, and
                offices. Get a quality and affordable solar energy system with
                flexible repayments ranging from 1 to 12 months
              </p>
              <Link to="/applyforloanpage">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition flex items-center gap-2">
                  Apply For Business Loan
                  <span>→</span>
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="mt.png" // ✅ put your image inside the /public folder
                  alt="Solar Energy System"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-5 right-10 bg-white px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm font-semibold flex items-center gap-2">
                  15kva purchased <span className="text-green-600">✓</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MTloan Section */}
      <section id="mtloan" className="relative py-20 bg-white">
        <div
          className="absolute top-20 left-20 w-16 h-16 border-2 border-purple-300 rounded-full animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl">
                <img
                  src="/loan-approved-ghana.png"  // ✅ Fixed: Kept the new version, removed conflict markers
                  alt="MT Loan Illustration"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 right-10 bg-white px-6 py-4 rounded-2xl shadow-lg">
                <p className="text-green-600 text-2xl mb-1">✓</p>
                <p className="text-xs font-semibold">
                  Loan Approved (00:05:10)
                </p>
                <p className="text-lg font-bold">GHS 2,000,000</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Personal Loan:
              </p>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-gray-700">Get your loan approved in</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  10 minutes or less!
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Enjoy quick access of up to GHS 1 million in just 10 minutes
                or less! Settle your financial needs with no hassle. No
                collateral is required.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">✓</span>
                  <span className="text-gray-700">
                    Disbursement in less than 10 minutes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">✓</span>
                  <span className="text-gray-700">No Collateral</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">✓</span>
                  <span className="text-gray-700">Easy Application</span>
                </div>
              </div>
              <Link to="/applyforloanpage">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition">
                  Apply For Personal Loans
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SME Loan Section */}
      <section id="sme" className="relative py-20 bg-gray-50">
        <div className="absolute top-40 right-40 w-12 h-12 bg-purple-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-pink-300 rounded-full animate-pulse"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Funeral Loan:
              </p>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-gray-700">Beta Business, </span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Beta Moni
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Your business deserves the right amount of funds and that's
                where we come in. Get easy access to funds of up to GHS 100 million
                to take your business to the next level.
              </p>
              <Link to="/applyforloanpage">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition">
                  Apply For Funeral Loan
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl">
                <img
                  src="lady.png"  // ✅ put sme.png in /public folder, or import from /src/assets
                  alt="SME Loan Illustration"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 right-10 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-green-500">
                <p className="text-sm font-semibold">Funeral Loan</p>
                <p className="text-lg font-bold text-green-600 flex items-center gap-2">
                  Approved <span>✓</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car4Cash Section */}
      <section id="car4cash" className="relative py-20 bg-white">
        {/* Decorative bubbles */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-10 h-10 bg-red-400 rounded-full opacity-40 animate-bounce"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side: Car Image */}
            <div className="md:w-1/2 relative flex justify-center">
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-gray-200">
                <img
                  src="/car-loan-ghana.png"   // ✅ put your image in /public OR import from /src/assets
                  alt="Car Valuation Visual"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating price tag */}
              <div className="absolute top-5 right-10 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-green-500">
                <p className="text-sm font-semibold">
                  2024 Benz ={" "}
                  <span className="text-green-600">GHS 100,000,000</span>
                </p>
              </div>
            </div>

            {/* Right side: Text */}
            <div className="md:w-1/2">
              <p className="text-sm font-semibold text-gray-600 mb-2">Education Loan:</p>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-gray-700">Your Car can be</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  much more!
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Do you have a car and you need quick funds? Explore the value of your
                car and get the funds that you need.
              </p>
              <Link to="/applyforloanpage">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition flex items-center gap-2">
                  Apply For Education Loan
                  <span>→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="relative py-20 bg-gray-50">
        <div className="absolute top-10 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-40 w-12 h-12 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Investment:
              </p>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-gray-700">Grow your funds </span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  with us
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Grow your wealth with us and enjoy guaranteed return on
                investments. Security guaranteed with easy liquidation.
              </p>
              <Link to="/applyforloanpage">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition flex items-center gap-2">
                  Invest With Us
                  <span>→</span>
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative flex justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-gray-200">
                  <img
                    src="download.jpg"   // ✅ put your image in /public OR import from /src/assets
                    alt="Grow Your Fund"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating label (optional) */}
                <div className="absolute bottom-5 left-10 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-purple-500">
                  <p className="text-sm font-semibold">
                    Steady Growth ={" "}
                    <span className="text-purple-600">+15% ROI</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialProductsSite;