'use client';
import useMoveScroll from '@/hooks/useMoveScroll';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Header() {
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

  return (
    <div className="w-full h-header px-[3rem] py-[2.3125rem] flex justify-center items-center">
      <div className="w-[78.75rem] flex justify-between items-center ">
        <button onClick={() => router.push('/')}>
          <Image alt="logo" src={'/icons/logo.svg'} width={237} height={68} priority />
        </button>
        {pathname === '/' ? (
          <div className="w-[49.8125rem] flex justify-between ml-12">
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium" onClick={moveToAbout}>
              About
            </button>
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium" onClick={moveToAi}>
              생성 이미지
            </button>
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium" onClick={moveToHow}>
              사용방법
            </button>
            <button
              className="text-[1.375rem] w-[12.5rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md font-bold"
              onClick={() => router.push('/design')}>
              <div className="group-hover:text-black group-active:text-black">디자인 시작하기</div>
            </button>
          </div>
        ) : (
          <div className="w-[49.8125rem] flex justify-end ml-12">
            <button
              className="text-[1.375rem] w-[12.5rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md font-bold"
              onClick={() => router.push('/')}>
              <div className="group-hover:text-black group-active:text-black">Home</div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
