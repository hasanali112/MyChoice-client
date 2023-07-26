import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../../../assets/b4.jpg'
import banner2 from '../../../../assets/b3.jpg'
import banner3 from '../../../../assets/b2.jpg'
import banner4 from '../../../../assets/b1.jpg'


const Banner = () => {
    return (
        <div className='md:pt-28 pt-32 md:w-full w-96 ml-0'>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
      >
        <SwiperSlide>
            <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner4} alt=""/>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;