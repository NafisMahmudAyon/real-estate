import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/data/properties";

interface PropertyGridProps {
  properties: Property[];
}

const PropertyGrid = ({ properties }: PropertyGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div
          key={property.id}
          className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;