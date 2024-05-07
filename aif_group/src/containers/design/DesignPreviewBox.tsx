'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const DesignPreviewBox = () => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="w-[27rem] h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl">
      <section className="bg-black rounded-t-[14px] w-full h-[9.9375rem] flex flex-col justify-center items-center mb-10">
        <span className="bg-main_active text-sm w-[4.375rem] h-[1.25rem] rounded-sm mb-2 text-center">
          STEP
          <span className="bg-main_active font-bold"> 03</span>
        </span>
        <p className="text-main_active text-2xl font-bold mb-2">티셔츠 미리보기</p>
        <p className="text-white text-xs">디자인 실력이 대단하시네요!</p>
        <p className="text-white text-xs">패셔너블한 티셔츠가 완성됐어요!</p>
      </section>

      <div className="grid grid-cols-2 w-[5.15rem] ml-80">
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleColorSelect('white')}
            className={`w-8 h-8 rounded-full border overflow-hidden focus:outline-none ${
              selectedColor === 'white' ? 'ring-4 ring-main_active bg-white' : 'bg-none'
            }`}></button>
          <span className="text-sm text-text mt-1">화이트</span>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleColorSelect('black')}
            className={`w-8 h-8 rounded-full border overflow-hidden focus:outline-none bg-black ${
              selectedColor === 'black' ? 'ring-4 ring-main_active bg-black' : 'bg-none'
            }`}></button>
          <span className="text-sm text-text mt-1">블랙</span>
        </div>
      </div>

      <section className="relative flex justify-center items-center">
        <Image src="/icons/arrow_left.svg" alt="T-shirt" width={50} height={50} objectFit="cover" priority />
        <Image
          src="/icons/누끼_블랙티셔츠 2.svg"
          alt="T-shirt"
          width={344.02}
          height={366}
          objectFit="cover"
          priority
        />
        <Image
          src="/icons/이미지샘플_타이거01.svg"
          alt="Tiger"
          width={126}
          height={126}
          objectFit="cover"
          className="absolute"
        />
        <Image src="/icons/arrow_right.svg" alt="T-shirt" width={50} height={50} objectFit="cover" priority />
      </section>
      <div className="w-[15rem] h-[2.5rem] mt-[3.7rem] mx-[6.1875rem] flex justify-between">
        <button
          className="w-[15rem] h-full text-btn_text border-btn_border border-[1px] rounded-[4px] hover:bg-main_active hover:border-none hover:text-black"
          onClick={() => router.push('/design/feedback')}>
          다운로드
        </button>
      </div>
    </div>
  );
};

export default DesignPreviewBox;
