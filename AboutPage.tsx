import React from 'react';
import { Users, Heart, Zap, Award, Target, Globe, Sparkles, Music, Palette, Shirt } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 border border-amber-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-amber-400/15 rounded-full animate-float stagger-3"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-amber-400/10 rounded-full animate-float stagger-2"></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-animate">
            <div className="flex items-center justify-center mb-8">
              <Music className="h-12 w-12 text-amber-400 mr-4 animate-float" />
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 animate-gradient-shift">
                About Breza
              </h1>
              <Palette className="h-12 w-12 text-amber-400 ml-4 animate-float stagger-2" />
            </div>
            <p className="text-xl md:text-2xl text-stone-300 max-w-4xl mx-auto leading-relaxed font-light">
              Where music meets fashion, and creativity knows no bounds
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-zinc-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl font-bold text-stone-200 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  Born from the intersection of music and street culture, Breza emerged as a vision to create 
                  wearable art that speaks to the soul of every creative individual. Our journey began with a 
                  simple belief: clothing should be more than fabric—it should be a canvas for self-expression.
                </p>
                <p>
                  Inspired by the raw energy of underground music scenes and the authentic spirit of street art, 
                  we craft each piece to tell a story. From our signature acid-washed oversized tees to our 
                  premium hoodies, every design carries the pulse of creativity and the grit of urban culture.
                </p>
                <p>
                  Today, Breza stands as a bridge between artistic expression and everyday wear, connecting 
                  a global community of creatives who dare to wear their stories boldly.
                </p>
              </div>
            </div>
            
            <div className="scroll-animate stagger-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Breza Story"
                  className="w-full rounded-2xl shadow-2xl border border-zinc-700/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 mb-6 animate-gradient-shift">
              Our Values
            </h2>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Community',
                description: 'Building connections through shared passion for music, art, and authentic self-expression.'
              },
              {
                icon: Heart,
                title: 'Authenticity',
                description: 'Every design tells a genuine story, crafted with integrity and respect for creative culture.'
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Pushing boundaries in design and sustainability while honoring streetwear traditions.'
              },
              {
                icon: Award,
                title: 'Quality',
                description: 'Premium materials and meticulous craftsmanship in every piece we create.'
              },
              {
                icon: Target,
                title: 'Purpose',
                description: 'Empowering individuals to express their unique identity through wearable art.'
              },
              {
                icon: Globe,
                title: 'Sustainability',
                description: 'Committed to responsible practices that respect our planet and future generations.'
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className={`bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/50 hover:border-amber-400/30 transition-all duration-500 hover:transform hover:scale-105 scroll-animate stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-amber-400/10 rounded-full border border-amber-400/20 mb-6 mx-auto animate-float">
                  <value.icon className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-stone-200 mb-4 text-center">{value.title}</h3>
                <p className="text-stone-400 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-animate">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="h-10 w-10 text-amber-400 mr-4 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold text-stone-200">Our Mission</h2>
              <Sparkles className="h-10 w-10 text-amber-400 ml-4 animate-pulse" />
            </div>
            
            <div className="max-w-4xl mx-auto bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-12 border border-zinc-700/50">
              <p className="text-2xl md:text-3xl text-stone-300 leading-relaxed font-light tracking-wide">
                At Breza, we create wearable art that amplifies your vibe. Inspired by the pulse of music and the grit of street culture, our T-shirts and hoodies are designed to let you wear your story boldly. We're here to empower self-expression, celebrate individuality, and connect a global tribe of creatives through authentic, sustainable style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-stone-200 mb-6">The Creative Force</h2>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              Meet the passionate individuals behind Breza's unique designs and vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Rivera',
                role: 'Creative Director',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Visionary artist with 10+ years in streetwear design and music culture.'
              },
              {
                name: 'Jordan Kim',
                role: 'Head of Design',
                image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Graphic design expert specializing in music-inspired visual storytelling.'
              },
              {
                name: 'Sam Chen',
                role: 'Sustainability Lead',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Environmental advocate ensuring our practices respect the planet.'
              }
            ].map((member, index) => (
              <div 
                key={member.name}
                className={`bg-zinc-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-700/50 hover:border-amber-400/30 transition-all duration-500 hover:transform hover:scale-105 scroll-animate stagger-${index + 1}`}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-200 mb-2">{member.name}</h3>
                  <p className="text-amber-400 font-medium mb-3">{member.role}</p>
                  <p className="text-stone-400 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-zinc-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
          <div className="flex items-center justify-center mb-8">
            <Shirt className="h-12 w-12 text-amber-400 animate-bounce" />
          </div>
          <h2 className="text-4xl font-bold text-stone-200 mb-6">Join the Movement</h2>
          <p className="text-xl text-stone-400 mb-8 leading-relaxed">
            Ready to express your unique style? Explore our collections and find pieces that speak to your creative soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-zinc-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover-glow shadow-2xl">
              Shop Collection
            </button>
            <button className="border-2 border-amber-400/30 hover:border-amber-400 text-stone-200 hover:text-amber-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-amber-400/10 backdrop-blur-sm">
              Follow Our Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};