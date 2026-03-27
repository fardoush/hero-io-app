import React from 'react';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import TrendingApp from '../Components/TrendingApp/TrendingApp';
import { useLoaderData } from 'react-router';
import StatsSection from '../Components/StateSection/StatsSection';

const Home = () => {
    const appData = useLoaderData();
    console.log(appData);
    return (
        <div>
            <HeroBanner/>
            <StatsSection/>
            <TrendingApp appData={appData}/>
        </div>
    );
};

export default Home;