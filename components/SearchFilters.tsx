"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Home, Bed, Bath, DollarSign, FilterX } from "lucide-react";

type FilterState = {
  priceRange: [number, number];
  bedrooms: number | null;
  bathrooms: number | null;
  propertyType: string | null;
  searchTerm: string;
};

interface SearchFiltersProps {
  filters: FilterState;
  onChange: (filters: Partial<FilterState>) => void;
}

const propertyTypes = ["Apartment", "House", "Villa", "Condo", "Townhouse"];

const formatPrice = (value: number) => {
  return `$${value.toLocaleString()}`;
};

const SearchFilters = ({ filters, onChange }: SearchFiltersProps) => {
  const handleReset = () => {
    onChange({
      priceRange: [0, 10000000],
      bedrooms: null,
      bathrooms: null,
      propertyType: null,
      searchTerm: "",
    });
  };

  return (
    <Card className="shadow-sm bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FilterX size={18} /> Filters
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-xs h-8 hover:bg-gray-100"
          >
            Reset All
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Price Range */}
        <div className="space-y-3">
          <h3 className="font-medium text-sm flex items-center gap-1.5">
            <DollarSign size={16} /> Price Range
          </h3>
          <div>
            <Slider
              value={filters.priceRange}
              min={0}
              max={10000000}
              step={50000}
              onValueChange={(value) => onChange({ priceRange: value as [number, number] })}
              className="py-4"
            />
            <div className="flex justify-between mt-1 text-sm text-gray-500">
              <span>{formatPrice(filters.priceRange[0])}</span>
              <span>{formatPrice(filters.priceRange[1])}</span>
            </div>
          </div>
        </div>

        {/* Bedrooms, Bathrooms, Property Type filters */}
        <div className="space-y-3">
          <h3 className="font-medium text-sm flex items-center gap-1.5">
            <Bed size={16} /> Bedrooms
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filters.bedrooms === null ? "default" : "outline"}
              size="sm"
              onClick={() => onChange({ bedrooms: null })}
              className="rounded-full px-3 py-1 h-8"
            >
              Any
            </Button>
            {[1, 2, 3, 4, 5].map((num) => (
              <Button
                key={num}
                variant={filters.bedrooms === num ? "default" : "outline"}
                size="sm"
                onClick={() => onChange({ bedrooms: num })}
                className="rounded-full px-3 py-1 h-8"
              >
                {num}+
              </Button>
            ))}
          </div>
        </div>

        {/* Bathrooms */}
        <div className="space-y-3">
          <h3 className="font-medium text-sm flex items-center gap-1.5">
            <Bath size={16} /> Bathrooms
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filters.bathrooms === null ? "default" : "outline"}
              size="sm"
              onClick={() => onChange({ bathrooms: null })}
              className="rounded-full px-3 py-1 h-8"
            >
              Any
            </Button>
            {[1, 2, 3, 4, 5].map((num) => (
              <Button
                key={num}
                variant={filters.bathrooms === num ? "default" : "outline"}
                size="sm"
                onClick={() => onChange({ bathrooms: num })}
                className="rounded-full px-3 py-1 h-8"
              >
                {num}+
              </Button>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div className="space-y-3">
          <h3 className="font-medium text-sm flex items-center gap-1.5">
            <Home size={16} /> Property Type
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={filters.propertyType === null ? "default" : "outline"}
              size="sm"
              onClick={() => onChange({ propertyType: null })}
              className="rounded-md h-8"
            >
              Any
            </Button>
            {propertyTypes.map((type) => (
              <Button
                key={type}
                variant={filters.propertyType === type ? "default" : "outline"}
                size="sm"
                onClick={() => onChange({ propertyType: type })}
                className="rounded-md h-8"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;