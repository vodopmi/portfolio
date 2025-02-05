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
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/1-w0RIdK2nm1kOkSZHcusG596unCXyjW.png",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/2-GC9iXUdzqWTr4ngzdbnPU00L6eeWB7.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/3-qi8MdC49dSV5Mxz1mIctFA8Ax5zetX.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/4-DIcE2WTQxQncYeJ1guEYTuLu5y0L69.png",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/5-jj9v6RLS7kE6lVXPsXw3PKkJEzzhQv.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/7-Hr5jDCg5aDrmz6ZF7bp55auEuJcquQ.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/8-maqouUocO04Rjf1JKdDF4UeD650oer.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/10-sqWrALKGDucg857zaciNI3fgC7Hodm.png",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/11-to3e4GgkEHqJ2xs5qmkVGRrnpHIN6H.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/12-5o1cuCfmJNfMhSZQ50q8DPKhMRZBFl.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/13-gBYG2AOwRWkEMoYTHCd1b4rhKnIZko.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/14-NpbDiJV7ktjrlye5IT4AjpXupthiId.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/15-pL529OkARqIRomEVU3jCnjg9n88lCF.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/16-SROANZmws4NQ9Shoo8n0wfsRRuUuyY.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/17-a9a15FsrkF2PvDQKEEvEZga2fiSGxk.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/18-xV0FKv0D3nOnnkEn9e3MM4DThlnTUe.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/19-XKrpXSk9SsyAWQHGtIMXMvggxqyUhB.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/20-GdSWDYB2CbmpAAhMo4l2vIRb5kOXAT.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/21-KHatZuWGpEiPzE6auYmpe1uc5Uulto.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/22-XTKBKTl3I4pMzWR9qHSZ2FWCIzExYL.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/23-xSbGoeleoNbXoHwoaycQjJkHGXXW0W.png",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/25-yfNioSsv5geQlyU4x66k7n2lK1s13r.png",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/28-Lh6lbPds6Qy9pOZ87tSwthRsmE1e6E.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/29-zBFRE8pk9amE2TUsEAdgeLyotaoXYN.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/30-qDRTXs35oQFMlIDub04OD104kbhZkI.png",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/31-dS7LMWNBwQSOqbPV4rG6MyqhqIWZaH.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/32-FOZEr1qt0m6YuoRJJY9BSPEzsoDdks.jpg",
    "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/pics/33-n0ut1YWJhgd8TGvKkuH2S2SHK2juV1.jpg"
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