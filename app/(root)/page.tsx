'use client'
import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyList from "@/components/PropertyList";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // For animation on scroll
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animateClass = entry.target.getAttribute('data-animate');
          if (animateClass) {
            entry.target.classList.add(animateClass);
            entry.target.classList.remove('opacity-0');
          }
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PropertyList />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
