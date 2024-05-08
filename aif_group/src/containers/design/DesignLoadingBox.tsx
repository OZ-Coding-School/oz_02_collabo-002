import React from 'react';
import Image from 'next/image';

const DesignLoadingBox = ({ type }: { type: string }) => {
  return (
    <div
      className={`h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl bg-black ${
        type === 'select' ? 'w-[39.75rem]' : 'w-[27rem]'
      }`}>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Image src="/icons/Spinner.gif" alt="Loading" width={80} height={80} unoptimized />
        <p className="font-bold text-main_active mt-2">디자인 생성중</p>
      </div>
    </div>
  );
};

export default DesignLoadingBox;
