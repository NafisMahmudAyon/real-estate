'use client'
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, MoveRight, Briefcase, LineChart, ChevronRight, Building } from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      icon: <Home size={24} />,
      title: "Property Buying",
      description: "Find your dream home with our expert guidance. We'll help you navigate the market, handle negotiations, and ensure a smooth closing process.",
      link: "#property-buying"
    },
    {
      icon: <MoveRight size={24} />,
      title: "Property Selling",
      description: "Maximize your property's value with our strategic marketing, professional staging, and network of qualified buyers.",
      link: "#property-selling"
    },
    {
      icon: <Building size={24} />,
      title: "Property Management",
      description: "Let us handle the day-to-day operations of your investment properties, from tenant screening to maintenance coordination.",
      link: "#property-management"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Investment Consulting",
      description: "Make informed real estate investment decisions with our market analysis, ROI projections, and portfolio optimization strategies.",
      link: "#investment-consulting"
    },
    {
      icon: <LineChart size={24} />,
      title: "Market Analysis",
      description: "Stay ahead with our detailed market reports, pricing trends, and neighborhood insights tailored to your specific needs.",
      link: "#market-analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Comprehensive real estate solutions tailored to your unique needs
              </p>
            </div>
          </section>

          {/* Services overview */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  id={service.link.substring(1)}
                >
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
                  >
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Process section */}
          <section className="mb-20 bg-white py-16 px-6 md:px-10 rounded-2xl shadow-sm">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-gray-600">
                A streamlined approach to ensure your real estate experience is smooth and successful
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:translate-x-[-0.5px]"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <div className="md:text-right md:pr-12">
                      <div className="hidden md:block absolute top-0 right-0 w-3 h-3 bg-gray-900 rounded-full transform translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                      <p className="text-gray-600">
                        We begin by understanding your goals, preferences, and requirements to tailor our services to your specific needs.
                      </p>
                    </div>
                    <div className="md:hidden h-3 w-3 bg-gray-900 rounded-full absolute left-0 transform -translate-x-1.5"></div>
                    <div></div>
                  </div>

                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <div className="md:hidden"></div>
                    <div className="md:pl-12">
                      <div className="hidden md:block absolute top-0 left-0 w-3 h-3 bg-gray-900 rounded-full transform -translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Development</h3>
                      <p className="text-gray-600">
                        Based on your input and our market expertise, we create a customized plan to achieve your real estate objectives.
                      </p>
                    </div>
                    <div className="md:hidden h-3 w-3 bg-gray-900 rounded-full absolute left-0 transform -translate-x-1.5"></div>
                  </div>

                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <div className="md:text-right md:pr-12">
                      <div className="hidden md:block absolute top-0 right-0 w-3 h-3 bg-gray-900 rounded-full transform translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
                      <p className="text-gray-600">
                        We execute the strategy with precision, keeping you informed and involved throughout the process.
                      </p>
                    </div>
                    <div className="md:hidden h-3 w-3 bg-gray-900 rounded-full absolute left-0 transform -translate-x-1.5"></div>
                    <div></div>
                  </div>

                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <div className="md:hidden"></div>
                    <div className="md:pl-12">
                      <div className="hidden md:block absolute top-0 left-0 w-3 h-3 bg-gray-900 rounded-full transform -translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Success & Follow-up</h3>
                      <p className="text-gray-600">
                        We ensure a successful outcome and maintain contact to address any future real estate needs you may have.
                      </p>
                    </div>
                    <div className="md:hidden h-3 w-3 bg-gray-900 rounded-full absolute left-0 transform -translate-x-1.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section className="mb-10">
            <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 animate-fade-in-up">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-8 md:text-lg">
                  Contact our team today to discuss how our services can help you achieve your real estate goals.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;