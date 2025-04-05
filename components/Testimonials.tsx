"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "First-time Homebuyer",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    content: "Estate Haven made my first home purchase incredibly smooth. Their team guided me through every step, from finding the perfect property to closing the deal. I couldn't be happier with my new home!",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Real Estate Investor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "As a seasoned investor, I've worked with many real estate companies, but Estate Haven stands out for their professionalism and attention to detail. They've helped me acquire multiple premium properties with excellent ROI.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Luxury Home Seller",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "When selling my luxury property, I needed an agency that understood its unique value. Estate Haven's marketing strategy attracted qualified buyers, and they negotiated a sale well above my asking price.",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Relocated Executive",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    content: "Relocating to a new city for work was stressful, but Estate Haven made finding a new home the easiest part. Their knowledge of the local market and personalized approach exceeded my expectations.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  console.log(direction)
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Handle testimonial slide changes
  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Animation on scroll
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

    if (testimonialsRef.current) {
      sectionObserver.observe(testimonialsRef.current);
    }

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us
          </p>
        </div>

        <div
          ref={testimonialsRef}
          className="max-w-5xl mx-auto relative opacity-0"
        >
          {/* Testimonial Cards */}
          <div className="overflow-hidden relative h-[400px] md:h-[300px]">
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm h-full flex flex-col">
                    <div className="text-gray-400 mb-6">
                      <Quote size={36} />
                    </div>
                    <p className="text-gray-700 text-lg mb-8 flex-grow">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Indicator Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-gray-900 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-700"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;