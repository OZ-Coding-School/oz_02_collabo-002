'use client';
import useCheckWidth from '@/hooks/useCheckWidth';
import useMoveScroll from '@/hooks/useMoveScroll';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const innerWidth = useCheckWidth();

  const { element: aboutRef, onMoveToElement: moveToAbout } = useMoveScroll();
  const { element: aiRef, onMoveToElement: moveToAi } = useMoveScroll();
  const { element: howRef, onMoveToElement: moveToHow } = useMoveScroll();

  // 새로 고침시 스크롤 맨 위
  useEffect(() => {
    function pushRefresh() {
      window.scrollTo(0, 0);
    }
    window.addEventListener('beforeunload', pushRefresh);
    return () => {
      window.removeEventListener('beforeunload', pushRefresh);
    };
  }, []);

  useEffect(() => {
    aboutRef.current = document.querySelector('#about');
    aiRef.current = document.querySelector('#ai');
    howRef.current = document.querySelector('#how');
  }, [aboutRef, aiRef, howRef]);

  return (
    <div className="w-full h-header px-[3rem] py-[2.3125rem] flex justify-center items-center mmd:px-8 md:h-[6rem] md:py-6 sm:!h-[4.6rem] sm:!px-4">
      <div className="lg:w-[78.75rem] w-full flex justify-between items-center">
        {innerWidth >= 768 && (
          <button
            onClick={() => {
              pathname === '/' ? router.refresh() : router.replace('/');
            }}
            className="w-[237px] h-[68px] relative md:w-[12rem] md:y-[3rem]">
            <Image alt="logo" src={'/icons/logo.svg'} fill priority />
          </button>
        )}
        {pathname === '/' ? (
          <div className="w-[49.8125rem] flex justify-between ml-12 md:w-[38rem] mmd:ml-8">
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium md:text-[1.2rem]" onClick={moveToAbout}>
              About
            </button>
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium md:text-[1.2rem]" onClick={moveToAi}>
              생성 이미지
            </button>
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium md:text-[1.2rem]" onClick={moveToHow}>
              사용방법
            </button>
            <button
              className="text-[1.375rem] w-[12.5rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md font-bold md:text-[1.2rem] md:w-44 md:h-12"
              onClick={() => router.push('/design')}>
              <div className="group-hover:text-black group-active:text-black">디자인 시작하기</div>
            </button>
          </div>
        ) : (
          <div className="w-[49.8125rem] flex justify-end ml-12 md:w-[38rem] mmd:w-[28rem] sm:!w-full sm:mr-4">
            {innerWidth >= 768 ? (
              <button
                className="text-[1.375rem] w-[12.5rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md font-bold md:text-[1.2rem] md:w-44 md:h-12"
                onClick={() => router.push('/')}>
                <div className="group-hover:text-black group-active:text-black">Home</div>
              </button>
            ) : (
              <button className="w-[2.4rem] h-[2.4rem] flex justify-end" onClick={() => router.push('/')}>
                <Image alt="home_btn" src={'/icons/home_icon.svg'} width={32} height={32} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
