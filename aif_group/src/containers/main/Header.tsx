'use client';
import useMoveScroll from '@/hooks/useMoveScroll';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // 새로 고침시 스크롤 맨 위
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  const [about, setAbout] = useState<Element | null>(null);
  const [ai, setAi] = useState<Element | null>(null);
  const [how, setHow] = useState<Element | null>(null);

  useEffect(() => {
    const about = document.querySelector('#about');
    setAbout(about);
    const ai = document.querySelector('#ai');
    setAi(ai);
    const how = document.querySelector('#how');
    setHow(how);
  }, []);

  const onMoveToElement1 = () => {
    about?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const onMoveToElement2 = () => {
    ai?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const onMoveToElement3 = () => {
    how?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // const { element, onMoveToElement } = useMoveScroll();

  // const element = useRef<HTMLDivElement>(null));
  // const onMoveToElement = () => {
  //   element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };

  return (
    <div className="w-full h-header px-[3rem] py-[2.3125rem] flex justify-center items-center">
      <div className="w-[78.75rem] flex flex-row justify-between items-center">
        <button onClick={() => router.push('/')}>
          <Image alt="logo" src={'/icons/logo.svg'} width={237} height={68} />
        </button>
        {pathname === '/' ? (
          <div className="w-[49.8125rem] flex justify-between ml-12">
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium" onClick={onMoveToElement1}>
              About
            </button>
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium" onClick={onMoveToElement2}>
              생성 이미지
            </button>
            <button className="text-[1.375rem] text-[#3A3A3A] font-medium" onClick={onMoveToElement3}>
              사용방법
            </button>
            <button className="text-[1.375rem] w-[12.5rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md font-bold">
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
