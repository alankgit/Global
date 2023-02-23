import React from "react";
import { Data } from "./Data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Hero = () => {
  return (
    <div>
      <div>
        <Carousel showThumbs={false}>
          {Data.map(img => (
            <img src={img.img} />
          ))}
        </Carousel>
      </div>
      <div>
        <h1 className='text-[40px] ml-10 mt-4 mb-0 font-bold'>
          Wedding Season
        </h1>

        <div className='grid grid-cols-4 gap-5 mt-3 ml-10 mr-10 '>
          {Data.map(prot => (
            <div className='bg-black text-white rounded-lg'>
              <img src={prot.img} alt='' className='rounded-lg' />
              <h1 className='mt-2 ml-2 text-[24px] font-semibold text-center'>
                {prot.name}
              </h1>
              <hr />
              <p className='ml-2 text-gray-200 text-[18px] text-center '>
                {prot.desc.slice(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
