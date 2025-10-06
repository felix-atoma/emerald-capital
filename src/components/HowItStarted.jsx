import React from "react";
export default function HowItStarted({ imageUrl = "/path-to-your-image.jpg" }) {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="relative">
            {/* Decorative Background Bubbles for Text Area */}
            <div className="absolute -left-8 top-0 w-24 h-24 rounded-full bg-purple-200 opacity-30 blur-xl"></div>
            <div className="absolute -left-4 top-16 w-16 h-16 rounded-full border-2 border-purple-200 opacity-40"></div>
            <div className="absolute left-8 top-8 w-12 h-12 rounded-full bg-purple-400 opacity-40"></div>
            
            {/* Curved lines decoration */}
            <svg className="absolute -left-12 top-20 w-32 h-32 opacity-20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10 10 Q 40 40, 70 10" stroke="#a78bfa" strokeWidth="2" fill="none" />
              <path d="M 5 30 Q 35 60, 65 30" stroke="#a78bfa" strokeWidth="2" fill="none" />
              <circle cx="15" cy="15" r="3" fill="#a78bfa" />
            </svg>

            <div className="absolute left-1/3 bottom-1/4 w-8 h-8 rounded-full bg-purple-500 opacity-50"></div>
            <div className="absolute right-16 top-1/3 w-10 h-10 rounded-full bg-purple-400 opacity-30"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
                How it all <span className="text-purple-500">Started</span>
              </h2>

              <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Emerald Capital is a re-capitalized financial institution with an unwavering focus on empowering households and serving the economic needs of communities at the base of the pyramid. Our mission is we relentlessly seek to exceed customers' expectations through a highly motivated workforce and cutting-edge technology by driving financial inclusion and economic stability through responsible lending and tailored financial solutions.
                </p>

                <p>
                  Today, we proudly serve hundreds of thousands of customers, underpinned by a commitment to exceptional customer service, sustainable growth, and delivering superior value to our stakeholders. Our lending model is strategically designed to support civil servants and entrepreneurs seeking to build small businesses and cottage industries. With financing solutions across the agricultural value chain, structured loans, and business support, we are dedicated to promoting small and medium-sized enterprises (SMEs) across Ghana.
                </p>

                <p>
                  Backed by our shareholders and industry-leading fund placement products, Emerald Capital is a trusted partner for economic empowerment, ensuring positive impact and long-term success for our clients and communities alike.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            {/* Dark green background */}
            <div className="relative bg-gradient-to-br from-green-900 to-green-950 rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center">
              {/* Decorative bubbles on image side */}
              <div className="absolute top-12 right-16 w-16 h-16 rounded-full bg-green-400 opacity-40"></div>
              <div className="absolute bottom-24 left-12 w-20 h-20 rounded-full bg-green-500 opacity-30"></div>
              <div className="absolute top-1/2 right-8 w-12 h-12 rounded-full bg-yellow-400 opacity-50"></div>
              
              {/* Large white circle behind person */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-white opacity-90"></div>
              </div>

              {/* Decorative green circles */}
              <div className="absolute bottom-16 left-16 w-24 h-24 rounded-full bg-green-400 opacity-60"></div>
              <div className="absolute bottom-32 right-20 w-16 h-16 rounded-full bg-green-500 opacity-50"></div>

              {/* Person image placeholder */}
              <div className="relative z-10 text-center">
                <div className="w-72 h-96 mx-auto bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-full flex items-end justify-center">
                  <div className="text-white text-sm bg-gray-800 bg-opacity-50 px-4 py-2 rounded">
                    Person relaxing in chair
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}