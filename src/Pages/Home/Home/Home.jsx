import React from 'react';
import Banner from './Banner/Banner';
import SubCategory from '../Subcategory/SubCategory';
import SubBanner from '../Subbanner/SubBanner';
import FlashSell from '../FlashSell/FlashSell';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubCategory></SubCategory>
            <SubBanner></SubBanner>
            <FlashSell></FlashSell>
        </div>
    );
};

export default Home;