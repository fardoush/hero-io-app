import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import TrendingAppCard from "../TrendingAppCard/TrendingAppCard";
import NotFound from "../NotFound/NotFound"
import { OrbitProgress } from "react-loading-indicators";

const Apps = () => {
  const appData = useLoaderData();
  const [searchTitle, setSearchTitle] = useState("");

  const filteredApps = appData.filter((app) => app.title.toLowerCase().includes(searchTitle.toLowerCase()))

  return (
    <div className="bg-[#D9D9D9]">
      <div className="lg:container w-full mx-auto lg:py-20 md:py-10 py-8 lg:px-0 md:px-10 px-5">
        <div className="space-y-4">
          <h2 className="text-center text-4xl font-bold">
            Our All Applications
          </h2>
          <p className="text-center">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center py-10 md:flex-nowrap flex-wrap gap-5">
          <h4 className="text-bold text-black text-2xl font-semibold">
            ({appData.length}) Apps Found
          </h4>

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search"  value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)}required placeholder="Search" />
          </label>
        </div>
      

        {filteredApps.length > 0 ? (
          <Suspense fallback={<OrbitProgress variant="track-disc" color="#3a7aec" size="medium" text="" textColor="" />}>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            
              {filteredApps.map((data) => (
              <TrendingAppCard
                data={data}
                key={data.id}
              ></TrendingAppCard>
            ))}
      
          </div>
                </Suspense>
        ) : (
          <NotFound/>
        )}
      </div>
    </div>
  );
};

export default Apps;
