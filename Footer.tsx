import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-stone-200 border-t border-zinc-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent animate-shimmer"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 scroll-animate">
            <h3 className="text-2xl font-bold group cursor-default">
              Breza<span className="text-amber-400 group-hover:animate-pulse">.</span>
            </h3>
            <p className="text-stone-400 leading-relaxed hover:text-stone-300 transition-colors">
              Your premier destination for high-quality streetwear with exceptional service and unbeatable style.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-stone-400 hover:text-amber-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 scroll-animate stagger-2">
            <h4 className="text-lg font-semibold text-amber-400 hover:animate-pulse cursor-default">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'Categories', 'About Us'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-stone-400 hover:text-stone-200 transition-all duration-300 hover:translate-x-2 inline-block animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4 scroll-animate stagger-3">
            <h4 className="text-lg font-semibold text-amber-400 hover:animate-pulse cursor-default">Customer Service</h4>
            <ul className="space-y-2">
              {['Contact Us', 'Shipping Info', 'Returns & Exchanges', 'Size Guide'].map((item, index) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-stone-400 hover:text-stone-200 transition-all duration-300 hover:translate-x-2 inline-block animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 scroll-animate stagger-4">
            <h4 className="text-lg font-semibold text-amber-400 hover:animate-pulse cursor-default">Contact Info</h4>
            <div className="space-y-3">
              {[
                { Icon: Mail, text: 'hello@breza.com' },
                { Icon: Phone, text: '+1 (555) 123-4567' },
                { Icon: MapPin, text: '123 Commerce Street\nNew York, NY 10001' }
              ].map(({ Icon, text }, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5 text-amber-400 mt-0.5 group-hover:animate-bounce" />
                  <span className="text-stone-400 group-hover:text-stone-200 transition-colors whitespace-pre-line">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 scroll-animate">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm hover:text-stone-300 transition-colors">
              © 2024 Breza. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-stone-400 hover:text-stone-200 text-sm transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};