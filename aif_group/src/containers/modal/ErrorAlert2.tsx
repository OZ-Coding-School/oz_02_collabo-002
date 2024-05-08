import React from 'react';
import Image from 'next/image';

interface ErrorAlert2Props {
  onClose: () => void;
}

const ErrorAlert2: React.FC<ErrorAlert2Props> = ({ onClose }) => {
  return (
    <div>
      <div className="relative w-[26.25rem] h-[11.25rem] bg-main_active border-[2px] border-black rounded-[16px] shadow-xl">
        <button className="absolute top-3 right-4" onClick={onClose}>
          <Image src="/icons/close.svg" alt="clear" width={10} height={10} />
        </button>
        <div className="flex justify-evenly items-center text-center pt-8 pb-2">
          <Image src="/icons/error2.svg" alt="error icon" width={30} height={30} />
          <p className="text-xl">
            무료 이미지 생성은 <span className="font-bold">1회</span> 남았습니다.
            <br />
            <span className="font-bold">새로운 디자인</span>을 진행하시겠습니까?
          </p>
        </div>

        <div className="">
          <p className="text-xs text-center">새로운 디자인을 생성하여도 이전에 생성된 이미지는 그대로 유지됩니다.</p>
          <div className="flex justify-between space-x-0.5 mt-3 hover:border-t hover:border-black">
            <button
              onClick={onClose}
              className="text-main_active bg-black hover:bg-main_active hover:text-black w-[13.07rem] h-[3.25rem] rounded-bl-[14px]">
              아니요
            </button>
            <button
              onClick={onClose}
              className="text-main_active bg-black hover:bg-main_active hover:text-black w-[13.07rem] h-[3.25rem] rounded-br-[14px]">
              네, 다시 생성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert2;
