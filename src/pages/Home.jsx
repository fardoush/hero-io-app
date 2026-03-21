import React from 'react';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import TrendingApp from '../Components/TrendingApp/TrendingApp';
import { useLoaderData } from 'react-router';

const Home = () => {
    const appData = useLoaderData();
    console.log(appData);
    return (
        <div>
            <HeroBanner/>
            <TrendingApp appData={appData}/>
        </div>
    );
};

export default Home;