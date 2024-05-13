'use client';
import useMoveScroll from '@/hooks/useMoveScroll';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [innerWidth, setInnerWidth] = useState(1220);
  const router = useRouter();
  const pathname = usePathname();

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

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [innerWidth]);

  return (
    <div className="w-full h-header px-[3rem] py-[2.3125rem] flex justify-center items-center mmd:px-8">
      <div className="lg:w-[78.75rem] w-full flex justify-between items-center">
        {innerWidth >= 768 && (
          <button
            onClick={() => {
              pathname === '/' ? router.refresh() : router.replace('/');
            }}
            className="w-[237px] h-[68px] relative">
            <Image alt="logo" src={'/icons/logo.svg'} fill priority />
          </button>
        )}
        {pathname === '/' ? (
          <div className="w-[49.8125rem] flex justify-between ml-12 md:w-[38rem] mmd:ml-5">
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium mmd:text-[1.3rem]" onClick={moveToAbout}>
              About
            </button>
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium mmd:text-[1.3rem]" onClick={moveToAi}>
              생성 이미지
            </button>
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium mmd:text-[1.3rem]" onClick={moveToHow}>
              사용방법
            </button>
            <button
              className="text-[1.375rem] w-[12.5rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md font-bold"
              onClick={() => router.push('/design')}>
              <div className="group-hover:text-black group-active:text-black">디자인 시작하기</div>
            </button>
          </div>
        ) : (
          <div className="w-[49.8125rem] flex justify-end ml-12 md:w-[38rem] mmd:w-[28rem] mmd:ml-7 sm:!w-full sm:mr-10">
            {innerWidth >= 768 ? (
              <button
                className="text-[1.375rem] w-[12.5rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md font-bold"
                onClick={() => router.push('/')}>
                <div className="group-hover:text-black group-active:text-black">Home</div>
              </button>
            ) : (
              <button className="w-[12.5rem] h-[3.25rem] flex justify-end" onClick={() => router.push('/')}>
                <Image alt="home_btn" src={'/icons/home_icon.svg'} width={40} height={40} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
