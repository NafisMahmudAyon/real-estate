"use client";

import { Property } from "@/data/properties";
import { cn } from "@/lib/utils";
import { Bath, BedDouble, Heart, MapPin, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-500 group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image width={600} height={400}
          src={property.imageUrl}
          alt={property.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-medium text-white bg-gray-900/80 backdrop-blur-sm rounded-full">
            {property.type}
          </span>
        </div>
        <button
          className={cn(
            "absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300",
            isFavorited
              ? "bg-rose-100 text-rose-500"
              : "bg-white/80 backdrop-blur-sm text-gray-600 hover:text-rose-500"
          )}
          onClick={(e) => {
            e.preventDefault();
            setIsFavorited(!isFavorited);
          }}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            size={18}
            fill={isFavorited ? "currentColor" : "none"}
            className={cn(
              "transition-transform duration-300",
              isFavorited ? "scale-110" : "scale-100"
            )}
          />
        </button>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
              {property.title}
            </h3>
            <div className="flex items-center text-gray-500 mb-4">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
          </div>
          <div className="text-lg font-bold text-gray-900">{property.price}</div>
        </div>

        <div className="w-full h-px bg-gray-100 my-4"></div>

        {/* Features */}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-600">
            <BedDouble size={18} className="mr-1" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath size={18} className="mr-1" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Maximize2 size={18} className="mr-1" />
            <span className="text-sm">{property.sqft} sqft</span>
          </div>
        </div>
      </div>

      {/* Call to Action (Appears on Hover) */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-500",
        isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <Link
          href={`/properties/${property.id}`}
          className="px-6 py-3 bg-white text-gray-900 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;