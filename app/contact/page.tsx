
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                We&apos;re here to help with all your real estate needs
              </p>
            </div>
          </section>

          {/* Contact info and form */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact information */}
              <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="text-gray-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          123 Estate Avenue<br />
                          Suite 456<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="text-gray-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600">
                          (123) 456-7890<br />
                          (987) 654-3210
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="text-gray-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600">
                          info@estatehaven.com<br />
                          support@estatehaven.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="text-gray-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9am - 6pm<br />
                          Saturday: 10am - 4pm<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          {/* Map section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0976344720256!2d-122.39858382414698!3d37.78932257649591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcfd61a1d19fb8069!2sFinancial%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1654789999999!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Estate Haven Office Location"
                ></iframe>
              </div>
            </div>
          </section>

          {/* FAQ section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your service fees?</h3>
                  <p className="text-gray-600">
                    Our fees vary depending on the specific service you require. For property sales, we typically charge a competitive commission based on the final sale price. For property management services, we charge a monthly fee based on the property type and requirements. Please contact us for a personalized quote.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly can you help me find a property?</h3>
                  <p className="text-gray-600">
                    The timeline for finding the right property varies based on your specific requirements and current market conditions. Many clients find their dream property within 1-3 months, but we&apos;ll work at your pace and never rush you into a decision.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you work with international clients?</h3>
                  <p className="text-gray-600">
                    Yes, we have extensive experience working with international clients and can provide specialized guidance on the unique considerations for foreign investors or buyers, including legal requirements and tax implications.
                  </p>
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

export default ContactPage;