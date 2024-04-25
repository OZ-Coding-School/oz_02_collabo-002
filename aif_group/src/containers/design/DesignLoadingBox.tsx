import React from 'react';
import Image from 'next/image';

const DesignLoadingBox = () => {
  return (
    <div className="w-[39.75rem]  h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl bg-black flex justify-center items-center">
      <Image src="/icons/Spinner.gif" alt="Loading" width={80} height={80} />
      <p className="font-bold text-main_active mt-2">디자인 생성중</p>
    </div>
  );
};

export default DesignLoadingBox;
