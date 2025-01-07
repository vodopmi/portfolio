import * as React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';

import { Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const photos_b = [
    "src/assets/pics/1.png",
    "src/assets/pics/2.jpg",
    "src/assets/pics/3.jpg",
    "src/assets/pics/4.png",
    "src/assets/pics/5.jpg",
    "src/assets/pics/7.jpg",
    "src/assets/pics/8.jpg",
    "src/assets/pics/10.png",
    "src/assets/pics/11.jpg",
    "src/assets/pics/12.jpg",
    "src/assets/pics/13.jpg",
    "src/assets/pics/14.jpg",
    "src/assets/pics/15.jpg",
    "src/assets/pics/16.jpg",
    "src/assets/pics/17.jpg",
    "src/assets/pics/18.jpg",
    "src/assets/pics/19.jpg",
    "src/assets/pics/20.jpg",
    "src/assets/pics/21.jpg",
    "src/assets/pics/22.jpg",
    "src/assets/pics/23.png",
    "src/assets/pics/25.png",
    "src/assets/pics/28.jpg",
    "src/assets/pics/29.jpg",
    "src/assets/pics/30.png",
    "src/assets/pics/31.jpg",
    "src/assets/pics/32.jpg",
    "src/assets/pics/33.jpg"
    ];

export function Carusel() {
  return (
        <Swiper
          modules={[Mousewheel, Autoplay]}
          loop={true}
          grabCursor={true}
          mousewheel={{
            invert: false,
          }}
        speed={800}
        resistance={true}
        resistanceRatio={0.85}
        
          autoplay={{
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            468: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 4,
            },
            1024: {
              spaceBetween: 15,
              slidesPerView: 5,
            },
            1280: {
              spaceBetween: 24,
              slidesPerView: 7,
            },
          }}
          className="breakpoint"
        >
          {photos_b.map((p, index) => {
            return (
              <SwiperSlide key={index}>
                <img className="object-contain max-w-[45vw] sm:max-w-full placeholder:bg-muted rounded-[1rem] sm:rounded-[1vw]" src={p} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
  );
}

export default Carusel;