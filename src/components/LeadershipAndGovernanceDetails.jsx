// src/components/LeadershipAndGovernanceDetails.jsx
import React from 'react';
import { CheckCircle, Users, Shield, Target, Award, BookOpen, FileText, Eye, TrendingUp, BarChart, Clipboard, Scale } from 'lucide-react';

const LeadershipAndGovernanceDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Leadership & Governance Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Emerald Capital operates under a comprehensive governance structure that supports 
            effective oversight, ethical conduct, and sustainable growth at all organizational levels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Leadership Section */}
          <div className="space-y-8">
            {/* Leadership Overview Card */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-emerald-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Leadership Excellence</h3>
                  <p className="text-emerald-200">Expert Team Driving Strategic Growth</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm text-emerald-200 mb-2">Leadership Impact Metrics</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">15+</div>
                    <div className="text-emerald-200 text-sm">Years Industry Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">98%</div>
                    <div className="text-emerald-200 text-sm">Stakeholder Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Key Leadership Priorities */}
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="text-sm text-emerald-200 mb-2">Leadership Focus Areas</div>
                <div className="space-y-4">
                  {[
                    "Strategic growth and capital stewardship",
                    "Disciplined investment decision-making",
                    "Strong risk management and compliance culture",
                    "Transparent communication with stakeholders",
                    "Talent development and team leadership",
                    "Innovation and digital transformation",
                    "Stakeholder value creation",
                    "Sustainable business practices"
                  ].map((priority, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center">
                        <Target className="w-3 h-3 text-yellow-300" />
                      </div>
                      <span className="text-sm">{priority}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership Composition */}
              <div className="space-y-6">
                <h4 className="font-bold text-lg">Leadership Structure</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Executive Committee",
                      desc: "Strategic direction and oversight",
                      count: "7 Members"
                    },
                    {
                      title: "Senior Management",
                      desc: "Operational execution",
                      count: "12+ Leaders"
                    },
                    {
                      title: "Department Heads",
                      desc: "Functional leadership",
                      count: "8 Departments"
                    },
                    {
                      title: "Regional Directors",
                      desc: "Geographic operations",
                      count: "5 Regions"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-bold">{item.title}</div>
                          <div className="text-emerald-200 text-xs">{item.desc}</div>
                        </div>
                        <div className="text-yellow-300 font-bold">{item.count}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Organizational Structure */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Operational Structure & Organogram</h3>
              <div className="space-y-4">
                {[
                  "Clearly defined leadership roles and responsibilities",
                  "Flat organizational structure for agile decision-making",
                  "Cross-functional collaboration teams",
                  "Regular performance reviews with measurable KPIs",
                  "Continuous professional development programs",
                  "Robust succession planning framework",
                  "Transparent internal communication channels",
                  "Innovation-driven operational culture"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="flex items-center gap-3 text-emerald-800">
                  <BarChart className="w-5 h-5" />
                  <div>
                    <div className="font-bold">Clear Reporting Lines</div>
                    <div className="text-sm text-emerald-600">Structured accountability framework ensuring efficient operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Governance Section */}
          <div className="space-y-8">
            {/* Governance Framework Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Governance Framework</h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Board of Directors",
                    purpose: "Strategic oversight and corporate governance",
                    responsibilities: [
                      "Approve long-term strategic direction",
                      "Oversee enterprise risk management",
                      "Monitor financial performance metrics",
                      "Approve major capital investments"
                    ]
                  },
                  {
                    name: "Risk Management Committee",
                    purpose: "Risk oversight and compliance assurance",
                    responsibilities: [
                      "Comprehensive risk assessment",
                      "Regulatory compliance monitoring",
                      "Internal control systems review",
                      "Fraud prevention measures"
                    ]
                  },
                  {
                    name: "Audit Committee",
                    purpose: "Financial oversight and integrity assurance",
                    responsibilities: [
                      "Financial reporting accuracy",
                      "Internal audit effectiveness",
                      "External auditor independence",
                      "Ethical conduct monitoring"
                    ]
                  },
                  {
                    name: "Nomination & Remuneration Committee",
                    purpose: "Leadership development and compensation",
                    responsibilities: [
                      "Board composition strategy",
                      "Executive appointment oversight",
                      "Compensation policy development",
                      "Succession planning framework"
                    ]
                  }
                ].map((committee, index) => (
                  <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                    <div className="mb-4">
                      <h4 className="font-bold text-lg text-emerald-900 mb-1">{committee.name}</h4>
                      <p className="text-sm text-emerald-700">{committee.purpose}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-emerald-800">Primary Responsibilities:</div>
                      {committee.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance Principles */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Core Governance Principles</h3>
              <div className="space-y-6">
                {[
                  {
                    principle: "Accountability",
                    description: "Clear roles, responsibilities, and decision-making authority at all organizational levels",
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    principle: "Transparency",
                    description: "Open reporting, timely disclosure, and clear communication with all stakeholders",
                    icon: <Eye className="w-6 h-6" />
                  },
                  {
                    principle: "Integrity",
                    description: "Adherence to the highest ethical standards and regulatory requirements",
                    icon: <Shield className="w-6 h-6" />
                  },
                  {
                    principle: "Risk Oversight",
                    description: "Proactive identification, assessment, and management of financial and operational risks",
                    icon: <TrendingUp className="w-6 h-6" />
                  },
                  {
                    principle: "Compliance",
                    description: "Strict adherence to all regulatory requirements and industry best practices",
                    icon: <Scale className="w-6 h-6" />
                  },
                  {
                    principle: "Sustainability",
                    description: "Long-term value creation considering environmental, social, and governance factors",
                    icon: <Award className="w-6 h-6" />
                  }
                ].map((principle, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-emerald-200">
                      <div className="text-emerald-600">
                        {principle.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{principle.principle}</h4>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Practices Commitment */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Commitment to Best Practices</h3>
              <p className="text-gray-700 mb-4">
                We continuously review and strengthen our governance policies to align with 
                industry best practices and evolving regulatory expectations, ensuring 
                Emerald Capital remains a trusted and responsible partner.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  "Regular policy reviews and updates",
                  "Comprehensive stakeholder engagement",
                  "Continuous compliance monitoring",
                  "Benchmarking against industry standards",
                  "Ongoing leadership training programs",
                  "Transparent reporting mechanisms",
                  "Risk assessment updates",
                  "Ethical conduct reinforcement"
                ].map((practice, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>{practice}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            
          </div>
        </div>

        {/* KPIs and Performance Metrics */}
       

        {/* Organogram Visualization */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Organizational Structure Overview
          </h3>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  level: "Board of Directors",
                  role: "Strategic Oversight & Governance",
                  color: "from-emerald-700 to-teal-700",
                  icon: "👑"
                },
                {
                  level: "Executive Committee",
                  role: "Operational Leadership",
                  color: "from-emerald-600 to-teal-600",
                  icon: "💼"
                },
                {
                  level: "Department Leadership",
                  role: "Functional Management",
                  color: "from-emerald-500 to-teal-500",
                  icon: "👥"
                },
                {
                  level: "Regional Management",
                  role: "Geographic Operations",
                  color: "from-emerald-400 to-teal-400",
                  icon: "🗺️"
                },
                {
                  level: "Team Leadership",
                  role: "Team Supervision & Development",
                  color: "from-emerald-300 to-teal-300",
                  icon: "🌟"
                },
                {
                  level: "Professional Staff",
                  role: "Specialized Execution",
                  color: "from-emerald-200 to-teal-200",
                  icon: "⚡"
                }
              ].map((level, index) => (
                <div key={index} className="text-center">
                  <div className={`bg-gradient-to-r ${level.color} rounded-xl p-6 mb-3 text-white shadow-lg flex flex-col items-center justify-center h-full`}>
                    <div className="text-2xl mb-2">{level.icon}</div>
                    <div className="font-bold text-lg">{level.level}</div>
                    <div className="text-sm opacity-90 mt-1">{level.role}</div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Governance Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Enhanced Risk Management</h4>
            <p className="text-emerald-200">
              Proactive framework that identifies, assesses, and mitigates potential risks 
              before they impact business operations and stakeholder value.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Strategic Alignment</h4>
            <p className="text-teal-200">
              Ensures all organizational activities align with strategic objectives 
              and stakeholder expectations through clear governance structures.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">Trust & Confidence</h4>
            <p className="text-emerald-200">
              Transparent governance practices build lasting confidence among 
              investors, partners, regulators, and the communities we serve.
            </p>
          </div>
        </div>

        {/* Contact Section */}
       
      </div>
    </div>
  );
};

export default LeadershipAndGovernanceDetails;