// src/components/LeadershipOwnershipDetails.jsx
import React, { useState } from "react";
import {
  Crown,
  Award,
  Building2,
  Briefcase,
  Star,
  Target,
  CheckCircle,
  Clock,
  BookOpen,
  Lightbulb,
  Heart,
  Mail,
  Linkedin,
  FileText,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const LeadershipOwnershipDetails = () => {
  const [selectedProfile, setSelectedProfile] = useState("founder");

  const leadershipProfiles = [
    {
      id: "founder",
      name: "Dr. Asamoah Koranteng Evans",
      title: "Founder & Lead Investor",
      subtitle: "Chairperson of the Board",
      role:
        "Lead investor and strategic visionary providing overall direction and governance.",
      experience: "25+ years in banking, investment, and corporate governance",
      icon: <Crown className="w-8 h-8" />,
      color: "from-emerald-600 to-teal-500",
      profileImage: "/DR. ASAMOAH KORANTENG EVANS.jpg.jpeg",
      responsibilities: [
        "Chair Board of Directors meetings",
        "Define long-term strategic vision",
        "Oversee major investment decisions",
        "Ensure ethical governance standards",
        "Drive strategic initiatives",
        "Mentor executive leadership",
      ],
      achievements: [
        "Founded Emerald Capital in 2010",
        "Led $500M+ in successful investments",
        "Established industry-leading governance",
        "Recognized with multiple industry awards",
        "Built strategic partnerships globally",
      ],
      education: "PhD in Finance, MBA from Harvard Business School",
      expertise:
        "Strategic Leadership, Investment Banking, Corporate Governance",
    },
    {
      id: "executive",
      name: "Mrs. Abena Konadu Asamoah-Koranteng",
      title: "Executive Shareholder",
      subtitle: "CEO & Executive Director",
      role:
        "Aligns operational performance with shareholder value and drives business growth.",
      experience:
        "Extensive experience in banking, fintech, and sustainable finance",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-teal-600 to-emerald-500",
      profileImage: "/MRS. ABENA KONADU ASAMOAH-KORANTENG.jpg.jpeg",
      responsibilities: [
        "Lead day-to-day operations",
        "Execute strategic initiatives",
        "Manage shareholder relationships",
        "Drive sustainable finance initiatives",
        "Oversee digital transformation",
        "Ensure operational excellence",
      ],
      achievements: [
        "Expanded operations to 50+ branches",
        "Led successful fintech integration",
        "Achieved 98% customer satisfaction",
        "Implemented ESG framework",
        "Grew revenue by 200% in 5 years",
      ],
      education: "MBA in Finance, CFA Charterholder",
      expertise: "Operational Excellence, Fintech, Sustainable Finance",
    },
    {
      id: "investors",
      name: "Emerald Global Business",
      title: "Private Investor Group",
      subtitle: "Strategic Institutional Partners",
      role:
        "Provide additional capital and expertise supporting regional growth and long-term objectives.",
      experience:
        "Collective 100+ years in global investment and business development",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-slate-700 to-slate-800",
      profileImage: null,
      responsibilities: [
        "Provide strategic capital",
        "Support regional expansion",
        "Share industry expertise",
        "Facilitate global partnerships",
        "Monitor investment performance",
        "Contribute to strategic planning",
      ],
      achievements: [
        "Funded successful regional expansion",
        "Introduced international best practices",
        "Established global banking partnerships",
        "Supported technology modernization",
        "Enhanced risk management frameworks",
      ],
      education:
        "Diverse educational backgrounds including Ivy League and global institutions",
      expertise: "Global Investments, Business Development, Risk Management",
    },
  ];

  const selectedProfileData = leadershipProfiles.find(
    (p) => p.id === selectedProfile
  );

  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full px-6 py-3 mb-6">
            <Crown className="w-5 h-5 text-white" />
            <span className="font-bold text-white">
              LEADERSHIP & OWNERSHIP PROFILE
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Our Distinguished Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Emerald Capital is privately held by strategic investors with deep
            experience in finance and governance.
          </p>
        </div>

        {/* PROFILE NAVIGATION */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {leadershipProfiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setSelectedProfile(profile.id)}
              className={`rounded-2xl p-6 transition-all shadow-lg ${
                selectedProfile === profile.id
                  ? `bg-gradient-to-r ${profile.color} text-white`
                  : "bg-white border"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 bg-white">
                  {profile.profileImage ? (
                    <img
                      src={profile.profileImage}
                      alt={profile.name}
                      className="w-full h-full object-contain bg-gray-50"
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center bg-gradient-to-r ${profile.color}`}
                    >
                      {profile.icon}
                    </div>
                  )}
                </div>
                <div className="text-left">
                  <h4 className="font-bold">{profile.name.split(" ")[0]}</h4>
                  <p className="text-sm opacity-80">{profile.title}</p>
                  {selectedProfile === profile.id && (
                    <div className="flex items-center gap-1 mt-1 text-sm">
                      <ChevronRight className="w-4 h-4" />
                      View Profile
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* MAIN PROFILE */}
        <div
          className={`rounded-3xl bg-gradient-to-r ${selectedProfileData.color} text-white shadow-2xl`}
        >
          <div className="p-10 flex flex-col md:flex-row gap-8">
            <div className="w-56 h-56 rounded-2xl overflow-hidden bg-white border-4 border-white">
              {selectedProfileData.profileImage ? (
                <img
                  src={selectedProfileData.profileImage}
                  alt={selectedProfileData.name}
                  className="w-full h-full object-contain bg-gray-50"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {selectedProfileData.icon}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                {selectedProfileData.name}
              </h3>
              <p className="text-xl mt-1">{selectedProfileData.title}</p>

              <div className="inline-flex items-center gap-2 mt-4 bg-white/20 px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                {selectedProfileData.subtitle}
              </div>

              <p className="mt-6 text-lg leading-relaxed">
                {selectedProfileData.role}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                {selectedProfileData.experience}
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6 bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-3xl shadow-xl text-white">
            <a
              href="mailto:leadership@emeraldcapitalgh.com"
              className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold"
            >
              Email Leadership Office
            </a>
            <a
              href="tel:+233208070008"
              className="border-2 border-white px-6 py-3 rounded-full font-bold"
            >
              Call Executive Assistant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipOwnershipDetails;
