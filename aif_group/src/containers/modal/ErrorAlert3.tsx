import React, { useEffect, useState } from 'react';
import Image from 'next/image';
interface ErrorAlert3Props {
  onClose: () => void;
  show: boolean;
}

const ErrorAlert3: React.FC<ErrorAlert3Props> = ({ onClose, show }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timerIsOpen: NodeJS.Timeout;
    let timerShow: NodeJS.Timeout;
    if (show) {
      setIsOpen(true);
      timerShow = setTimeout(() => onClose(), 10000);
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
      } absolute mt-5 z-20 flex justify-center items-center w-full`}>
      <div className="w-[28rem] h-fit bg-main_active border-[2px] border-black rounded-[16px] shadow-xl relative flex flex-col justify-center items-center xm:w-[92%]">
        <div className="w-[90%] flex justify-around items-start pt-8 relative xm:pt-11 space-x-2">
          <Image src="/icons/error2.svg" alt="error" width={40} height={40} className="pt-2" />
          <div className="text-xl ml-10 mr-2">
            <div>이미지 무료 생성 횟수가 모두 소진 되었습니다.</div>
            <div className="text-base text-center mt-3 mb-4">생성된 이미지 중 최대 3개 선택 가능합니다.</div>
          </div>
        </div>
        <button className="absolute top-5 right-5" onClick={onClose}>
          <Image src="/icons/close.svg" alt="clear" width={15} height={15} />
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert3;
