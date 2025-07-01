import React, { useState } from 'react';
import { X, Star, ShoppingCart, Heart, Minus, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('M');
  const { dispatch } = useCart();

  if (!product) return null;

  // Available colors and sizes
  const availableColors = ['Black', 'White', 'Gray', 'Navy', 'Olive'];
  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ 
        type: 'ADD_ITEM', 
        payload: { 
          ...product, 
          selectedColor, 
          selectedSize 
        } 
      });
    }
    onClose();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) ? 'text-amber-400 fill-current' : 'text-zinc-600'
        }`}
      />
    ));
  };

  const images = product.images || [product.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative bg-zinc-900 rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-800 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-stone-400" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-zinc-800">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {images.length > 1 && (
                <div className="flex space-x-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-amber-500' : 'border-zinc-700'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-amber-400 font-medium bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                    {product.category}
                  </span>
                  <button className="p-2 text-stone-400 hover:text-red-400 transition-colors">
                    <Heart className="h-6 w-6" />
                  </button>
                </div>
                
                <h1 className="text-3xl font-bold text-stone-200 mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="text-lg font-medium ml-2 text-stone-300">{product.rating}</span>
                  </div>
                  <span className="text-stone-400">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl font-bold text-stone-200">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-stone-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-600/30">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-stone-200 mb-2">Description</h3>
                <p className="text-stone-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-semibold text-stone-200 mb-3">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                        selectedColor === color
                          ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                          : 'border-zinc-600 bg-zinc-800 text-stone-300 hover:border-zinc-500'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div 
                          className={`w-4 h-4 rounded-full border border-zinc-600 ${
                            color === 'Black' ? 'bg-black' :
                            color === 'White' ? 'bg-white' :
                            color === 'Gray' ? 'bg-gray-500' :
                            color === 'Navy' ? 'bg-blue-900' :
                            'bg-green-800'
                          }`}
                        />
                        <span>{color}</span>
                        {selectedColor === color && <Check className="h-4 w-4" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-stone-200 mb-3">Size</h3>
                <div className="grid grid-cols-6 gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-2 rounded-lg border-2 transition-all duration-300 text-center font-medium ${
                        selectedSize === size
                          ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                          : 'border-zinc-600 bg-zinc-800 text-stone-300 hover:border-zinc-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Stock */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-medium text-stone-200">Quantity:</span>
                  <div className="flex items-center space-x-3 border border-zinc-700 rounded-lg bg-zinc-800">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-zinc-700 transition-colors"
                    >
                      <Minus className="h-4 w-4 text-stone-400" />
                    </button>
                    <span className="w-12 text-center font-medium text-stone-200">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-zinc-700 transition-colors"
                    >
                      <Plus className="h-4 w-4 text-stone-400" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className={`font-medium ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Selected Options Summary */}
              <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                <h4 className="text-sm font-medium text-stone-300 mb-2">Selected Options:</h4>
                <div className="flex items-center space-x-4 text-sm text-stone-400">
                  <span>Color: <span className="text-amber-400">{selectedColor}</span></span>
                  <span>Size: <span className="text-amber-400">{selectedSize}</span></span>
                  <span>Qty: <span className="text-amber-400">{quantity}</span></span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-zinc-600 disabled:cursor-not-allowed text-zinc-900 disabled:text-stone-400 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-6 w-6" />
                <span>Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};