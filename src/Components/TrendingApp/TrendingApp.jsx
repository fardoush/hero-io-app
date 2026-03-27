import React, { Suspense } from 'react';
import TrendingAppCard from '../TrendingAppCard/TrendingAppCard';
import { Link } from 'react-router';

const TrendingApp = ({appData}) => {
    
    return (
        <div className="bg-[#F1F5E8]">
             <div className='lg:container w-full mx-auto lg:py-20 md:py-10 py-8 lg:px-0 md:px-10 px-5'>
            <div className="pb-10">
                <h2 className="text-center text-5xl font-bold pb-4">Trending Apps</h2>
                <p className="text-center text-[#627382] text-xl">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
               <Suspense fallback={<span className="loading loading-bars loading-xl z-10 text-9xl">Loading ...</span>}>
                 {
                    appData.slice(0,8).map(data => (<TrendingAppCard data={data} key={data.id}></TrendingAppCard>))
                }
               </Suspense>
            </div>
            <div className="flex justify-center items-center pt-10">
          <Link to="/app" className="btn bg-gradient-to-r from-[#632EE3]/92 to-[#9F62F2]/92 text-white">Show All</Link>
        </div>
        </div>
        </div>
       
    );
};

export default TrendingApp;