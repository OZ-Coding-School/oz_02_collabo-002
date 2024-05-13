import React from 'react';
import Image from 'next/image';

interface ErrorAlert2Props {
  onClose: () => void;
}

const ErrorAlert2: React.FC<ErrorAlert2Props> = ({ onClose }) => {
  return (
    <div>
      <div className="relative w-[28rem] h-fit bg-main_active border-[2px] border-black rounded-[16px] shadow-xl">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <Image src="/icons/close.svg" alt="clear" width={15} height={15} />
        </button>
        <div className="flex justify-evenly items-center text-center pt-9 pb-2">
          <Image src="/icons/error2.svg" alt="error icon" width={40} height={40} />
          <p className="text-xl">
            무료 이미지 생성은 <span className="font-bold">1회</span> 남았습니다.
            <br />
            <span className="font-bold">새로운 디자인</span>을 진행하시겠습니까?
          </p>
        </div>

        <div className="text-base">
          <p className="text-center px-4 break-keep">
            새로운 디자인을 생성하여도 이전에 생성된 이미지는 그대로 유지됩니다.
          </p>
          <div className="flex justify-between mt-3 border-t border-black">
            <button
              onClick={onClose}
              className="text-lg text-main_active bg-black border-r border-main_active hover:bg-main_active hover:text-black w-[50%] h-[3.25rem] rounded-bl-[14px]">
              아니요
            </button>
            <button
              onClick={() => {
                onClose();
              }}
              className="text-lg text-main_active bg-black hover:bg-main_active hover:text-black w-[50%] h-[3.25rem] rounded-br-[14px]">
              네, 다시 생성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert2;
