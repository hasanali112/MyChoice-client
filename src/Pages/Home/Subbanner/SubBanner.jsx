import React from 'react';
import subbanner from '../../../assets/subbanner.jpg'
import subbanner1 from '../../../assets/subbanner1.jpg'

const SubBanner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-6 ml-6 mb-10'>
            <img src={subbanner} alt="" />
            <img src={subbanner1} alt="" />
        </div>
    );
};

export default SubBanner;