import React, { useEffect, useState } from 'react';
import Image from 'next/image';
interface ErrorAlert3Props {
  onClose: () => void;
  show: boolean;
}

const ErrorAlert3: React.FC<ErrorAlert3Props> = ({ onClose, show }) => {
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
      } absolute inset-0 bg-opacity-50 z-20 flex justify-center items-center`}>
      {/* 경고03 */}
      <div className="w-[28rem] h-fit bg-main_active border-[2px] border-black rounded-[16px] shadow-xl relative flex flex-col justify-center items-center">
        <div className="w-[90%] flex justify-center items-center pt-7 relative">
          <Image src="/icons/error2.svg" alt="error" width={40} height={40} className="absolute top-10 left-0" />
          <div className="text-xl ml-10 mr-2">
            <div>
              이미지 무료 생성 횟수가 모두 소진 <br /> 되었습니다.
            </div>
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
