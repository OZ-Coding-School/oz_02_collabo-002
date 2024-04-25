import React from 'react';
import Image from 'next/image';

const ErrorAlert1 = () => {
  return (
    <div>
      {/* 경고01 */}
      <div className="w-[26.25rem] h-[5.625rem] bg-main_active border-[2px] border-black rounded-[16px] shadow-xl flex justify-around items-center">
        <Image src="/icons/error1.svg" alt="clear" width={30} height={30} />
        <p className="text-sm">
          유효한 키워드와 스타일 1개를 선택하세요. <br />
          키워드는 한글, 숫자 및 쉼표(,)만 입력할 수 있으며
          <br />
          최소 1자, 최대 500자 입니다.
        </p>
        <button>
          <Image src="/icons/close.svg" alt="clear" width={16} height={16} className="mb-16" />
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert1;
