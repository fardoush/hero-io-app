import React from "react";
import { useLoaderData } from "react-router";
import TrendingAppCard from "../TrendingAppCard/TrendingAppCard";

const Apps = () => {
    const appData = useLoaderData();

  return (
    <div className="bg-[#D9D9D9]">
      <div className="lg:container w-full mx-auto py-20">
        <div className="">
          <h2 className="text-center text-4xl font-bold">Our All Applications</h2>
          <p className="text-center">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center py-10">
          <h4 className="text-bold text-black text-2xl font-semibold">(132) Apps Found</h4>

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
            <input type="search" required placeholder="Search" />
          </label>
        </div>

<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
    {
appData.map(data => <TrendingAppCard data={data} key={data.id}></TrendingAppCard> )
    }
</div>
      </div>
    </div>
  );
};

export default Apps;
