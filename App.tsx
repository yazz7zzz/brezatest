import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { CategoryCard } from './components/CategoryCard';
import { Cart } from './components/Cart';
import { AuthModal } from './components/AuthModal';
import { ProductDetail } from './components/ProductDetail';
import { Checkout } from './components/Checkout';
import { ProductsPage } from './components/ProductsPage';
import { CategoriesPage } from './components/CategoriesPage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { CartProvider, useCart } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { products, categories } from './data/products';
import { Product, Category } from './types';
import { ChevronRight, Star, ShoppingBag, Shield, Truck, RefreshCw, Shirt, Palette, Award, Sparkles, Users, Heart, Zap, ShoppingCart } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'categories' | 'about'>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentFeaturedImage, setCurrentFeaturedImage] = useState(0);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  const acidWashedTees = products.filter(product => product.category === 'Acid Washed Oversized Tees');
  const oversizedTees = products.filter(product => product.category === 'Oversized T-Shirts').slice(0, 4);

  // Featured Supima T-shirt data
  const featuredSupimaProduct = {
    id: 'supima-1',
    name: 'Unisex Supima T-Shirt - Premium Collection',
    price: 49.99,
    originalPrice: 64.99,
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8532614/pexels-photo-8532614.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Premium T-Shirts',
    description: '100% Supima cotton with superior softness and durability. Unisex fit with reinforced seams for long-lasting wear.',
    rating: 4.9,
    reviews: 342,
    inStock: true,
    featured: true
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category.name);
    setCurrentPage('products');
  };

  const handleNavigateToProducts = () => {
    setCurrentPage('products');
  };

  const handleNavigateToCategories = () => {
    setCurrentPage('categories');
  };

  const handleNavigateToAbout = () => {
    setCurrentPage('about');
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    setSelectedCategory('');
    setSearchQuery('');
    // Scroll to top of home page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Categories Page
  if (currentPage === 'categories') {
    return (
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-zinc-950">
            <Header
              onCartClick={() => setIsCartOpen(true)}
              onAuthClick={() => setIsAuthModalOpen(true)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onNavigateHome={handleNavigateToHome}
              onNavigateToProducts={handleNavigateToProducts}
              onNavigateToCategories={handleNavigateToCategories}
              onNavigateToAbout={handleNavigateToAbout}
              currentPage={currentPage}
            />

            <CategoriesPage
              categories={categories}
              onCategoryClick={handleCategoryClick}
            />

            <Footer />

            {/* Modals */}
            <Cart
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
            />

            <AuthModal
              isOpen={isAuthModalOpen}
              onClose={() => setIsAuthModalOpen(false)}
            />

            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />

            <Checkout
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
            />
          </div>
        </CartProvider>
      </AuthProvider>
    );
  }

  // About Page
  if (currentPage === 'about') {
    return (
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-zinc-950">
            <Header
              onCartClick={() => setIsCartOpen(true)}
              onAuthClick={() => setIsAuthModalOpen(true)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onNavigateHome={handleNavigateToHome}
              onNavigateToProducts={handleNavigateToProducts}
              onNavigateToCategories={handleNavigateToCategories}
              onNavigateToAbout={handleNavigateToAbout}
              currentPage={currentPage}
            />

            <AboutPage />

            <Footer />

            {/* Modals */}
            <Cart
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
            />

            <AuthModal
              isOpen={isAuthModalOpen}
              onClose={() => setIsAuthModalOpen(false)}
            />

            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />

            <Checkout
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
            />
          </div>
        </CartProvider>
      </AuthProvider>
    );
  }

  // Products Page
  if (currentPage === 'products') {
    return (
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-zinc-950">
            <Header
              onCartClick={() => setIsCartOpen(true)}
              onAuthClick={() => setIsAuthModalOpen(true)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onNavigateHome={handleNavigateToHome}
              onNavigateToProducts={handleNavigateToProducts}
              onNavigateToCategories={handleNavigateToCategories}
              onNavigateToAbout={handleNavigateToAbout}
              currentPage={currentPage}
            />

            <ProductsPage
              products={products}
              onProductClick={setSelectedProduct}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onSearchChange={setSearchQuery}
            />

            <Footer />

            {/* Modals */}
            <Cart
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
            />

            <AuthModal
              isOpen={isAuthModalOpen}
              onClose={() => setIsAuthModalOpen(false)}
            />

            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />

            <Checkout
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
            />
          </div>
        </CartProvider>
      </AuthProvider>
    );
  }

  // Home Page
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent 
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          isAuthModalOpen={isAuthModalOpen}
          setIsAuthModalOpen={setIsAuthModalOpen}
          isCheckoutOpen={isCheckoutOpen}
          setIsCheckoutOpen={setIsCheckoutOpen}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          currentFeaturedImage={currentFeaturedImage}
          setCurrentFeaturedImage={setCurrentFeaturedImage}
          handleNavigateToHome={handleNavigateToHome}
          handleNavigateToProducts={handleNavigateToProducts}
          handleNavigateToCategories={handleNavigateToCategories}
          handleNavigateToAbout={handleNavigateToAbout}
          acidWashedTees={acidWashedTees}
          oversizedTees={oversizedTees}
          featuredSupimaProduct={featuredSupimaProduct}
        />
      </CartProvider>
    </AuthProvider>
  );
}

// Separate component for the home page content that uses useCart
function AppContent({
  isCartOpen,
  setIsCartOpen,
  isAuthModalOpen,
  setIsAuthModalOpen,
  isCheckoutOpen,
  setIsCheckoutOpen,
  selectedProduct,
  setSelectedProduct,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  currentFeaturedImage,
  setCurrentFeaturedImage,
  handleNavigateToHome,
  handleNavigateToProducts,
  handleNavigateToCategories,
  handleNavigateToAbout,
  acidWashedTees,
  oversizedTees,
  featuredSupimaProduct
}: any) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateHome={handleNavigateToHome}
        onNavigateToProducts={handleNavigateToProducts}
        onNavigateToCategories={handleNavigateToCategories}
        onNavigateToAbout={handleNavigateToAbout}
        currentPage="home"
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear hover:scale-110"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1920)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-800/80 to-amber-900/70 animate-gradient-shift" />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-300/40 rounded-full animate-float stagger-2"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-amber-500/20 rounded-full animate-float stagger-3"></div>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-amber-400/35 rounded-full animate-float stagger-4"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen flex items-center">
          <div className="text-center text-white w-full">
            <h1 className="font-breza text-9xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold mb-8 tracking-tight animate-fade-in-scale">
              <span className="inline-block hover:animate-pulse-glow transition-all duration-300 cursor-default">
                Breza
              </span>
            </h1>
            <p className="text-lg md:text-xl text-amber-400 mb-12 font-medium tracking-wide animate-slide-up stagger-2">
              Vibe Your Style
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-3">
              <button 
                onClick={() => document.getElementById('acid-washed-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover-glow flex items-center justify-center space-x-2 shadow-2xl group"
              >
                <Shirt className="h-5 w-5 group-hover:animate-bounce" />
                <span>Shop Collection</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleNavigateToCategories}
                className="border-2 border-stone-400/30 hover:border-amber-400 text-stone-200 hover:text-amber-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-amber-400/10 backdrop-blur-sm hover-lift group"
              >
                <span className="group-hover:animate-shimmer">Browse Styles</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Banner Section */}
      <section className="relative bg-zinc-800/80 backdrop-blur-sm border-y border-zinc-700/50 overflow-hidden shadow-lg">
        <div className="flex items-center h-16 whitespace-nowrap">
          {/* First set of content */}
          <div className="flex items-center space-x-16 text-stone-300 font-medium text-xl animate-scroll-banner-seamless">
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 text-stone-300 font-medium text-xl animate-scroll-banner-seamless">
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
            <span className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-amber-400/70" />
              <span>INAUGURAL DISCOUNT</span>
              <Sparkles className="h-5 w-5 text-amber-400/70" />
            </span>
          </div>
        </div>
      </section>

      {/* Acid Washed Oversized Tees Section */}
      <section id="acid-washed-section" className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 animate-shimmer" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-amber-400 mr-3 animate-float" />
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 animate-gradient-shift">
                Acid Washed Oversized Tees
              </h2>
              <Sparkles className="h-8 w-8 text-amber-400 ml-3 animate-float stagger-2" />
            </div>
            <p className="text-lg md:text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed">
              Discover our signature collection of premium acid-washed oversized tees featuring 
              <span className="text-amber-400 font-semibold hover:animate-pulse cursor-default"> iconic graphics</span> and 
              <span className="text-amber-400 font-semibold hover:animate-pulse cursor-default"> authentic vintage wash</span>. 
              Each piece is crafted for the ultimate streetwear experience.
            </p>
          </div>

          {/* Products Grid - Fixed Width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {acidWashedTees.map((product, index) => (
              <div 
                key={product.id} 
                className={`scroll-animate hover-lift stagger-${Math.min(index + 1, 8)}`}
              >
                <ProductCard
                  product={product}
                  onProductClick={setSelectedProduct}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Ethos Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border border-amber-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-amber-400/5 rounded-full animate-float stagger-3"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-amber-400/5 rounded-full animate-float stagger-2"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center scroll-animate">
            {/* Icon Grid */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="p-4 bg-amber-400/10 rounded-full border border-amber-400/20 animate-float">
                <Users className="h-8 w-8 text-amber-400" />
              </div>
              <div className="p-4 bg-amber-400/10 rounded-full border border-amber-400/20 animate-float stagger-2">
                <Heart className="h-8 w-8 text-amber-400" />
              </div>
              <div className="p-4 bg-amber-400/10 rounded-full border border-amber-400/20 animate-float stagger-3">
                <Zap className="h-8 w-8 text-amber-400" />
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 mb-8 animate-gradient-shift">
                Our Ethos
              </h2>
              
              <p className="text-xl md:text-2xl text-stone-300 leading-relaxed font-light tracking-wide">
                At Breza, we create wearable art that amplifies your vibe. Inspired by the pulse of music and the grit of street culture, our T-shirts and hoodies are designed to let you wear your story boldly. We're here to empower self-expression, celebrate individuality, and connect a global tribe of creatives through authentic, sustainable style.
              </p>

              {/* Decorative Elements */}
              <div className="flex justify-center items-center space-x-4 mt-12">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
                <Sparkles className="h-6 w-6 text-amber-400 animate-pulse" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Supima T-Shirt Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-24 h-24 border border-amber-400/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 border border-amber-400/15 rounded-full animate-float stagger-2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Product Info */}
            <div className="space-y-8 scroll-animate">
              <div>
                <span className="text-sm text-amber-400 font-medium bg-amber-400/10 px-4 py-2 rounded-full border border-amber-400/20 animate-bounce-in">
                  Premium Collection
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 animate-gradient-shift leading-tight">
                {featuredSupimaProduct.name}
              </h2>
              
              <p className="text-lg text-stone-300 leading-relaxed">
                {featuredSupimaProduct.description}
              </p>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-stone-200">
                  ${featuredSupimaProduct.price}
                </span>
                <span className="text-xl text-stone-500 line-through">
                  ${featuredSupimaProduct.originalPrice}
                </span>
                <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-600/30">
                  23% OFF
                </span>
              </div>

              <button
                onClick={() => setSelectedProduct(featuredSupimaProduct as Product)}
                className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover-glow flex items-center space-x-3 shadow-2xl group"
              >
                <ShoppingBag className="h-5 w-5 group-hover:animate-bounce" />
                <span>Shop Now</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right side - Asymmetrical Product Images */}
            <div className="relative scroll-animate stagger-2">
              {/* Main featured image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={featuredSupimaProduct.images[currentFeaturedImage]}
                  alt={featuredSupimaProduct.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-zinc-700/50 hover:border-amber-400/50 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Variation 1 - Top right */}
              <div className="absolute -top-8 -right-8 z-20 transform hover:scale-110 transition-transform duration-300">
                <button
                  onClick={() => setCurrentFeaturedImage(1)}
                  className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25 ${
                    currentFeaturedImage === 1 ? 'border-amber-400 shadow-lg shadow-amber-400/25' : 'border-zinc-600'
                  }`}
                >
                  <img
                    src={featuredSupimaProduct.images[1]}
                    alt="Variation 1"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>

              {/* Variation 2 - Bottom left */}
              <div className="absolute -bottom-12 -left-12 z-20 transform hover:scale-110 transition-transform duration-300">
                <button
                  onClick={() => setCurrentFeaturedImage(2)}
                  className={`w-32 h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25 ${
                    currentFeaturedImage === 2 ? 'border-amber-400 shadow-lg shadow-amber-400/25' : 'border-zinc-600'
                  }`}
                >
                  <img
                    src={featuredSupimaProduct.images[2]}
                    alt="Variation 2"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-400/5 rounded-full animate-float -z-10"></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-400/30 rounded-full animate-float stagger-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hoodie Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 relative overflow-hidden">
        {/* Moving banner */}
        <div className="absolute top-8 left-0 w-full overflow-hidden">
          <div className="flex items-center h-12 whitespace-nowrap">
            <div className="flex items-center space-x-12 text-amber-400/60 font-bold text-lg animate-scroll-banner-seamless">
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
            </div>
            <div className="flex items-center space-x-12 text-amber-400/60 font-bold text-lg animate-scroll-banner-seamless">
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
              <span className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>FEATURED PRODUCT</span>
                <Star className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16">
          <div className="text-center scroll-animate">
            {/* Large hoodie image */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-zinc-700/50 hover:border-amber-400/30 transition-all duration-500 group">
                <img
                  src="https://images.pexels.com/photos/8532604/pexels-photo-8532604.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium Hoodie"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-amber-400/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-amber-400/20 rounded-full animate-float stagger-2"></div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto">
              <p className="text-sm md:text-base text-stone-400 leading-relaxed font-light tracking-wide">
                Breza's hoodie is crafted from premium cotton-blend for ultimate comfort and durability. Its vibrant, music-inspired graphic design pops with crisp, lasting quality, making it the go-to piece for bold, urban style.
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-12">
              <button
                onClick={() => {
                  setSelectedCategory('Premium Hoodies');
                  handleNavigateToProducts();
                }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-900 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center space-x-3 mx-auto hover-glow group"
              >
                <span>Explore Hoodies</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Oversized Unisex Tees Section */}
      <OversizedTeesSection 
        oversizedTees={oversizedTees}
        setSelectedProduct={setSelectedProduct}
        setSelectedCategory={setSelectedCategory}
        handleNavigateToProducts={handleNavigateToProducts}
      />

      <Footer />

      {/* Modals */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}

// Separate component for the oversized tees section that uses useCart
function OversizedTeesSection({ oversizedTees, setSelectedProduct, setSelectedCategory, handleNavigateToProducts }: any) {
  const { dispatch } = useCart();

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-amber-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-amber-400/5 rounded-full animate-float stagger-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 scroll-animate">
          <div className="flex items-center justify-center mb-6">
            <Shirt className="h-8 w-8 text-amber-400 mr-3 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 animate-gradient-shift">
              Oversized Unisex Tees
            </h2>
            <Shirt className="h-8 w-8 text-amber-400 ml-3 animate-float stagger-2" />
          </div>
          <p className="text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Comfort meets style in our premium oversized collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {oversizedTees.map((product, index) => {
            return (
              <div 
                key={product.id}
                className={`scroll-animate hover-lift stagger-${index + 1}`}
              >
                {/* Enhanced Aesthetic Product Card */}
                <div 
                  className="group cursor-pointer transition-all duration-700 hover:-translate-y-3"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Card Container with Blur Effect */}
                  <div className="relative overflow-hidden rounded-3xl backdrop-blur-md bg-zinc-800/30 hover:bg-zinc-800/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/10">
                    {/* Large Product Image */}
                    <div className="relative overflow-hidden h-96">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                      
                      {/* Sale Badge */}
                      {product.originalPrice && (
                        <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </div>
                      )}

                      {/* Heart Button */}
                      <button className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110">
                        <Heart className="h-5 w-5 text-white hover:text-red-400 transition-colors" />
                      </button>
                    </div>

                    {/* Minimal Product Info */}
                    <div className="p-6 space-y-4">
                      {/* Product Name - Minimal */}
                      <h3 className="text-lg font-bold text-stone-200 group-hover:text-amber-400 transition-colors line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-stone-200 group-hover:text-amber-400 transition-colors">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-stone-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch({ type: 'ADD_ITEM', payload: product });
                        }}
                        className="w-full bg-amber-500/90 hover:bg-amber-500 backdrop-blur-sm text-zinc-900 py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 group/btn font-semibold text-sm uppercase tracking-wide"
                      >
                        <ShoppingCart className="h-4 w-4 group-hover/btn:animate-bounce" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-animate">
          <button
            onClick={() => {
              setSelectedCategory('Oversized T-Shirts');
              handleNavigateToProducts();
            }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-900 px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center space-x-3 mx-auto hover-glow group"
          >
            <span>View All Oversized Tees</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;