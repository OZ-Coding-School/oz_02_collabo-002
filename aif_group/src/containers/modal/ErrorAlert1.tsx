import React from 'react';
import Image from 'next/image';

interface ErrorAlert1Props {
  onClose: () => void; // onClose 함수의 타입을 명시적으로 정의
  show: boolean;
}

const ErrorAlert1: React.FC<ErrorAlert1Props> = ({ onClose, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      {/* 경고01 */}
      <div className="w-[26.25rem] h-[5.625rem] bg-main_active border-[2px] border-black rounded-[16px] shadow-xl flex justify-around items-center">
        <Image src="/icons/error1.svg" alt="error" width={30} height={30} />
        <p className="text-sm">
          유효한 키워드와 스타일 1개를 선택하세요. <br />
          키워드는 한글, 숫자 및 쉼표(,)만 입력할 수 있으며
          <br />
          최소 1자, 최대 500자 입니다.
        </p>
        <button onClick={onClose}>
          <Image src="/icons/close.svg" alt="clear" width={10} height={10} className="mb-16 mt-4" />
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert1;
