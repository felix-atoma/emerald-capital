import React, { useRef, useEffect } from 'react';

export default function DualRowCarousel() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  // Top row images
  const topRowImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop",
      alt: "Executive Meeting"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      alt: "Corporate Event"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      alt: "Award Ceremony"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      alt: "Sports Event"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      alt: "Board Meeting"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      alt: "Team Conference"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      alt: "Business Discussion"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      alt: "Team Building"
    }
  ];

  // Bottom row images
  const bottomRowImages = [
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      alt: "Gala Night"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      alt: "Presentation"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
      alt: "Panel Discussion"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      alt: "Conference Room"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      alt: "Workshop"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      alt: "Team Meeting"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
      alt: "Corporate Training"
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      alt: "Executive Session"
    }
  ];

  // Double the images for seamless loop
  const topRowDoubled = [...topRowImages, ...topRowImages];
  const bottomRowDoubled = [...bottomRowImages, ...bottomRowImages];

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    let animationFrame1;
    let animationFrame2;

    // Auto-scroll function for top row (scroll right)
    const autoScroll1 = () => {
      if (scrollContainer1) {
        scrollContainer1.scrollLeft += 1;
        
        // Reset scroll when halfway through (seamless loop)
        const maxScroll = scrollContainer1.scrollWidth / 2;
        if (scrollContainer1.scrollLeft >= maxScroll) {
          scrollContainer1.scrollLeft = 0;
        }
      }
      animationFrame1 = requestAnimationFrame(autoScroll1);
    };

    // Auto-scroll function for bottom row (scroll left)
    const autoScroll2 = () => {
      if (scrollContainer2) {
        scrollContainer2.scrollLeft -= 1;
        
        // Reset scroll when reaching the start (seamless loop)
        if (scrollContainer2.scrollLeft <= 0) {
          scrollContainer2.scrollLeft = scrollContainer2.scrollWidth / 2;
        }
      }
      animationFrame2 = requestAnimationFrame(autoScroll2);
    };

    // Start both animations
    animationFrame1 = requestAnimationFrame(autoScroll1);
    animationFrame2 = requestAnimationFrame(autoScroll2);

    // Initialize bottom row scroll position
    if (scrollContainer2) {
      scrollContainer2.scrollLeft = scrollContainer2.scrollWidth / 2;
    }

    // Pause on hover for top row
    const pauseScroll1 = () => {
      if (animationFrame1) {
        cancelAnimationFrame(animationFrame1);
      }
    };

    const resumeScroll1 = () => {
      animationFrame1 = requestAnimationFrame(autoScroll1);
    };

    // Pause on hover for bottom row
    const pauseScroll2 = () => {
      if (animationFrame2) {
        cancelAnimationFrame(animationFrame2);
      }
    };

    const resumeScroll2 = () => {
      animationFrame2 = requestAnimationFrame(autoScroll2);
    };

    scrollContainer1?.addEventListener('mouseenter', pauseScroll1);
    scrollContainer1?.addEventListener('mouseleave', resumeScroll1);
    scrollContainer2?.addEventListener('mouseenter', pauseScroll2);
    scrollContainer2?.addEventListener('mouseleave', resumeScroll2);

    return () => {
      if (animationFrame1) cancelAnimationFrame(animationFrame1);
      if (animationFrame2) cancelAnimationFrame(animationFrame2);
      scrollContainer1?.removeEventListener('mouseenter', pauseScroll1);
      scrollContainer1?.removeEventListener('mouseleave', resumeScroll1);
      scrollContainer2?.removeEventListener('mouseenter', pauseScroll2);
      scrollContainer2?.removeEventListener('mouseleave', resumeScroll2);
    };
  }, []);

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-purple-600">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Capturing moments that define our journey
          </p>
        </div>

        {/* Top Row Carousel - Scrolling Right */}
        <div className="relative mb-8">
          <div
            ref={scrollRef1}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {topRowDoubled.map((item, index) => (
              <div
                key={`top-${item.id}-${index}`}
                className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl">{item.alt}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row Carousel - Scrolling Left */}
        <div className="relative">
          <div
            ref={scrollRef2}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bottomRowDoubled.map((item, index) => (
              <div
                key={`bottom-${item.id}-${index}`}
                className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl">{item.alt}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All Photos
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}