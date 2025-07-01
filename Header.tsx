import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onCartClick: () => void;
  onAuthClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigateHome?: () => void;
  onNavigateToProducts?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToAbout?: () => void;
  currentPage?: 'home' | 'products' | 'categories' | 'about';
}

export const Header: React.FC<HeaderProps> = ({ 
  onCartClick, 
  onAuthClick, 
  searchQuery, 
  onSearchChange,
  onNavigateHome,
  onNavigateToProducts,
  onNavigateToCategories,
  onNavigateToAbout,
  currentPage = 'home'
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useCart();
  const { user, logout } = useAuth();

  const cartItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavClick = (section: string) => {
    if (section === 'home' && onNavigateHome) {
      onNavigateHome();
    } else if (section === 'products' && onNavigateToProducts) {
      onNavigateToProducts();
    } else if (section === 'categories' && onNavigateToCategories) {
      onNavigateToCategories();
    } else if (section === 'about' && onNavigateToAbout) {
      onNavigateToAbout();
    }
  };

  return (
    <header className="bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center -ml-2">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex-shrink-0 group"
            >
              <img 
                src="/LOGO.png" 
                alt="Breza" 
                className="h-6 w-auto filter brightness-0 invert transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 ml-12">
            <button 
              onClick={() => handleNavClick('home')}
              className={`transition-all duration-300 font-medium relative group animate-slide-up ${
                currentPage === 'home' ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('products')}
              className={`transition-all duration-300 font-medium relative group animate-slide-up ${
                currentPage === 'products' ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('categories')}
              className={`transition-all duration-300 font-medium relative group animate-slide-up ${
                currentPage === 'categories' ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`transition-all duration-300 font-medium relative group animate-slide-up ${
                currentPage === 'about' ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center max-w-xs flex-1 mx-12">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-white/60 group-focus-within:text-amber-400 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-9 pr-3 py-1.5 text-sm border border-white/30 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 mr-2">
            <button 
              onClick={onCartClick}
              className="p-2 text-white hover:text-amber-400 transition-all duration-300 relative group hover:scale-110"
            >
              <ShoppingCart className="h-6 w-6 group-hover:animate-bounce" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-zinc-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-bounce-in group-hover:animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-white hover:text-amber-400 transition-all duration-300 hover:scale-105">
                  <User className="h-6 w-6" />
                  <span className="text-sm font-medium">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-zinc-800/95 backdrop-blur-md rounded-lg shadow-xl border border-zinc-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {['Profile', 'Orders'].map((item, index) => (
                      <a 
                        key={item}
                        href={`#${item.toLowerCase()}`} 
                        className="block px-4 py-2 text-sm text-stone-300 hover:bg-zinc-700/50 hover:text-amber-400 transition-all duration-200 animate-slide-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {item}
                      </a>
                    ))}
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-stone-300 hover:bg-zinc-700/50 hover:text-amber-400 transition-all duration-200"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 group"
              >
                <span className="group-hover:animate-pulse">Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white transition-all duration-300 hover:scale-110"
            >
              {isMobileMenuOpen ? 
                <X className="h-6 w-6 animate-bounce-in" /> : 
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/60 group-focus-within:text-amber-400 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-white/30 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/10 animate-slide-up">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => {
                handleNavClick('home');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 transition-all duration-300 hover:bg-white/5 rounded animate-slide-up ${
                currentPage === 'home' ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                handleNavClick('products');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 transition-all duration-300 hover:bg-white/5 rounded animate-slide-up ${
                currentPage === 'products' ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              Products
            </button>
            <button 
              onClick={() => {
                handleNavClick('categories');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 transition-all duration-300 hover:bg-white/5 rounded animate-slide-up ${
                currentPage === 'categories' ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              Categories
            </button>
            <button 
              onClick={() => {
                handleNavClick('about');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 transition-all duration-300 hover:bg-white/5 rounded animate-slide-up ${
                currentPage === 'about' ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              About
            </button>
            
            <div className="border-t border-white/10 pt-2 mt-2">
              <div className="flex items-center justify-between px-3 py-2">
                <button 
                  onClick={() => {
                    onCartClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart ({cartItemCount})</span>
                </button>
                
                {user ? (
                  <button 
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }} 
                    className="text-amber-400 font-medium hover:text-amber-300 transition-colors"
                  >
                    Sign Out
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      onAuthClick();
                      setIsMobileMenuOpen(false);
                    }} 
                    className="text-amber-400 font-medium hover:text-amber-300 transition-colors"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};