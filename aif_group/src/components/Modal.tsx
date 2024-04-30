'use client';
import React, { useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const layoutRef = useRef<Element | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleScroll = () => {
    layoutRef.current = document.getElementById('modal');
    const scrollTop = layoutRef.current?.scrollTop;

    if (scrollTop) {
      scrollTop > 100 ? setToggleBtn(true) : setToggleBtn(false);
    }
  };

  const goToTop = () => {
    layoutRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <div
        className="bg-[rgba(0,0,0,0.4)] w-full h-screen fixed top-0 left-0 z-30"
        onClick={() => {
          router.back();
        }}
      />
      <div
        className={`w-[75rem] h-[92%] z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[50px]`}>
        <div className="w-full h-[7rem] flex justify-center items-end fixed top-0">
          <div className="w-[90%] flex justify-between items-center mb-[1rem]">
            <div className="font-light font-saira text-[2rem] leading-[80%] tracking-[-0.002em]">AI Fashionista</div>
            <button onClick={() => router.back()} className="p-3">
              <Image alt="close_icon" src={'/icons/close.svg'} width={25} height={25} />
            </button>
          </div>
        </div>
        <div
          className="overflow-auto w-full h-[calc(100%-9.5rem)] fixed bottom-10 flex justify-center"
          id="modal"
          onScroll={handleScroll}>
          {children}
        </div>

        {toggleBtn && (
          <button className={`fixed bottom-[6rem] right-[2.8rem] animate-up_fadeIn z-10`} onClick={goToTop}>
            <Image alt="scroll_up" src={'/icons/scroll_up.svg'} width={40} height={40} />
          </button>
        )}
      </div>
    </main>
  );
};

export default Modal;
