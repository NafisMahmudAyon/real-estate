"use client";

import React from "react";
import { useParams } from "next/navigation";
import { properties } from "@/data/properties";
import { MapPin, Home, Maximize2, Bath, BedDouble, Calendar, Wifi, Car, UtensilsCrossed, TreePine } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PropertyCard from "@/components/PropertyCard";
import { notFound } from "next/navigation";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const propertyId = parseInt(id as string);

  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    return notFound();
  }

  // Get similar properties (same type, excluding current property)
  const similarProperties = properties
    .filter(p => p.type === property.type && p.id !== property.id)
    .slice(0, 3);

  const amenities = [
    { name: "Wi-Fi", icon: Wifi },
    { name: "Parking", icon: Car },
    { name: "Kitchen", icon: UtensilsCrossed },
    { name: "Garden View", icon: TreePine },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        {/* Property Header */}
        <div className="container mx-auto px-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.title}</h1>
              <div className="flex items-center text-gray-600 mt-2">
                <MapPin size={18} className="mr-2" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900">{property.price}</div>
          </div>
        </div>

        {/* Property Images */}
        <div className="container mx-auto px-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
            <div className="md:col-span-2 h-full overflow-hidden rounded-xl">
              <div className="relative w-full h-full">
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="hidden md:grid grid-cols-1 gap-4">
              <div className="overflow-hidden rounded-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={property.imageUrl}
                    alt={`${property.title} additional view`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={property.imageUrl}
                    alt={`${property.title} additional view`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Overview */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <BedDouble size={24} className="text-gray-600 mb-2" />
                    <span className="text-lg font-medium">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Bath size={24} className="text-gray-600 mb-2" />
                    <span className="text-lg font-medium">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Maximize2 size={24} className="text-gray-600 mb-2" />
                    <span className="text-lg font-medium">{property.sqft} sqft</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Home size={24} className="text-gray-600 mb-2" />
                    <span className="text-lg font-medium">{property.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  This stunning {property.type.toLowerCase()} offers a perfect blend of comfort and elegance.
                  Located in the highly sought-after {property.location}, this property features {property.bedrooms} spacious bedrooms,
                  {property.bathrooms} modern bathrooms, and a total of {property.sqft} square feet of living space.
                  The property has been recently renovated with high-quality materials and offers a perfect opportunity for those
                  seeking a luxurious lifestyle in a prime location.
                </p>
              </div>

              {/* Amenities */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <amenity.icon size={20} className="text-gray-600" />
                      </div>
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location</h2>
                <div className="bg-gray-200 h-[300px] rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">Map placeholder</p>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">About the area</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {property.location} is known for its vibrant community, excellent amenities, and
                    convenient access to transportation. The neighborhood features several parks,
                    shopping centers, restaurants, and schools within a short distance.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Contact Agent */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8 sticky top-28">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Interested in this property?</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="I'm interested in this property..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800" size="lg">
                    Contact Agent
                  </Button>
                </form>
                <div className="mt-6 flex items-center justify-center">
                  <Calendar size={18} className="text-gray-600 mr-2" />
                  <span className="text-gray-600 text-sm">Schedule a tour</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="container mx-auto px-6 mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetailPage;