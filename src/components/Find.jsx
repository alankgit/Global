import React from "react";
import { useSelector } from "react-redux";

export const Find = () => {
  const statex = useSelector(state => state.product.more);
  console.log(statex);

  return (
    <div>
      <div>
        <h1 className='text-[40px] ml-10 mt-4 mb-0 font-bold'>
          Wedding Season
        </h1>

        <div className='grid grid-cols-4 gap-5 mt-3 ml-10 mr-10 '>
          {statex.Data.map(prot => (
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
