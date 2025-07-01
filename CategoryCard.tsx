import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onCategoryClick: (category: Category) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onCategoryClick }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-xl cursor-pointer group transition-all duration-500 hover:scale-105"
      onClick={() => onCategoryClick(category)}
    >
      <div className="relative h-64 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-all duration-300 transform group-hover:scale-105 group-hover:animate-pulse">
            {category.name}
          </h3>
          <p className="text-stone-300 group-hover:text-stone-200 transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300">
            {category.productCount} products
          </p>
        </div>

        {/* Animated border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-xl transition-all duration-500 group-hover:shadow-lg group-hover:shadow-amber-400/25" />
        
        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
      </div>
    </div>
  );
};