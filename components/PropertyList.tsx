"use client";

import { useEffect, useRef } from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";
import Link from "next/link";

const PropertyList = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    // Create separate observer for cards with cascade effect
    const cardObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleCardIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }, index * 150);
        }
      });
    };

    const cardObserver = new IntersectionObserver(handleCardIntersect, cardObserverOptions);

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      Array.from(cards).forEach(card => {
        cardObserver.observe(card);
      });
    }

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  // Show only the first 6 properties on the homepage
  const featuredProperties = properties.slice(0, 6);

  return (
    <section
      id="properties"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across the most desirable locations
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProperties.map((property) => (
            <div key={property.id} className="opacity-0" style={{ transitionDelay: `${property.id * 100}ms` }}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Link
            href="/search"
            className="px-8 py-3 bg-gray-900 text-white rounded-md font-medium text-base hover:bg-gray-800 transition-colors duration-300 inline-flex items-center"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;