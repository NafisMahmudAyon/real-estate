"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  const handleScrollDown = () => {
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        ref={heroRef}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium animate-fade-in-down" style={{ animationDelay: "0.2s" }}>
          Premium Real Estate
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto animate-fade-in-down" style={{ animationDelay: "0.4s" }}>
          Discover Your Perfect <span className="text-shadow">Home</span> With Us
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-down" style={{ animationDelay: "0.6s" }}>
          We curate exceptional properties that match your lifestyle and aspirations
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-down" style={{ animationDelay: "0.8s" }}>
          <Link
            href="#properties"
            className="px-8 py-3 bg-white text-gray-900 rounded-md font-medium text-base hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg"
          >
            View Properties
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 bg-transparent border border-white text-white rounded-md font-medium text-base hover:bg-white/10 transition-colors duration-300"
          >
            Contact Agent
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScrollDown}
          className="text-white bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;