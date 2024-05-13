import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ErrorAlert1Props {
  onClose: () => void; // onClose 함수의 타입을 명시적으로 정의
  show: boolean;
}

const ErrorAlert1: React.FC<ErrorAlert1Props> = ({ onClose, show }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let intervalRef: NodeJS.Timeout;
    if (show) {
      setIsOpen(true);
      console.log('isOpen:', isOpen);
      intervalRef = setTimeout(() => onClose(), 4000);
    } else {
      timer = setTimeout(() => setIsOpen(false), 600);
    }

    return () => {
      clearInterval(intervalRef);
      clearTimeout(timer);
    };
  }, [show]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`${
        show ? 'animate-fadeIn_opacity' : 'animate-fadeOut_opacity'
      } absolute top-0 mt-5 transform -translate-y-3/4 z-30`}>
      <div className="w-[28rem] h-[6rem] bg-main_active border-[2px] border-black rounded-[16px] shadow-xl flex justify-around items-center">
        <Image src="/icons/error1.svg" alt="error" width={40} height={40} />
        <p className="text-base">
          유효한 키워드와 스타일 1개를 선택하세요. <br />
          키워드는 한글, 숫자 및 쉼표(,)만 입력할 수 있으며
          <br />
          최소 1자, 최대 500자 입니다.
        </p>
        <button onClick={onClose}>
          <Image src="/icons/close.svg" alt="clear" width={15} height={15} className="mb-16 mt-4" />
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert1;
