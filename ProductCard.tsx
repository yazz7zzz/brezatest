import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div 
      className="bg-zinc-800 rounded-xl shadow-lg border border-zinc-700 overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-amber-500/50 h-full flex flex-col hover:bg-zinc-750 relative"
      onClick={() => onProductClick(product)}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Large Product Image */}
      <div className="relative overflow-hidden h-80">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        
        {/* Heart button */}
        <button className="absolute top-4 right-4 p-2 bg-zinc-900/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-zinc-900 hover:scale-110 transform translate-y-2 group-hover:translate-y-0">
          <Heart className="h-5 w-5 text-stone-300 hover:text-red-400 transition-colors" />
        </button>

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-zinc-800 text-stone-200 px-4 py-2 rounded-lg font-medium border border-zinc-700 animate-pulse">
              Out of Stock
            </span>
          </div>
        )}

        {/* Sale badge */}
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Product Info - Compact */}
      <div className="p-6 flex flex-col flex-1 relative">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="text-xs text-amber-400 font-medium bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 group-hover:bg-amber-400/20 transition-colors">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-stone-200 mb-4 line-clamp-2 group-hover:text-amber-400 transition-colors min-h-[3.5rem] leading-tight">
          {product.name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl font-bold text-stone-200 group-hover:text-amber-400 transition-colors">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-stone-500 line-through group-hover:text-stone-400 transition-colors">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full mr-1 ${
                  i < Math.floor(product.rating) ? 'bg-amber-400' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-stone-400">({product.reviews})</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-zinc-600 disabled:cursor-not-allowed text-zinc-900 disabled:text-stone-400 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 group/btn font-semibold text-sm uppercase tracking-wide mt-auto"
        >
          <ShoppingCart className="h-4 w-4 group-hover/btn:animate-bounce" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};