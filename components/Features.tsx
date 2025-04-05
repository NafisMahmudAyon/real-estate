"use client";

import { useEffect, useRef } from "react";
import { MapPin, Home, Shield, Search, Clock, ThumbsUp } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Premium Locations",
    description: "Properties in the most sought-after neighborhoods and communities",
    icon: <MapPin size={28} />,
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "Every property meets our strict standards for quality and luxury",
    icon: <Shield size={28} />,
  },
  {
    id: 3,
    title: "Expert Guidance",
    description: "Dedicated agents to help you find your perfect home",
    icon: <Search size={28} />,
  },
  {
    id: 4,
    title: "Seamless Process",
    description: "Simplified buying experience from search to closing",
    icon: <Clock size={28} />,
  },
  {
    id: 5,
    title: "Client Satisfaction",
    description: "Exceptional service with over 95% client satisfaction rate",
    icon: <ThumbsUp size={28} />,
  },
  {
    id: 6,
    title: "Exclusive Properties",
    description: "Access to off-market listings and exclusive developments",
    icon: <Home size={28} />,
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    };

    const sectionObserver = new IntersectionObserver(handleIntersect, observerOptions);

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Create separate observer for feature items with cascade effect
    const featureObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleFeatureIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }, index * 100);
        }
      });
    };

    const featureObserver = new IntersectionObserver(handleFeatureIntersect, featureObserverOptions);

    if (featuresRef.current) {
      const featureItems = featuresRef.current.children;
      Array.from(featureItems).forEach(item => {
        featureObserver.observe(item);
      });
    }

    return () => {
      sectionObserver.disconnect();
      featureObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="features"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-50 rounded-bl-full opacity-60 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-50 rounded-tr-full opacity-60 transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto relative z-10">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Advantages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the benefits of working with us for your next real estate investment
          </p>
        </div>

        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0"
              style={{ transitionDelay: `${feature.id * 100}ms` }}
            >
              <div className="bg-gray-100 rounded-xl p-4 inline-block mb-6 text-gray-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;