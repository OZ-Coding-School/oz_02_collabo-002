import React from 'react';
import Image from 'next/image';

const DesignLoadingBox = ({ type }: { type: string }) => {
  return (
    <div
      className={`h-[46.875rem] border-[2px] border-black rounded-[16px] shad0ow-xl bg-black flex justify-center items-center flex-col ${
        type === 'select' ? 'w-[39.75rem]' : 'w-[27rem]'
      }`}>
      <Image src="/icons/Spinner.gif" alt="Loading" width={80} height={80} unoptimized />
      <p className="font-bold text-main_active mt-2">디자인 생성중</p>
    </div>
  );
};

export default DesignLoadingBox;
