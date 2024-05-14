'use client';
import useCheckWidth from '@/hooks/useCheckWidth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function HowToCustomModal() {
  const router = useRouter();
  const innerWidth = useCheckWidth();

  return (
    <main className="w-full h-full">
      <div className="flex flex-col justify-center items-center mt-[3rem] mx-auto sm:w-[80%] xm:mt-4">
        <div className="font-bold text-[3.725rem] text-center mb-4 sm:text-4xl xm:text-3xl">How to Custom</div>
        <div className="text-[1.6rem] sm:text-xl xm:text-lg">AIF 디자인 툴 사용 방법입니다.</div>
        <div className="w-full h-1 border-t border-black mt-[1.6875rem] mb-[2.6rem] sm:w-full"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {innerWidth >= 768 ? (
          <div className="flex flex-col justify-center items-center">
            <div className="w-[3.625rem] h-[1.75rem] text-xl text-main_active bg-black flex justify-center items-center leading-[102.8%] rounded-md tracking-tighter">
              STEP
            </div>
            <div className="w-[3.4375rem] h-[2.8rem] flex justify-center font-black text-[2.625rem] mb-[1.625rem] leading-[102.8%]">
              01
            </div>
            <Image
              alt="how_to_custom_step1"
              src={'/images/how_to_custom_step1.svg'}
              width={1017}
              height={788}
              priority
            />
          </div>
        ) : (
          <div>
            <Image
              alt="how_to_custom_step1"
              src={'/images/how_to_custom_step1_mobile.svg'}
              width={1017}
              height={788}
              priority
            />
          </div>
        )}
        {innerWidth >= 768 ? (
          <div className="flex flex-col justify-center items-center">
            <div className="w-[3.625rem] h-[1.75rem] text-xl text-main_active bg-black flex justify-center items-center leading-[102.8%] rounded-md tracking-tighter mt-[4.125rem]">
              STEP
            </div>
            <div className="w-[3.4375rem] h-[2.8rem] flex justify-center items-center font-black text-[2.625rem] mb-[1.625rem] leading-[102.8%] tracking-[-0.02em]">
              02
            </div>
            <Image
              alt="how_to_custom_step2"
              src={'/images/how_to_custom_step2.svg'}
              width={1017}
              height={788}
              priority
            />
          </div>
        ) : (
          <div className="mt-20">
            <Image
              alt="how_to_custom_step2"
              src={'/images/how_to_custom_step2_mobile.svg'}
              width={1017}
              height={788}
              priority
            />
          </div>
        )}
        {innerWidth >= 768 ? (
          <div className="flex flex-col justify-center items-center">
            <div className="w-[3.625rem] h-[1.75rem] text-xl text-main_active bg-black flex justify-center items-center leading-[102.8%] rounded-md tracking-tighter mt-[4.125rem]">
              STEP
            </div>
            <div className="w-[3.4375rem] h-[2.8rem] flex justify-center font-black text-[2.625rem] mb-[1.625rem] leading-[102.8%] tracking-[-0.02em]">
              03
            </div>
            <Image
              alt="how_to_custom_step3"
              src={'/images/how_to_custom_step3.svg'}
              width={1017}
              height={788}
              priority
            />
          </div>
        ) : (
          <div className="mt-20">
            <Image
              alt="how_to_custom_step3"
              src={'/images/how_to_custom_step3_mobile.svg'}
              width={1017}
              height={788}
              priority
            />
          </div>
        )}
        <button
          className="w-[10rem] h-[3.5rem] bg-black group hover:bg-main_active active:bg-main_active flex justify-center items-center rounded-[4px] mt-[5rem] mb-2 sm:w-30 sm:h-10 sm:mt-14 xm:w-28"
          onClick={() => router.back()}>
          <div className="font-bold text-[1.4rem] text-main_active group-hover:text-black group-active:text-black sm:text-lg xm:text-base">
            창닫기
          </div>
        </button>
      </div>
    </main>
  );
}

export default HowToCustomModal;
