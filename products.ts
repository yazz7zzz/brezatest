import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Acid Washed Oversized Tees',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 13
  },
  {
    id: '2',
    name: 'Oversized T-Shirts',
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 18
  },
  {
    id: '3',
    name: 'Regular Fit T-Shirts',
    image: 'https://images.pexels.com/photos/8532615/pexels-photo-8532615.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 15
  },
  {
    id: '4',
    name: 'Premium Hoodies',
    image: 'https://images.pexels.com/photos/8532614/pexels-photo-8532614.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 10
  }
];

export const products: Product[] = [
  // Acid Washed Oversized Tees - Your Specific Designs
  {
    id: '1',
    name: 'ASTRO WORLD Acid Wash Oversized Tee',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Acid Washed Oversized Tees',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.9,
    reviews: 187,
    inStock: true,
    featured: true,
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '2',
    name: 'NIRVANA Acid Wash Oversized Tee',
    price: 64.99,
    originalPrice: 84.99,
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Acid Washed Oversized Tees',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: true,
    images: [
      'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '4',
    name: 'Retro Acid Wash Oversized Tee - Abstract Art',
    price: 54.99,
    image: 'https://images.pexels.com/photos/8532614/pexels-photo-8532614.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Acid Washed Oversized Tees',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: false
  },
  {
    id: '5',
    name: 'Grunge Acid Wash Oversized Tee - Band Style',
    price: 52.99,
    originalPrice: 64.99,
    image: 'https://images.pexels.com/photos/8532613/pexels-photo-8532613.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Acid Washed Oversized Tees',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.5,
    reviews: 156,
    inStock: true,
    featured: false
  },

  // Oversized T-Shirts
  {
    id: '6',
    name: 'Urban Oversized Tee - Geometric Design',
    price: 39.99,
    image: 'https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Oversized T-Shirts',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.6,
    reviews: 203,
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Minimalist Oversized Tee - Typography',
    price: 42.99,
    image: 'https://images.pexels.com/photos/8532611/pexels-photo-8532611.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Oversized T-Shirts',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.8,
    reviews: 174,
    inStock: true,
    featured: false
  },
  {
    id: '8',
    name: 'Artistic Oversized Tee - Nature Graphics',
    price: 44.99,
    originalPrice: 54.99,
    image: 'https://images.pexels.com/photos/8532610/pexels-photo-8532610.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Oversized T-Shirts',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.9,
    reviews: 98,
    inStock: true,
    featured: true
  },
  {
    id: '9',
    name: 'Street Style Oversized Tee - Urban Art',
    price: 41.99,
    image: 'https://images.pexels.com/photos/8532609/pexels-photo-8532609.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Oversized T-Shirts',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.7,
    reviews: 145,
    inStock: true,
    featured: false
  },

  // Regular Fit T-Shirts
  {
    id: '10',
    name: 'Classic Fit Tee - Vintage Logo',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8532608/pexels-photo-8532608.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Regular Fit T-Shirts',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.5,
    reviews: 267,
    inStock: true,
    featured: false
  },
  {
    id: '11',
    name: 'Regular Fit Tee - Graphic Print',
    price: 32.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/8532607/pexels-photo-8532607.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Regular Fit T-Shirts',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.4,
    reviews: 189,
    inStock: true,
    featured: false
  },
  {
    id: '12',
    name: 'Essential Regular Fit Tee - Minimalist',
    price: 27.99,
    image: 'https://images.pexels.com/photos/8532606/pexels-photo-8532606.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Regular Fit T-Shirts',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    featured: true
  },
  {
    id: '13',
    name: 'Premium Regular Fit Tee - Artist Collab',
    price: 34.99,
    image: 'https://images.pexels.com/photos/8532605/pexels-photo-8532605.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Regular Fit T-Shirts',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.8,
    reviews: 92,
    inStock: true,
    featured: false
  },

  // Premium Hoodies
  {
    id: '14',
    name: 'Premium Hoodie - Street Art Graphics',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.pexels.com/photos/8532604/pexels-photo-8532604.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Premium Hoodies',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: '15',
    name: 'Luxury Hoodie - Abstract Design',
    price: 94.99,
    image: 'https://images.pexels.com/photos/8532603/pexels-photo-8532603.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Premium Hoodies',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    featured: false
  },
  {
    id: '16',
    name: 'Designer Hoodie - Artistic Print',
    price: 99.99,
    image: 'https://images.pexels.com/photos/8532602/pexels-photo-8532602.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Premium Hoodies',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.7,
    reviews: 198,
    inStock: true,
    featured: true
  },
  {
    id: '17',
    name: 'Limited Edition Hoodie - Graffiti Style',
    price: 104.99,
    originalPrice: 124.99,
    image: 'https://images.pexels.com/photos/8532601/pexels-photo-8532601.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Premium Hoodies',
    description: '100% cotton, 240 GSM, breathable fabric with a unique acid-washed finish. Unisex oversized fit with relaxed shoulders and sleeves for a streetwear look.',
    rating: 4.9,
    reviews: 78,
    inStock: true,
    featured: false
  }
];