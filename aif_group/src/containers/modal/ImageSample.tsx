import React from 'react';
import Image from 'next/image';

const ImageSample = () => {
  return (
    <div className="w-[75rem] h-[132.625rem] border border-black rounded-[16px] shadow-xl flex flex-col justify-between">
      <div className="flex justify-between m-10">
        <p className="font-saira text-[40px] font-normal">AI Fashionista</p>
        <button>
          <Image src="/icons/close.svg" alt="clear" width={50} height={50} />
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mb-16">
        <p className="font-bold text-[70px]">Images</p>
        <p className="font-normal text-3xl mb-5">AIF 디자인 툴로 생성한 이미지입니다.</p>
        <Image src="/icons/Line.svg" alt="line" width={1039} height={0} className="mb-10" />
        <div className="justify-center items-center text-center flex">
          <div className="grid grid-cols-2 gap-2 w-[63.5625rem] h-[98.75rem] mt-1">
            <div className="bg-sample_img_bg w-[31.25rem] h-[32.25rem]">
              <Image src="/icons/sample1.svg" alt="line" width={446.67} height={456} className="" />
            </div>
            <div className="bg-sample_img_bg w-[31.25rem] h-[32.25rem]">
              <Image src="/icons/sample1.svg" alt="line" width={446.67} height={456} className="" />
            </div>
            <div className="bg-sample_img_bg w-[31.25rem] h-[32.25rem]">
              <Image src="/icons/sample1.svg" alt="line" width={446.67} height={456} className="" />
            </div>
            <div className="bg-sample_img_bg w-[31.25rem] h-[32.25rem]">
              <Image src="/icons/sample1.svg" alt="line" width={446.67} height={456} className="" />
            </div>
            <div className="bg-sample_img_bg w-[31.25rem] h-[32.25rem]">
              <Image src="/icons/sample1.svg" alt="line" width={446.67} height={456} className="" />
            </div>
            <div className="bg-sample_img_bg w-[31.25rem] h-[32.25rem]">
              <Image src="/icons/sample1.svg" alt="line" width={446.67} height={456} className="" />
            </div>
          </div>
        </div>

        <button className="bg-black text-main_active w-[10.8125rem] h-[3.5625rem] font-bold text-2xl mt-10">
          더보기
        </button>
      </div>
    </div>
  );
};

export default ImageSample;
