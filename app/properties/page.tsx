'use client'

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/SearchFilters";
import PropertyGrid from "@/components/PropertyGrid";
import { Property, properties } from "@/data/properties";
import { Search } from "lucide-react";

type FilterState = {
  priceRange: [number, number];
  bedrooms: number | null;
  bathrooms: number | null;
  propertyType: string | null;
  searchTerm: string;
};

const SearchPage = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 10000000],
    bedrooms: null,
    bathrooms: null,
    propertyType: null,
    searchTerm: "",
  });

  useEffect(() => {
    // Apply filters to the properties
    const results = properties.filter((property) => {
      const price = parseInt(property.price.replace(/\$|,/g, ""));
      const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];

      const matchesBedrooms = filters.bedrooms === null || property.bedrooms >= filters.bedrooms;

      const matchesBathrooms = filters.bathrooms === null || property.bathrooms >= filters.bathrooms;

      const matchesType = filters.propertyType === null || property.type === filters.propertyType;

      const matchesSearch =
        filters.searchTerm === "" ||
        property.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(filters.searchTerm.toLowerCase());

      return matchesPrice && matchesBedrooms && matchesBathrooms && matchesType && matchesSearch;
    });

    setFilteredProperties(results);
  }, [filters]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Find Your Dream Home</h1>
            <p className="text-gray-600">Browse through our collection of premium properties</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <SearchFilters filters={filters} onChange={handleFilterChange} />
            </div>

            <div className="w-full lg:w-3/4">
              <div className="mb-6 relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by property name or location..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all"
                    value={filters.searchTerm}
                    onChange={(e) => handleFilterChange({ searchTerm: e.target.value })}
                  />
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-500">
                    Found <span className="font-medium text-gray-900">{filteredProperties.length}</span> properties
                  </p>
                  <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
                    <select
                      id="sort"
                      className="border border-gray-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                      <option value="newest">Newest</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                    </select>
                  </div>
                </div>

                <PropertyGrid properties={filteredProperties} />

                {filteredProperties.length === 0 && (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">No properties found</h3>
                    <p className="text-gray-600">Try adjusting your search filters</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;