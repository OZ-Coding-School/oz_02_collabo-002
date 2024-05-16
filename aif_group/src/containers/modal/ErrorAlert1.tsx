import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ErrorAlert1Props {
  onClose: () => void; // onClose 함수의 타입을 명시적으로 정의
  show: boolean;
}

const ErrorAlert1: React.FC<ErrorAlert1Props> = ({ onClose, show }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timerIsOpen: NodeJS.Timeout;
    let timerShow: NodeJS.Timeout;
    if (show) {
      setIsOpen(true);
      timerShow = setTimeout(() => onClose(), 3000);
    } else {
      timerIsOpen = setTimeout(() => setIsOpen(false), 500);
    }

    return () => {
      clearTimeout(timerIsOpen);
      clearTimeout(timerShow);
    };
  }, [show]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`${
        show ? 'animate-fadeIn_opacity' : 'animate-fadeOut_opacity'
      } absolute top-0 mt-5 z-30 flex justify-center w-full`}>
      <div className="w-[28rem] h-[7rem] bg-main_active border-[2px] border-black rounded-[16px] shadow-xl px-2 space-x-2 flex justify-around items-center xm:w-[92%]">
        <Image src="/icons/error1.svg" alt="error" width={40} height={40} />
        <p className="w-[76%] text-base xm:text-sm">
          유효한 키워드와 스타일 1개를 선택하세요. <br />
          키워드는 한글, 숫자 및 쉼표(,)만 입력할 수 있으며 최소 1자, 최대 500자 입니다.
        </p>
        <button onClick={onClose}>
          <Image src="/icons/close.svg" alt="clear" width={15} height={15} className="mb-16 mt-4" />
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert1;
