import React from 'react';
import TrendingAppCard from '../TrendingAppCard/TrendingAppCard';

const TrendingApp = ({appData}) => {
    
    return (
        <div className='lg:container w-full mx-auto py-16 '>
            <div className="pb-10">
                <h2 className="text-center text-5xl font-bold pb-4">Trending Apps</h2>
                <p className="text-center text-[#627382] text-xl">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20">
                {
                    appData.map(data => (<TrendingAppCard data={data} key={data.id}></TrendingAppCard>))
                }
            </div>
        </div>
    );
};

export default TrendingApp;