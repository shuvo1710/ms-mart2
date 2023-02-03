import React, { useRef, useState } from "react";
import './Banner.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Navigation } from "swiper";
// import required modules


const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="banner-container">
                        <div className="banner-content">

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;






