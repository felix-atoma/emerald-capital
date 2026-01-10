import React from "react";
export default function WhoWeAre() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden py-20 px-6">
      {/* Decorative Background Elements */}
      
      {/* Spider web lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="85%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="15%" y1="35%" x2="70%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="25%" y1="45%" x2="90%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="5%" y1="60%" x2="60%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="40%" y1="25%" x2="85%" y2="55%" stroke="url(#lineGradient)" strokeWidth="1" />
      </svg>

      {/* Bubble decorations - Left side */}
      <div className="absolute left-0 top-1/4 w-16 h-16 rounded-full bg-emerald-500 opacity-70 blur-sm"></div>
      <div className="absolute left-8 top-1/3 w-24 h-24 rounded-full border-2 border-emerald-200 opacity-40"></div>
      <div className="absolute left-4 bottom-1/3 w-12 h-12 rounded-full bg-emerald-100 opacity-50"></div>
      <div className="absolute left-16 top-1/2 w-8 h-8 rounded-full bg-emerald-400 opacity-60"></div>
      
      {/* Bubble decorations - Right side */}
      <div className="absolute right-0 top-1/4 w-32 h-32 rounded-full bg-emerald-400 opacity-60"></div>
      <div className="absolute right-16 top-1/3 w-20 h-20 rounded-full bg-emerald-300 opacity-50 blur-sm"></div>
      <div className="absolute right-4 top-16 w-10 h-10 rounded-full bg-emerald-400 opacity-50"></div>
      <div className="absolute right-32 bottom-1/4 w-16 h-16 rounded-full bg-emerald-100 opacity-40"></div>
      
      {/* Bubble decorations - Center area */}
      <div className="absolute left-1/4 top-1/2 w-14 h-14 rounded-full bg-emerald-400 opacity-40"></div>
      <div className="absolute left-1/3 bottom-1/3 w-24 h-24 rounded-full bg-emerald-50 opacity-60"></div>
      <div className="absolute right-1/3 top-2/3 w-20 h-20 rounded-full bg-emerald-100 opacity-50"></div>
      <div className="absolute left-1/2 top-1/3 w-10 h-10 rounded-full bg-emerald-500 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Who We <span className="text-emerald-600">Are</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-emerald-100/50">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-center">
            Emerald Capital is a forward-thinking financial services company dedicated to 
            empowering individuals, businesses, and communities. We exist to provide 
            accessible, ethical, and innovative financial solutions that unlock potential, 
            foster growth, and create lasting impact.
          </p>
          
          <div className="my-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
              What <span className="text-emerald-600">Guides Us</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { title: "Integrity", desc: "Guiding every decision we make" },
                { title: "Inclusion", desc: "Financial access for all" },
                { title: "Accountability", desc: "Responsible lending & practices" },
                { title: "Innovation", desc: "Technology-driven solutions" },
                { title: "Respect", desc: "Empathy in every interaction" },
                { title: "Community", desc: "Driving sustainable prosperity" }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-emerald-50 to-white p-5 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                    <h4 className="text-lg font-semibold text-emerald-700">{value.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm pl-6">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-emerald-100">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              At the heart of our work are principles that guide every decision we make, 
              every partnership we form, and every service we deliver.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6 text-center">
              We believe in financial access for all, responsible lending, and community-driven progress. 
              By combining expertise, technology, and empathy, Emerald Capital helps clients thrive while 
              driving sustainable prosperity for the communities we serve.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
    </div>
  );
}