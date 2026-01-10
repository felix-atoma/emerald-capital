import React from "react";
import { useState } from 'react';
import { Play } from 'lucide-react';

export default function BankingHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-emerald-600">Us</span>
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-emerald-100">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              At Emerald Capital, we believe that financial access is the key to unlocking potential. 
              Since our founding, we have been committed to empowering individuals and businesses with 
              the tools and opportunities they need to grow confidently and sustainably.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our approach is guided by a set of core values that define who we are and how we operate: 
              we uphold <span className="font-semibold text-emerald-700">integrity</span> in every transaction, 
              champion <span className="font-semibold text-emerald-700">inclusive finance</span> for all, 
              drive <span className="font-semibold text-emerald-700">customer-focused innovation</span>, 
              and invest in solutions that generate <span className="font-semibold text-emerald-700">sustainable community impact</span>. 
              We prioritize responsible and compassionate lending, foster partnerships for shared prosperity, 
              and maintain excellence, accountability, and respect in every engagement.
            </p>
          </div>

          {/* Values Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Upholding honesty in every transaction" },
              { title: "Inclusion", desc: "Championing finance for all" },
              { title: "Innovation", desc: "Driving customer-focused solutions" },
              { title: "Impact", desc: "Creating sustainable community change" }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-2 h-8 bg-emerald-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-emerald-800">{value.title}</h3>
                </div>
                <p className="text-gray-600 text-sm pl-5">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          {/* Placeholder Image/Background */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-emerald-700 to-emerald-900">
            {/* Video Thumbnail Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center shadow-2xl transform group-hover:scale-110"
              >
                <Play className="w-10 h-10 md:w-14 md:h-14 text-white ml-2" fill="white" />
              </button>
            </div>

            {/* Optional: Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                The Emerald Capital Story
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                Discover our journey in transforming financial access in Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}