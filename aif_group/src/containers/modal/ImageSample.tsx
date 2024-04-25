import React from 'react';
import Image from 'next/image';

const ImageSample = () => {
  return (
    <div className="w-[75rem] h-[132.625rem] relative border border-black rounded-[16px] shadow-xl">
      <div className="flex justify-between">
        <p className="font-saira text-[40px]">AI Fashionista</p>
        <button className=" top-2 right-2">
          <Image src="/icons/close.svg" alt="clear" width={50} height={50} />
        </button>
      </div>
    </div>
  );
};

export default ImageSample;
