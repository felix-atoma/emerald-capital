import React from 'react';
import { CheckCircle, Leaf, Zap, Globe, Recycle, TreePine, Droplets, Wind, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const GreenSustainableLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Green & Sustainable Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finance your journey toward sustainability with our eco-friendly loan program. 
            Support renewable energy, conservation projects, and green initiatives that 
            benefit both your business and the environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-emerald-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Eco-Investment</h3>
                  <p className="text-emerald-200">For Sustainable Projects</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-emerald-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵500 - ₵12K</div>
                    <div className="text-emerald-200 text-sm">Loan Amount Range</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">6-24</div>
                    <div className="text-emerald-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-emerald-200 mb-2">Environmental Impact</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">5+ Tons</div>
                    <div className="text-emerald-200 text-sm">CO₂ Reduction/Year</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-300">20%</div>
                    <div className="text-emerald-200 text-sm">Lower Interest</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Green Advantages</h4>
                {[
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Reduced Interest Rates",
                    description: "Special lower rates for eco-friendly projects"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: "Technical Support",
                    description: "Access to green technology experts"
                  },
                  {
                    icon: <Recycle className="w-5 h-5" />,
                    title: "Longer Grace Period",
                    description: "Extended period before repayment starts"
                  },
                  {
                    icon: <TreePine className="w-5 h-5" />,
                    title: "Carbon Credit Support",
                    description: "Assistance with carbon credit registration"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-emerald-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Project Eligibility</h3>
              <div className="space-y-4">
                {[
                  "Project must have environmental benefit",
                  "Clear sustainability goals and metrics",
                  "Compliance with environmental regulations",
                  "Energy efficiency improvements",
                  "Waste reduction initiatives",
                  "Water conservation measures",
                  "Renewable energy implementation",
                  "Community environmental impact"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Green Projects Section */}
          <div className="space-y-8">
            {/* Supported Projects */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Supported Green Projects</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "☀️", title: "Solar Power", desc: "Solar panels installation" },
                  { icon: "💧", title: "Rainwater Harvest", desc: "Water collection systems" },
                  { icon: "♻️", title: "Recycling", desc: "Waste management systems" },
                  { icon: "🌱", title: "Organic Farming", desc: "Chemical-free agriculture" },
                  { icon: "💡", title: "LED Lighting", desc: "Energy-efficient lighting" },
                  { icon: "🚲", title: "Bike Sharing", desc: "Sustainable transportation" },
                  { icon: "🏠", title: "Green Building", desc: "Eco-friendly construction" },
                  { icon: "🌳", title: "Afforestation", desc: "Tree planting projects" },
                ].map((project, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-xl">
                    <div className="text-2xl mb-2">{project.icon}</div>
                    <div className="font-bold text-gray-900">{project.title}</div>
                    <div className="text-sm text-gray-600">{project.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
           

            {/* Environmental Impact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Expected Environmental Benefits</h3>
              <div className="space-y-3">
                {[
                  "Reduce carbon emissions by 2-10 tons/year",
                  "Save 20-60% on energy costs",
                  "Reduce water consumption by 30-50%",
                  "Divert 50-80% waste from landfills",
                  "Improve air quality in local area",
                  "Support local biodiversity",
                  "Reduce chemical pollution",
                  "Create green jobs in community"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/applyforloanpage">
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Apply for Green Loan
              </button>
            </Link>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 shadow-xl border border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Green Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                project: "Sunshine Farm Solar",
                type: "Solar Irrigation",
                loan: "₵8,000",
                impact: "Reduced diesel use by 90%, saved ₵3,000/year",
                benefit: "Now carbon neutral, supplying 10 neighboring farms"
              },
              {
                project: "Eco-Lodge Accra",
                type: "Green Building",
                loan: "₵10,000",
                impact: "60% energy reduction, rainwater harvesting",
                benefit: "Increased bookings by 40%, won eco-tourism award"
              },
              {
                project: "Green Market Collective",
                type: "Waste to Energy",
                loan: "₵6,500",
                impact: "Diverts 3 tons waste/month, produces biogas",
                benefit: "Powers 15 market stalls, created 8 green jobs"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 text-lg">{story.project}</h4>
                  <div className="text-emerald-600 font-medium">{story.type}</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Green Loan:</span>
                    <span className="font-bold text-emerald-700">{story.loan}</span>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Environmental Impact:</div>
                    <div className="font-medium text-emerald-700">{story.impact}</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Business Benefit:</div>
                    <div className="font-bold text-green-600">{story.benefit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Metrics */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Environmental Impact Dashboard
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                metric: "CO₂ Reduction",
                value: "125+ Tons",
                description: "Annual carbon savings from funded projects",
                icon: "🌍"
              },
              {
                metric: "Renewable Energy",
                value: "45+ Projects",
                description: "Solar, wind, and biogas installations",
                icon: "⚡"
              },
              {
                metric: "Water Saved",
                value: "2M+ Liters",
                description: "Annual water conservation from projects",
                icon: "💧"
              },
              {
                metric: "Trees Planted",
                value: "5,000+",
                description: "Through afforestation projects",
                icon: "🌳"
              }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{metric.value}</div>
                <div className="font-bold text-gray-900 mb-2">{metric.metric}</div>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Green Technologies */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Supported Green Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                tech: "Solar PV Systems", 
                description: "Rooftop and ground-mounted solar panels",
                savings: "40-70% energy savings" 
              },
              { 
                tech: "Rainwater Harvesting", 
                description: "Collection and storage systems",
                savings: "50% water bill reduction" 
              },
              { 
                tech: "Biogas Digesters", 
                description: "Organic waste to energy conversion",
                savings: "Free cooking gas, fertilizer" 
              },
              { 
                tech: "LED Lighting", 
                description: "Energy-efficient lighting systems",
                savings: "80% less energy usage" 
              },
              { 
                tech: "Solar Water Heaters", 
                description: "Hot water from solar energy",
                savings: "60% water heating cost" 
              },
              { 
                tech: "Composting Systems", 
                description: "Organic waste management",
                savings: "Free fertilizer, waste reduction" 
              },
              { 
                tech: "Energy-Efficient Appliances", 
                description: "Star-rated equipment",
                savings: "30-50% energy savings" 
              },
              { 
                tech: "Drip Irrigation", 
                description: "Precision water delivery",
                savings: "60% water conservation" 
              },
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
                <div className="font-bold text-gray-900 mb-2">{tech.tech}</div>
                <div className="text-sm text-gray-600 mb-3">{tech.description}</div>
                <div className="text-xs text-emerald-600 bg-emerald-50 p-2 rounded-lg">
                  <span className="font-semibold">Savings:</span> {tech.savings}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Lower Interest Rates</h4>
            <p className="text-emerald-200">
              Enjoy 20% lower interest rates compared to conventional loans for qualifying green projects.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Technical Assistance</h4>
            <p className="text-teal-200">
              Free access to green technology experts and project consultants for implementation support.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Recycle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Carbon Credit Support</h4>
            <p className="text-emerald-200">
              Assistance with carbon credit registration and monetization of emission reductions.
            </p>
          </div>
        </div>

        {/* Certification */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="w-6 h-6" />
                <p className="text-lg font-bold">Green Project Certification</p>
              </div>
              <p className="text-emerald-100">Get your project certified as environmentally sustainable</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Green Desk
              </a>
              <a 
                href="mailto:greenloans@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Request Certification
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenSustainableLoanDetails;