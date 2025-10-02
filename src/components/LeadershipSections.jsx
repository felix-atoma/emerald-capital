import React, { useState } from 'react';

export default function LeadershipSections() {
  const [hoveredBoardIndex, setHoveredBoardIndex] = useState(null);
  const [hoveredMgmtIndex, setHoveredMgmtIndex] = useState(null);

  // Board members data
  const boardMembers = [
    {
      id: 1,
      name: "Dr. Emmanuel Mensah",
      title: "Chairman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
    },
    {
      id: 2,
      name: "Mr. Kwame Osei",
      title: "Executive Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop"
    },
    {
      id: 3,
      name: "Mrs. Abena Adjei",
      title: "Non-Executive Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop"
    },
    {
      id: 4,
      name: "Mr. Kofi Asante",
      title: "Finance Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop"
    },
    {
      id: 5,
      name: "Dr. Akosua Boateng",
      title: "Independent Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop"
    },
    {
      id: 6,
      name: "Mr. Yaw Mensah",
      title: "Technical Director",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop"
    },
    {
      id: 7,
      name: "Mrs. Ama Owusu",
      title: "Legal Director",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=800&fit=crop"
    }
  ];

  // Management team data
  const managementTeam = [
    {
      id: 1,
      name: "Bukoye Ayoola",
      title: "CHIEF MARKETING & STRATEGY OFFICER",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop"
    },
    {
      id: 2,
      name: "Gbenga Omotoyinbo",
      title: "CHIEF FINANCIAL OFFICER",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop"
    },
    {
      id: 3,
      name: "Gbenga Adetola",
      title: "CHIEF CORPORATE SERVICES OFFICER / COMPANY SECRETARY",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop"
    },
    {
      id: 4,
      name: "Babatunde Alabi",
      title: "HEAD, RISK MANAGEMENT GROUP",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
    },
    {
      id: 5,
      name: "Odiaka Gerald",
      title: "HEAD, AUDIT & CHIEF COMPLIANCE OFFICER",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop"
    },
    {
      id: 6,
      name: "Omotola Balogun",
      title: "HEAD, OPERATIONS",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop"
    },
    {
      id: 7,
      name: "Adeyemi Johnson",
      title: "HEAD, INFORMATION TECHNOLOGY",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop"
    }
  ];

  const TeamCard = ({ member, index, hoveredIndex, setHoveredIndex }) => (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="relative overflow-hidden bg-white shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
        {/* Image */}
        <div className="aspect-[3/4] relative bg-gray-900">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent transition-opacity duration-300 ${
            hoveredIndex === index ? 'opacity-90' : 'opacity-0'
          }`}>
          </div>

          {/* Info overlay on hover */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 transform ${
            hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-purple-200 text-sm leading-tight">{member.title}</p>
          </div>
        </div>

        {/* Static bottom info */}
        <div className={`bg-white p-6 transition-all duration-300 ${
          hoveredIndex === index ? 'opacity-0' : 'opacity-100'
        }`}>
          <h3 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h3>
          <p className="text-sm text-gray-600 uppercase leading-tight">{member.title}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gray-50">
      {/* Board of Directors Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-4">
              Board of <span className="text-purple-600">Directors</span>
            </h1>
          </div>

          {/* Board Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                index={index}
                hoveredIndex={hoveredBoardIndex}
                setHoveredIndex={setHoveredBoardIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Management Team Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-4">
              Management <span className="text-purple-600">Team</span>
            </h1>
          </div>

          {/* Management Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementTeam.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                index={index}
                hoveredIndex={hoveredMgmtIndex}
                setHoveredIndex={setHoveredMgmtIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}