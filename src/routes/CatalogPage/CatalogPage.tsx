"use client";

import { useState } from "react";
import { CatalogFilters } from "@/components/CatalogFilters";
import { ContentWrapper } from "@/components/ContentWrapper";
import { FixedCallButton } from "@/components/FixedCallButton";
import { ProductsList } from "@/components/ProductsList";
import { ALL_PRODUCTS } from "@/constants/products";

const MobileLine = () => (
  <div className="relative w-full md:hidden">
    <div className="relative w-full py-8">
      <div className="flex flex-row absolute -right-8 top-5 -left-8 -z-50">
        <div className="h-[1px] bg-slate-400 w-8 skew-y-[-40deg] origin-right mt-4" />
        <div className="h-[1px] bg-slate-400 w-full mt-4" />
        <div className="h-[1px] bg-slate-400 w-52 skew-y-[-40deg] origin-left mt-4" />
      </div>
    </div>
  </div>
);

export const CatalogPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProducts = selectedCategories.length > 0
    ? ALL_PRODUCTS.filter(product => selectedCategories.includes(product.category))
    : ALL_PRODUCTS;

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <CatalogFilters 
        selectedCategories={selectedCategories}
        onCategoryToggle={handleCategoryToggle}
      />
      <br />
      <MobileLine />
      <br />
      {selectedCategories.length > 0 && (
        <ContentWrapper>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-medium">Selected categories:</span>
            {selectedCategories.map(category => (
              <span 
                key={category} 
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
              >
                {category}
                <button 
                  onClick={() => handleCategoryToggle(category)}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  ×
                </button>
              </span>
            ))}
            <button 
              onClick={() => setSelectedCategories([])}
              className="text-blue-500 hover:text-blue-700 text-sm underline ml-2"
            >
              Clear all
            </button>
          </div>
        </ContentWrapper>
      )}
      <br />
      <ContentWrapper>
        <ProductsList
          products={filteredProducts}
          className="lg:grid-cols-3 xl:grid-cols-4"
        />
      </ContentWrapper>
      <div className="md:hidden">
        <FixedCallButton />
      </div>
    </div>
  );
};
