import React from 'react';
import { CheckCircle, Users, Handshake, Target, Shield, Award, TrendingUp, Calendar, FileText } from 'lucide-react';

const GroupCommunityLoanDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-teal-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Group/Community Loan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strengthen your community through collective borrowing. Join forces with 
            neighbors, colleagues, or community members to access larger loans with 
            better terms through mutual support and shared responsibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content Section */}
          <div className="space-y-8">
            {/* Main Loan Card */}
            <div className="bg-gradient-to-r from-teal-600 to-green-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-teal-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Collective Power</h3>
                  <p className="text-teal-200">Strength in Numbers</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-teal-200 mb-2">Loan Specifications</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">₵500 - ₵15K</div>
                    <div className="text-teal-200 text-sm">Total Group Loan</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">6-24</div>
                    <div className="text-teal-200 text-sm">Month Repayment Term</div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Group Advantages</h4>
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Joint Guarantee",
                    description: "Group members guarantee each other's repayment"
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Higher Loan Amounts",
                    description: "Access larger funds than individual loans"
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: "Better Interest Rates",
                    description: "Lower rates due to reduced risk"
                  },
                  {
                    icon: <Calendar className="w-5 h-5" />,
                    title: "Flexible Scheduling",
                    description: "Group decides repayment schedule"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-yellow-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-teal-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group Requirements */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-teal-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Group Formation Requirements</h3>
              <div className="space-y-4">
                {[
                  "5-20 members per group",
                  "All members must know each other",
                  "Group leader elected by members",
                  "Regular meeting schedule",
                  "Group savings record (if existing)",
                  "Clear group rules and constitution",
                  "Members from same community/area",
                  "Minimum 3 months group existence"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Group Types Section */}
          <div className="space-y-8">
            {/* Group Types */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-teal-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Types of Groups Supported</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "👩‍🌾", title: "Farmers", desc: "Agricultural cooperatives" },
                  { icon: "👩‍🏭", title: "Artisans", desc: "Craftspeople, tailors" },
                  { icon: "👩‍🍳", title: "Market Women", desc: "Traders, vendors" },
                  { icon: "👩‍💼", title: "Savings Groups", desc: "Susu collectors" },
                  { icon: "👨‍🏫", title: "Teachers", desc: "School staff groups" },
                  { icon: "👩‍🚒", title: "Drivers", desc: "Transport associations" },
                  { icon: "👩‍🎨", title: "Youth Groups", desc: "Young entrepreneurs" },
                  { icon: "👵", title: "Women's Groups", desc: "Women empowerment" },
                ].map((group, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-teal-50 rounded-xl">
                    <div className="text-2xl mb-2">{group.icon}</div>
                    <div className="font-bold text-gray-900">{group.title}</div>
                    <div className="text-sm text-gray-600">{group.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Calculator */}
           

            {/* Documents Required */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h3>
              <div className="space-y-3">
                {[
                  "Group constitution/rules",
                  "Membership list with contacts",
                  "Meeting minutes (last 3 months)",
                  "Individual member ID copies",
                  "Group savings record (if any)",
                  "Group leader election minutes",
                  "Business plans for loan use",
                  "Group bank account details"
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white font-bold text-lg py-5 rounded-2xl hover:from-teal-700 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Group Application
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-r from-teal-50 to-green-50 rounded-3xl p-12 shadow-xl border border-teal-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Community Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                group: "Asante Market Women Association",
                members: "15 members",
                loan: "₵12,000",
                project: "Bulk food supplies purchase",
                result: "Increased profits by 40% for all members"
              },
              {
                group: "Kumasi Tailors Cooperative",
                members: "8 members",
                loan: "₵6,000",
                project: "Modern sewing machines",
                result: "Production capacity tripled, created 5 new jobs"
              },
              {
                group: "Accra Youth Farmers Group",
                members: "12 members",
                loan: "₵9,000",
                project: "Greenhouse farming setup",
                result: "Year-round vegetable production, supplying 3 markets"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 text-lg">{story.group}</h4>
                  <div className="text-teal-600 font-medium">{story.members}</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Project:</div>
                    <div className="font-medium">{story.project}</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">Result:</div>
                    <div className="font-bold text-green-600">{story.result}</div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Group Loan:</span>
                    <span className="font-bold text-teal-700">{story.loan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group Structure */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 border border-teal-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Group Loans Work
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Group Formation",
                desc: "5-20 members form group, elect leaders, create rules"
              },
              {
                step: "02",
                title: "Joint Application",
                desc: "Group applies together with collective business plan"
              },
              {
                step: "03",
                title: "Training & Approval",
                desc: "Group receives financial training, loan approved"
              },
              {
                step: "04",
                title: "Collective Repayment",
                desc: "Group manages repayment, supports each member"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-teal-200 transform -translate-x-1/2"></div>
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-teal-600 to-green-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Mutual Support</h4>
            <p className="text-teal-200">
              Group members support each other through challenges, ensuring no member defaults alone.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Financial Education</h4>
            <p className="text-green-200">
              Free training on financial management, savings, and business skills for all group members.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Scalable Growth</h4>
            <p className="text-teal-200">
              Groups can graduate to larger loans based on successful repayment history and growth.
            </p>
          </div>
        </div>

        {/* Group Projects */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Common Group Projects
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                project: "Bulk Purchasing", 
                description: "Buy goods in bulk for better prices",
                icon: "📦" 
              },
              { 
                project: "Equipment Sharing", 
                description: "Shared tools/machinery for all members",
                icon: "🔧" 
              },
              { 
                project: "Value Addition", 
                description: "Processing raw materials into finished goods",
                icon: "🏭" 
              },
              { 
                project: "Market Access", 
                description: "Collective transportation to larger markets",
                icon: "🚛" 
              },
              { 
                project: "Training Center", 
                description: "Shared learning/training facility",
                icon: "🏫" 
              },
              { 
                project: "Storage Facility", 
                description: "Collective storage for products",
                icon: "🏪" 
              },
              { 
                project: "Input Supply", 
                description: "Group purchase of farming inputs",
                icon: "🌱" 
              },
              { 
                project: "Retail Outlet", 
                description: "Shared shop/store space",
                icon: "🛒" 
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
                <div className="text-3xl mb-3">{project.icon}</div>
                <div className="font-bold text-gray-900 mb-2">{project.project}</div>
                <div className="text-sm text-gray-600">{project.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Support */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-teal-600 to-green-600 rounded-3xl px-8 py-8 shadow-xl">
            <div className="text-left text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <p className="text-lg font-bold">Need help forming a group?</p>
              </div>
              <p className="text-teal-100">Our community development officers can assist with group formation</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+233208070000" 
                className="bg-white text-teal-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Community Desk
              </a>
              <a 
                href="mailto:communityloans@emeraldcapitalgh.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Request Group Training
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCommunityLoanDetails;