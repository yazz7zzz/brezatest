import React from 'react';
import { CategoryCard } from './CategoryCard';
import { Category } from '../types';
import { Palette, Sparkles } from 'lucide-react';

interface CategoriesPageProps {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  categories,
  onCategoryClick
}) => {
  return (
    <section className="py-20 bg-zinc-900 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-amber-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-amber-400/10 rounded-full animate-float stagger-3"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-amber-400/5 rounded-full animate-float stagger-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Page Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="flex items-center justify-center mb-6">
            <Palette className="h-10 w-10 text-amber-400 mr-4 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 animate-gradient-shift">
              Our Collections
            </h1>
            <Palette className="h-10 w-10 text-amber-400 ml-4 animate-float stagger-2" />
          </div>
          <p className="text-xl md:text-2xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
            Explore our diverse range of streetwear collections, each crafted with 
            <span className="text-amber-400 font-semibold hover:animate-pulse cursor-default"> premium materials</span> and 
            <span className="text-amber-400 font-semibold hover:animate-pulse cursor-default"> unique designs</span>. 
            Find your perfect style and express your individuality.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`scroll-animate hover-lift stagger-${index + 1}`}
            >
              <CategoryCard
                category={category}
                onCategoryClick={onCategoryClick}
              />
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center scroll-animate">
          <div className="max-w-4xl mx-auto bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-amber-400 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-stone-200 mb-4">
              Quality & Craftsmanship
            </h2>
            <p className="text-lg text-stone-400 leading-relaxed">
              Every piece in our collection is carefully selected and crafted to meet our high standards. 
              From premium cotton blends to unique graphic designs, we ensure that each item not only 
              looks great but feels amazing to wear. Discover the perfect balance of comfort, style, 
              and durability in every category.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};