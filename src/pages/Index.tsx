
import React, { useState } from 'react';
import Header from '@/components/Header';
import BahamasFacts from '@/components/BahamasFacts';
import MusicPlayer from '@/components/ui-custom/MusicPlayer';
import MusicInfoModal from '@/components/MusicInfoModal';
import GlassCard from '@/components/ui-custom/GlassCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showMusicModal, setShowMusicModal] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicMuted, setMusicMuted] = useState(false);

  const startMusic = () => {
    setMusicStarted(true);
    setMusicMuted(false);
  };

  const muteMusic = () => {
    setMusicMuted(true);
    setMusicStarted(true);
  };

  const hideInitialInfo = () => {
    setShowMusicModal(false);
  };

  return (
    <div className="min-h-screen">
      <MusicInfoModal 
        open={showMusicModal} 
        onOpenChange={setShowMusicModal}
        onStartMusic={startMusic}
        onMuteMusic={muteMusic}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1964&auto=format&fit=crop" 
            alt="Bahamas beach" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bahamas-blue/30 to-bahamas-blue/10"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 text-balance drop-shadow-md">
              Welcome to the Bahamas!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance drop-shadow">
              Experience the breathtaking beauty and rich culture of the Bahamas, a paradise in the Caribbean.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-bahamas-coral hover:bg-bahamas-coral/90 text-white font-semibold px-6"
              >
                Explore Islands
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/20 font-semibold px-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block glass px-3 py-1 rounded-full mb-3 bg-bahamas-turquoise/10">
                <span className="text-sm font-medium text-bahamas-turquoise">About the Bahamas</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                A Paradise of 700 Islands and Cays
              </h2>
              <p className="text-slate-600 mb-4">
                The Bahamas, officially the Commonwealth of The Bahamas, is a country within the Lucayan Archipelago of the West Indies in the Atlantic Ocean. It consists of more than 700 islands, cays, and islets, with about 30 inhabited islands.
              </p>
              <p className="text-slate-600 mb-6">
                With crystal clear turquoise waters, pristine white-sand beaches, and a rich cultural heritage, the Bahamas offers visitors an unforgettable experience. From swimming with pigs in Exuma to exploring the vibrant streets of Nassau, there's something for everyone in this Caribbean paradise.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-bahamas-blue/10 rounded-full px-4 py-1 text-sm text-bahamas-blue">
                  700+ Islands
                </div>
                <div className="bg-bahamas-turquoise/10 rounded-full px-4 py-1 text-sm text-bahamas-turquoise">
                  Crystal Waters
                </div>
                <div className="bg-bahamas-coral/10 rounded-full px-4 py-1 text-sm text-bahamas-coral">
                  Rich Culture
                </div>
                <div className="bg-bahamas-sunshine/10 rounded-full px-4 py-1 text-sm text-amber-600">
                  Perfect Weather
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=2070&auto=format&fit=crop" 
                alt="Bahamas beach scene" 
                className="rounded-xl shadow-xl w-full h-auto relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-bahamas-sunshine rounded-full opacity-20 z-0"></div>
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-bahamas-turquoise rounded-full opacity-10 z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Facts Section */}
      <BahamasFacts />
      
      {/* Attractions Section */}
      <section id="attractions" className="py-20 bg-bahamas-blue/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block glass px-3 py-1 rounded-full mb-3 bg-white">
              <span className="text-sm font-medium text-bahamas-blue">Top Attractions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
              Must-Visit Places in the Bahamas
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Discover breathtaking beaches, swimming pigs, vibrant coral reefs, and rich cultural experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Exuma's Swimming Pigs",
                image: "https://images.unsplash.com/photo-1550440400-75eb4761c430?q=80&w=1776&auto=format&fit=crop",
                description: "Visit the famous swimming pigs at Big Major Cay in the Exuma islands."
              },
              {
                title: "Nassau's Paradise Island",
                image: "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?q=80&w=1778&auto=format&fit=crop",
                description: "Explore the Atlantis resort and beautiful beaches of Paradise Island."
              },
              {
                title: "Pink Sands Beach",
                image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1974&auto=format&fit=crop",
                description: "Experience the unique pink sand beaches of Harbour Island."
              },
              {
                title: "Dean's Blue Hole",
                image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop",
                description: "Dive into one of the deepest blue holes in the world on Long Island."
              },
              {
                title: "Junkanoo Festival",
                image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1287&auto=format&fit=crop",
                description: "Experience the vibrant cultural celebration with music, dance, and colorful costumes."
              },
              {
                title: "Andros Barrier Reef",
                image: "https://images.unsplash.com/photo-1551648340-ccf88ac67f4d?q=80&w=1780&auto=format&fit=crop",
                description: "Explore the third-largest barrier reef in the world, perfect for snorkeling and diving."
              }
            ].map((attraction, index) => (
              <GlassCard 
                key={index} 
                className="overflow-hidden hover:-translate-y-1 transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 text-bahamas-blue">{attraction.title}</h3>
                  <p className="text-slate-600">{attraction.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block glass px-3 py-1 rounded-full mb-3 bg-bahamas-sunshine/10">
              <span className="text-sm font-medium text-amber-600">Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
              Stunning Views of the Bahamas
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              A visual journey through the breathtaking landscapes and vibrant culture.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1527519135413-1e146b553f4f?q=80&w=1978&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1610566763909-a13bde95069f?q=80&w=1940&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1593359291621-027435ef9d07?q=80&w=1970&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1505881402582-c5bc11054f91?q=80&w=1936&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?q=80&w=1926&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1584464457459-ca5dfeb3c1d3?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1523164339388-9035404c1c97?q=80&w=1936&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581269868622-fe3ed5eb81c4?q=80&w=1935&auto=format&fit=crop"
            ].map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Bahamas scenic view ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">Bahamas Beauty</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-bahamas-blue text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-display font-bold">Bahamas Explorer</span>
              <p className="mt-2 text-white/70 max-w-md">
                A student project created for Midtown Academy's eighth grade class. Learn about the beautiful islands of the Bahamas.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                {["Facebook", "Instagram", "Twitter"].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} Bahamas Explorer. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Music Player */}
      {musicStarted && (
        <MusicPlayer hideInitialInfo={hideInitialInfo} />
      )}
    </div>
  );
};

export default Index;
