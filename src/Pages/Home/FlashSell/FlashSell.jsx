import React, { useEffect, useState } from 'react';


const FlashSell = () => {
    const [flashData, setFlashData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/flash-sell')
        .then(res=> res.json())
        .then(data=> setFlashData(data))
    },[])

    return (
        <div>
            <h1 className='ml-5 font-semibold text-2xl mt-20'>Flash Sell</h1>
            <div className='bg-gray-100 md:mx-5 mx-5 mb-10 pb-10'>
                <div className='flex items-center justify-between p-4'>
                <h2 className='text-pink-500  font-semibold text-xl'>On Sell Now</h2>
                <button className="btn bg-pink-500 hover:bg-pink-500 text-white rounded-none">Shope more</button>
                </div>
                <hr />
                <div className='grid grid-cols-1 md:gap-4 gap-20 md:grid-cols-6 pt-3'>
                    {
                        flashData.map(flash=> 
                          <div className='hover:bg-white hover:shadow-md hover:p-2 h-60' key={flash._id}>
                            <img src={flash.image} alt="" />
                            <h1 className='text-gray-600 ml-2'>{flash.productTitle}</h1>
                            <p className='text-pink-600 ml-3'>${flash.price}</p>
                          </div>  
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default FlashSell;
