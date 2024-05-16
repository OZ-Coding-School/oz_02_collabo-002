'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ScrollUpButton() {
  // 토글 여부를 결정하는 state 선언
  const [toggleBtn, setToggleBtn] = useState(false);

  // window 객체에서 scrollY 값을 받아옴
  // 어느정도 스크롤이 된건지 판단 후, 토글 여부 결정
  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  // scroll 이벤트 발생 시 이를 감지하고 handleScroll 함수를 실행
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return toggleBtn ? (
    <button className={`fixed bottom-[9.6875rem] right-[1.875rem] animate-up_fadeIn z-10 xm:right-4`} onClick={goToTop}>
      <Image alt="scroll_up" src={'/icons/scroll_up.svg'} width={60} height={60} className="sm:w-10 sm:h-10" />
    </button>
  ) : null;
}
