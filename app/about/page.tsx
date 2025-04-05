
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building, Users, Award, Globe } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                About Estate Haven
              </h1>
              <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Your trusted partner in finding exceptional properties for extraordinary lives
              </p>
            </div>
          </section>

          {/* Story section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2010, Estate Haven began with a simple mission: to transform the real estate experience by combining exceptional properties with personalized service. What started as a small team of passionate real estate professionals has grown into a respected industry leader.
                </p>
                <p className="text-gray-600">
                  We believe that finding the perfect property is about more than just square footage and location—it&apos;s about finding a space that resonates with your lifestyle and aspirations. Our team is dedicated to guiding you through every step of your real estate journey.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Image
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800"
                  alt="Estate Haven team"
                  width={550}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Values section */}
          <section className="mb-20 bg-white py-16 px-6 md:px-10 rounded-2xl shadow-sm">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600">
                The principles that guide our approach to real estate and client service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Focused</h3>
                <p className="text-gray-600">
                  Your goals and needs are at the center of everything we do. We listen, adapt, and deliver.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in every property we list and every interaction we have.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                  <Building size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Honesty and transparency form the foundation of our business practices and relationships.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new technologies and approaches to provide you with the best possible experience.
                </p>
              </div>
            </div>
          </section>

          {/* Team section */}
          <section className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
              <p className="text-gray-600">
                Experienced professionals dedicated to your real estate success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <Image width={800} height={600}
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Sarah Johnson"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
                    <p className="text-gray-500 mb-4">Founder & CEO</p>
                    <p className="text-gray-600">
                      With over 20 years of experience in luxury real estate, Sarah leads our team with passion and expertise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <Image width={800} height={600}
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Michael Chen"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Chen</h3>
                    <p className="text-gray-500 mb-4">Chief Operating Officer</p>
                    <p className="text-gray-600">
                      Michael ensures that our operations run smoothly, allowing our agents to focus on serving clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <Image width={800} height={600}
                    src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Alexandra Rivera"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Alexandra Rivera</h3>
                    <p className="text-gray-500 mb-4">Head of Property Acquisition</p>
                    <p className="text-gray-600">
                      Alexandra&apos;s market insight and negotiation skills ensure we offer the finest properties available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;