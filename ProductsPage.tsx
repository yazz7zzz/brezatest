import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { RefreshCw, Shirt } from 'lucide-react';
import { categories } from '../data/products';

interface ProductsPageProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  searchQuery: string;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  onProductClick,
  searchQuery,
  selectedCategory,
  onCategoryChange,
  onSearchChange
}) => {
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  const clearFilters = () => {
    onCategoryChange('');
    onSearchChange('');
  };

  return (
    <section id="products" className="py-16 bg-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 scroll-animate">
          <div>
            <h2 className="text-4xl font-bold text-stone-200 mb-2 hover:text-amber-400 transition-colors cursor-default">
              Complete Collection
            </h2>
            <p className="text-stone-400">
              {filteredProducts.length} products found
              {selectedCategory && ` in ${selectedCategory}`}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
          
          {(selectedCategory || searchQuery) && (
            <button
              onClick={clearFilters}
              className="mt-4 sm:mt-0 text-amber-400 hover:text-amber-300 font-medium flex items-center space-x-1 hover-glow group"
            >
              <RefreshCw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 scroll-animate">
          <button
            onClick={() => onCategoryChange('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
              !selectedCategory
                ? 'bg-amber-500 text-zinc-900 animate-pulse-glow'
                : 'bg-zinc-800 text-stone-300 hover:bg-zinc-700 border border-zinc-700 hover-lift'
            }`}
          >
            All Styles
          </button>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 animate-bounce-in stagger-${Math.min(index + 1, 4)} ${
                selectedCategory === category.name
                  ? 'bg-amber-500 text-zinc-900 animate-pulse-glow'
                  : 'bg-zinc-800 text-stone-300 hover:bg-zinc-700 border border-zinc-700 hover-lift'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`scroll-animate hover-lift stagger-${Math.min((index % 8) + 1, 8)}`}
              >
                <ProductCard
                  product={product}
                  onProductClick={onProductClick}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 scroll-animate">
            <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
              <Shirt className="h-12 w-12 text-zinc-600 animate-float" />
            </div>
            <h3 className="text-xl font-semibold text-stone-200 mb-2">No products found</h3>
            <p className="text-stone-400 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearFilters}
              className="text-amber-400 hover:text-amber-300 font-medium hover-glow"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};