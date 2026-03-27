import React from "react";
import { CheckCircle, Timer, Power, Clock, Layout, Crosshair } from "lucide-react";
import banner from "../../assets/Iphone.png";

const HeroBanner = () => {
  return (
    <div className="bg-[#D2D2D2]/10 pt-[80px] min-h-screen">
      <div className="lg:container w-full mx-auto flex flex-col justify-center items-center">
        <div className="">
          <h1 className="text-7xl font-bold text-center pb-4 ">
            We Build{" "}
            <span className="block">
              <span className="text-[#632EE3]">Productive</span> Apps
            </span>
          </h1>
          <p className="text-center max-w-3xl text-[20px]">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center items-center gap-4 py-10">
            <a href="https://play.google.com/store/apps?hl=en" target="_blank" className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Google Play
            </a>

            <a href="https://www.apple.com/app-store/" target="_blank" className="btn bg-[#2F2F2F] text-white border-black">
              <svg
                aria-label="Microsoft logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M96 96H247V247H96" fill="#f24f23"></path>
                <path d="M265 96V247H416V96" fill="#7eba03"></path>
                <path d="M96 265H247V416H96" fill="#3ca4ef"></path>
                <path d="M265 265H416V416H265" fill="#f9ba00"></path>
              </svg>
              App Store
            </a>
          </div>
        </div>

        {/* <div className="relative">
          <img src={banner} alt="" className="" />

          <div className="absolute bg-red-200 w-[80px] h-[80px] rounded-full -left-70 -bottom-1"></div>
        </div> */}
        <div className="relative mt-10 w-full max-w-[400px]">
          {/* Central Phone Image */}
          <img src={banner} alt="Phone Mockup" className="w-full h-auto relative z-10" />

          {/* --- Floating Icons Left Side --- */}
          
          {/* Timer Icon (Top Left) */}
          <div className="absolute top-[10%] -left-10 md:-left-20 z-20 transition-all">
            <div className="bg-[#00bcd4] p-4 rounded-full shadow-lg text-white">
              <Timer size={32} />
            </div>
          </div>

          {/* Check Icon (Middle Left) */}
          <div className="absolute top-[45%] -left-16 md:-left-28 z-20">
            <div className="bg-[#01579b] p-4 rounded-full shadow-lg text-white">
              <CheckCircle size={32} />
            </div>
          </div>

          {/* Power Icon (Bottom Left) */}
          <div className="absolute bottom-[15%] -left-10 md:-left-20 z-20">
            <div className="bg-[#43a047] p-4 rounded-full shadow-lg text-white">
              <Power size={32} />
            </div>
          </div>

          {/* --- Floating Icons Right Side --- */}

          {/* Clock Icon (Top Right) */}
          <div className="absolute top-[15%] -right-10 md:-right-20 z-20">
            <div className="bg-[#ef5350] p-4 rounded-full shadow-lg text-white">
              <Clock size={32} />
            </div>
          </div>

          {/* Trello/Layout Icon (Middle Right) */}
          <div className="absolute top-[50%] -right-16 md:-right-28 z-20">
            <div className="bg-[#1565c0] p-4 rounded-full shadow-lg text-white">
              <Layout size={32} />
            </div>
          </div>

          {/* Target/Crosshair Icon (Bottom Right) */}
          <div className="absolute bottom-[20%] -right-10 md:-right-20 z-20">
            <div className="bg-[#29b6f6] p-4 rounded-full shadow-lg text-white">
              <Crosshair size={32} />
            </div>
          </div>

        </div>
        </div>
    </div>
  );
};

export default HeroBanner;
