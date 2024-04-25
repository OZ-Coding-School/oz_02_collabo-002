import React from 'react';
import Image from 'next/image';

const InputAlert = () => {
  return (
    <div className=" w-[43.75rem] h-[21.25rem] border border-black rounded-[16px] shadow-xl">
      <div className="relative">
        <button className="absolute top-4 right-4">
          <Image src="/icons/close.svg" alt="clear" width={21} height={21} />
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mt-11">
        <p className="bg-main_active text-[28px] font-bold px-2 mb-3">이메일 주소를 입력해주세요.</p>
        <p className="text-lg mb-5">
          <span className="font-bold">이메일주소</span> 등록 시 이미지를{' '}
          <span className="font-bold">최대 8개 무료로 생성</span>할 수 있습니다.
        </p>
        <p className="text-xs text-btn_text mb-3">
          &bull; 이메일 주소를 입력하면 AI이미지와 티셔츠 이미지를 다운로드할 수 있습니다.
          <br /> &bull; 개인정보 이용에 동의하십니까? (미동의시 서비스 이용에 제한이 있습니다)&nbsp;
          <input type="checkbox" />
        </p>
        <input
          type="email"
          placeholder="&nbsp;&nbsp;이메일주소를 입력해주세요."
          className="bg-gray-100 placeholder-[#79DDCB] rounded-md w-[24.625rem] h-[2.5rem] text-[15px] mb-5"
        />
        <button className="bg-main_active w-[15rem] h-[2.5rem] rounded-md font-medium">디자인 시작하기</button>
      </div>
    </div>
  );
};

export default InputAlert;
