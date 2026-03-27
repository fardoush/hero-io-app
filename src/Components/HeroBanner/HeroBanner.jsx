import React from "react";
import { CheckCircle, Timer, Power, Clock, Layout, Crosshair } from "lucide-react";
import banner from "../../assets/Iphone.png";

const HeroBanner = () => {
  return (
    <div className="bg-[#f3f4f6] pt-[60px] md:pt-[80px] min-h-screen overflow-hidden px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Text Content */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We Build <br className="md:hidden" />
            <span className="text-[#632EE3]">Productive</span> Apps
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-xl text-gray-600 leading-relaxed">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all font-medium">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
              <span>Google Play</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-xl shadow-sm hover:bg-black transition-all font-medium">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="App Store" className="h-5" />
              <span>App Store</span>
            </a>
          </div>
        </div>

        {/* --- Image & Floating Icons Container --- */}
        <div className="relative w-full max-w-[320px] md:max-w-[450px] mt-10 mx-auto">
          
          {/* Main Phone Image */}
          <img 
            src={banner} 
            alt="Phone Mockup" 
            className="w-full h-auto relative z-10 drop-shadow-2xl" 
          />

          {/* --- Left Side Icons --- */}
          {/* Timer */}
          <div className="absolute top-[15%] left-[-15%] md:left-[-20%] z-20 animate-bounce-slow">
            <div className="bg-[#00bcd4] p-2 md:p-4 rounded-full shadow-xl text-white">
              <Timer className="w-5 h-5 md:w-8 md:h-8" />
            </div>
          </div>

          {/* Check */}
          <div className="absolute top-[45%] left-[-22%] md:left-[-30%] z-20 animate-pulse">
            <div className="bg-[#01579b] p-2 md:p-4 rounded-full shadow-xl text-white">
              <CheckCircle className="w-5 h-5 md:w-8 md:h-8" />
            </div>
          </div>

          {/* Power */}
          <div className="absolute bottom-[20%] left-[-15%] md:left-[-20%] z-20">
            <div className="bg-[#43a047] p-2 md:p-4 rounded-full shadow-xl text-white">
              <Power className="w-5 h-5 md:w-8 md:h-8" />
            </div>
          </div>

          {/* --- Right Side Icons --- */}
          {/* Clock */}
          <div className="absolute top-[20%] right-[-15%] md:right-[-20%] z-20">
            <div className="bg-[#ef5350] p-2 md:p-4 rounded-full shadow-xl text-white">
              <Clock className="w-5 h-5 md:w-8 md:h-8" />
            </div>
          </div>

          {/* Layout/Trello */}
          <div className="absolute top-[50%] right-[-22%] md:right-[-30%] z-20">
            <div className="bg-[#1565c0] p-2 md:p-4 rounded-full shadow-xl text-white">
              <Layout className="w-5 h-5 md:w-8 md:h-8" />
            </div>
          </div>

          {/* Target */}
          <div className="absolute bottom-[25%] right-[-15%] md:right-[-20%] z-20">
            <div className="bg-[#29b6f6] p-2 md:p-4 rounded-full shadow-xl text-white">
              <Crosshair className="w-5 h-5 md:w-8 md:h-8" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;