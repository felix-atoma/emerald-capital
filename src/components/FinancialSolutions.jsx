import React from "react";
import { useState } from 'react';

export default function FinancialSolutions({ imageUrl = "/path-to-your-image.jpg" }) {
  const [activeTab, setActiveTab] = useState('vision');

  const tabContent = {
    vision: "To be the best and leading Micro finance bank in any market we serve.",
    mission: "We are committed to empowering individuals and businesses through innovative banking solutions, providing exceptional customer service and driving financial inclusion across Ghana.",
    values: "Integrity, Excellence, Innovation, Customer Focus, and Community Development are the core values that guide everything we do at Emerald Captial."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={imageUrl} 
                alt="Professional team member" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute -right-8 top-0 w-32 h-32 rounded-full bg-purple-200 opacity-20 blur-2xl"></div>
            <div className="absolute right-16 bottom-16 w-24 h-24 rounded-full bg-blue-200 opacity-20 blur-xl"></div>
            <div className="absolute left-8 top-1/3 w-20 h-20 rounded-full bg-purple-300 opacity-15 blur-xl"></div>

            <div className="relative z-10">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                Let's drive your
                <br />
                progress in life with
                <br />
                <span className="text-purple-600">our financial solutions</span>
              </h2>

              {/* Tabs */}
              <div className="flex gap-4 mt-8 mb-6">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'vision'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'mission'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'values'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Core Values
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8">
                <p className="text-gray-800 text-lg leading-relaxed">
                  {tabContent[activeTab]}
                </p>
              </div>

              {/* Support Section */}
              <div className="flex items-center gap-6">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Learn More
                </button>
                
                <div>
                  <p className="text-gray-600 text-sm mb-1">Support Email</p>
                  <a 
                    href="mailto:info@emeraldcapital.com.com" 
                    className="text-gray-900 font-semibold text-lg hover:text-purple-600 transition-colors"
                  >
                    info@emeraldcapital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}