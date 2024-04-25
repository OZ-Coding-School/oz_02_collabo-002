import React from 'react';
import Image from 'next/image';

const ErrorAlert3 = () => {
  return (
    <div>
      <div className="relative w-[26.25rem] h-[8.125rem] bg-main_active border-[2px] border-black rounded-[16px] shadow-xl">
        <button className="absolute top-2 right-2">
          <Image src="/icons/close.svg" alt="clear" width={16} height={16} />
        </button>

        <div className="absolute inset-0 flex flex-col justify-center ">
          <div className="flex justify-evenly items-center text-start">
            <Image src="/icons/error2.svg" alt="error icon" width={30} height={30} />
            <p className="text-xl">
              이미지 무료 생성 횟수가 모두 소진
              <br />
              되었습니다.
            </p>
          </div>
          <p className="text-xs text-center">생성된 이미지 중 최대 3개 선택 가능합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert3;
