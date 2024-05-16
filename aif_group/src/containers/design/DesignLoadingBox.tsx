import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const DesignLoadingBox = ({ type }: { type: string }) => {
  return (
    <div
      className={`h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl bg-black ${
        type === 'select' ? 'w-[39.75rem]' : 'w-[27rem]'
      } animate-fadeIn_box xm:animate-fadeIn_opacity xm:min-h-screen xm:h-full xm:rounded-none`}>
      <div
        className={`${
          type === 'select' ? 'w-[39.75rem]' : 'w-[27rem]'
        } h-full flex flex-col justify-center items-center xm:min-h-screen`}>
        <Image src="/icons/Spinner.gif" alt="Loading" width={80} height={80} unoptimized />
        <p className="font-bold text-main_active mt-2">디자인 생성중</p>
      </div>
    </div>
  );
};

export default DesignLoadingBox;
