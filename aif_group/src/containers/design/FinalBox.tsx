import React from 'react';
import Image from 'next/image';

const FinalBox = () => {
  return (
    <div className=" w-[78.625rem] h-[46.5rem] border border-black rounded-[16px] shadow-xl">
      <div className="flex flex-col justify-center items-center mt-36">
        <p className="font-saira text-3xl mb-12">AI Fashionista</p>
        <p className="text-[32px] font-medium mb-16">AIF 서비스를 이용 해 주셔서 감사합니다.</p>
        {/* 라인 이미지 구현 예정*/}
        <p className="text-3xl font-extralight text-center mb-2">
          <span className="font-medium">커스텀 디자인 경험</span>이 즐겁고 유쾌하셨다면
        </p>
        <p className="text-3xl font-extralight text-center mb-14">
          <span className="font-medium">친구에게 공유</span>해주세요!
        </p>
        <div>
          <button className="rounded-sm border-none pr-2">
            <Image src="/icons/kakao.svg" alt="카카오톡" width={500} height={300} className="w-full h-full" />
            <span className="text-btn_text text-xs">카카오톡</span>
          </button>
          <button className="rounded-sm border-none pl-2">
            <Image src="/icons/공유.svg" alt="공유" width={500} height={300} className="w-full h-full" />
            <span className="text-btn_text text-xs">링크공유</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalBox;
