"use client";

import { useEffect, useRef, useState } from "react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function CoreFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features: Feature[] = [
    {
      id: 1,
      title: "AI Vision System",
      description:
        "Advanced computer vision with real-time bird detection and species identification using trained neural networks.",
      icon: (
        <svg
          className="w-12 h-12 text-[#D4AF37]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M23 12h-4M5 12H1M20.485 3.515l-2.828 2.828M6.343 17.657l-2.828 2.828M20.485 20.485l-2.828-2.828M6.343 6.343L3.515 3.515" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "24/7 Autonomous Operation",
      description:
        "Solar-powered systems operate independently without human supervision, providing uninterrupted protection day and night.",
      icon: (
        <svg
          className="w-12 h-12 text-[#D4AF37]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Smart Response System",
      description:
        "Adaptive deterrence mechanisms that adjust intensity based on threat level and bird behavior patterns.",
      icon: (
        <svg
          className="w-12 h-12 text-[#D4AF37]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
    },
  ];

  const steps: Step[] = [
    {
      number: "1",
      title: "Vision",
      description:
        "Multi-spectral cameras detect bird presence across 360° perimeter with sub-meter accuracy.",
    },
    {
      number: "2",
      title: "Prediction",
      description:
        "ML algorithms predict threat level and bird intent based on flight patterns and behavioral data.",
    },
    {
      number: "3",
      title: "Action",
      description:
        "Autonomous deterrence system activates with appropriate response before predation occurs.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Semi-opaque overlay for readability */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
              }`}
          >
            <h2 className="text-lg font-semibold text-[#D4AF37] mb-4 tracking-widest uppercase">
              Core Technology
            </h2>
            <h3 className="font-unbounded text-5xl lg:text-6xl font-bold text-[#0A2342] text-balance leading-tight mb-6">
              Intelligent protection engineered for scale.
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pond Patrol combines advanced AI vision, autonomous operation, and
              smart response mechanisms to deliver unmatched bird deterrence.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative p-10 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg hover:border-[#D4AF37]/50 transition-all duration-500 transform ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                } ${hoveredCard === feature.id ? "scale-105 shadow-2xl" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="font-unbounded text-2xl font-bold text-[#0A2342] mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specification Image */}
        <div className="mb-20 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md p-8 border border-gray-200 shadow-lg">
          <div
            className={`transform transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <img
                src="/product_outline.png"
                alt="Pond Patrol Technical Catamaran Design"
                className="w-full md:w-1/2 h-auto object-contain"
              />
              <img
                src="/pond_patrol_boat_top_view.png"
                alt="Pond Patrol Top View"
                className="w-full md:w-1/2 h-auto object-contain"
              />
            </div>
            <p className="text-center mt-6 text-gray-600 font-semibold">
              Dual-hull autonomous catamaran design with advanced sensor arrays
              and deterrence systems
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-3xl p-16 overflow-hidden shadow-2xl border border-gray-200">
          <div className="relative z-10">
            <h3 className="font-unbounded text-4xl font-bold text-[#0A2342] text-center mb-4 text-balance">
              How Pond Patrol Works
            </h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              A three-stage process that monitors, predicts, and responds in
              real-time to bird threats.
            </p>

            <div className={`flex justify-center transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <img src="/how_pond_patrol_works.png" alt="How Pond Patrol Works" className="w-full max-w-5xl h-auto object-contain drop-shadow-xl rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
