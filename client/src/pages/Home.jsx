import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className={`relative h-screen ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-[url('./assets/bg13.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="relative mb-8">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-rose-100 via-yellow-200 to-rose-100 bg-clip-text text-transparent animate-shimmer">
                  Muskan
                </span>
              </span>
              {" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-200 via-rose-100 to-yellow-200 bg-clip-text text-transparent animate-shimmer-reverse">
                  Restaurant
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-rose-300 via-yellow-200 to-rose-300"></span>
              </span>
            </h1>
            <div className="absolute -inset-x-4 -inset-y-4 z-0 opacity-10 bg-gradient-to-r from-rose-500 via-yellow-300 to-rose-500 blur-2xl animate-pulse"></div>
          </div>
            
          <span className="text-2xl md:text-3xl font-light mt-6 block text-gray-200">
            Experience culinary artistry
          </span>
          
          <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-100 leading-relaxed font-light">
            Where contemporary cuisine meets elegant atmosphere. 
            Every dish tells a story of flavor and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <Link to="/signin">
              <button className="group relative px-10 py-4 text-base font-light overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-orange-600 transition-all duration-300 group-hover:from-amber-500 group-hover:to-orange-500"></div>
                <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative text-white tracking-wider">RESERVE A TABLE</span>
              </button>
            </Link>
            <Link to="/about">
              <button className="group relative px-10 py-4 text-base font-light overflow-hidden">
                <div className="absolute inset-0 w-full h-full border-2 border-amber-400/50 transition-all duration-300 group-hover:border-amber-400/80"></div>
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative text-white tracking-wider">EXPLORE MENU</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 md:grid-cols-3 gap-0 bg-black/80">
          <div className="flex items-center p-8 text-white border-b md:border-b-0 md:border-r border-white/10">
            <div>
              <h3 className="font-light text-lg tracking-wide mb-2">DINING HOURS</h3>
              <p className="text-sm text-gray-300 font-light">Mon - Sun | 11:00 AM - 10:00 PM</p>
            </div>
          </div>
          
          <div className="flex items-center p-8 text-white border-b md:border-b-0 md:border-r border-white/10">
            <div>
              <h3 className="font-light text-lg tracking-wide mb-2">LOCATION</h3>
              <p className="text-sm text-gray-300 font-light">123 Culinary Avenue, Gourmet City</p>
            </div>
          </div>
          
          <div className="flex items-center p-8 text-white">
            <div>
              <h3 className="font-light text-lg tracking-wide mb-2">RESERVATIONS</h3>
              <p className="text-sm text-gray-300 font-light">+91 7367052678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
