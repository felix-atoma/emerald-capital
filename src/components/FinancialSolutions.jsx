import React from "react";
import { useState } from 'react';

export default function FinancialSolutions({ imageUrl = "/path-to-your-image.jpg" }) {
  const [activeTab, setActiveTab] = useState('vision');

  const tabContent = {
    vision: "To become a leading catalyst for financial inclusion and sustainable prosperity, empowering individuals and communities to rise, grow, and thrive.",
    mission: "Emerald Capital exists to provide accessible, ethical, and innovative financial solutions that uplift underserved individuals and small businesses. We are committed to responsible lending, community partnership, and service excellence, enhancing livelihoods and enabling long-term economic independence. At Emerald Capital, our success is measured by the progress of those we serve. Every client, community, and partner we work with is valued, respected, and supported on a path toward growth and lasting prosperity.",
    values: "The principles that shape every decision and service we provide."
  };

  const coreValues = [
    {
      title: "Empowerment Through Access",
      icon: "🔑",
      tagline: "Unlocking potential with financial opportunities for all.",
      description: "We provide financial solutions that unlock potential, enabling individuals and businesses to grow with confidence."
    },
    {
      title: "Integrity & Accountability",
      icon: "🛡️",
      tagline: "Building trust through honesty, transparency, and responsible practices.",
      description: "Honesty, transparency, and responsible practices guide every decision, ensuring trust and meaningful impact."
    },
    {
      title: "Inclusive & Sustainable Growth",
      icon: "🌱",
      tagline: "Creating lasting impact by championing equitable access and community progress.",
      description: "We champion equitable financial access while investing in long-term progress for communities."
    },
    {
      title: "Innovation for Real Needs",
      icon: "💡",
      tagline: "Delivering simple, effective solutions that evolve with our clients' needs.",
      description: "Our services evolve to meet practical needs, combining simplicity, accessibility, and effectiveness."
    },
    {
      title: "Partnership & Respect",
      icon: "🤝",
      tagline: "Fostering collaborative relationships that value dignity, empathy, and fairness.",
      description: "We build collaborative relationships, valuing every client, community, and partner with empathy and dignity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-gray-100 py-16 px-6">
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
            <div className="absolute -right-8 top-0 w-32 h-32 rounded-full bg-emerald-200 opacity-20 blur-2xl"></div>
            <div className="absolute right-16 bottom-16 w-24 h-24 rounded-full bg-emerald-100 opacity-20 blur-xl"></div>
            <div className="absolute left-8 top-1/3 w-20 h-20 rounded-full bg-emerald-300 opacity-15 blur-xl"></div>

            <div className="relative z-10">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                Let's drive your
                <br />
                progress in life with
                <br />
                <span className="text-emerald-600">our financial solutions</span>
              </h2>

              {/* Tabs */}
              <div className="flex gap-4 mt-8 mb-6 flex-wrap">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'vision'
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'mission'
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'values'
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Core Values
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8 min-h-[200px]">
                {activeTab === 'vision' && (
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {tabContent.vision}
                  </p>
                )}
                {activeTab === 'mission' && (
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {tabContent.mission}
                  </p>
                )}
                {activeTab === 'values' && (
                  <div className="space-y-6">
                    <p className="text-gray-800 text-lg leading-relaxed mb-4">{tabContent.values}</p>
                    <div className="space-y-4">
                      {coreValues.map((value, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 hover:bg-emerald-50 rounded-lg transition-colors">
                          <span className="text-2xl">{value.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">{value.title}</h4>
                            <p className="text-emerald-600 text-sm italic">{value.tagline}</p>
                            <p className="text-gray-600 text-sm mt-1">{value.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Support Section */}
              <div className="flex items-center gap-6 flex-wrap">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Learn More
                </button>
                
                <div>
                  <p className="text-gray-600 text-sm mb-1">Support Email</p>
                  <a 
                    href="mailto:info@emeraldcapital.com" 
                    className="text-gray-900 font-semibold text-lg hover:text-emerald-600 transition-colors"
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