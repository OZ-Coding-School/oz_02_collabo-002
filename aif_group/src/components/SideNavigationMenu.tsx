import useMoveScroll from '@/hooks/useMoveScroll';
import Image from 'next/image';
import { useEffect } from 'react';

export default function SideNavigationMenu({ setShowSideMenu }: { setShowSideMenu: () => void }) {
  const { element: aboutRef, onMoveToElement: moveToAbout } = useMoveScroll();
  const { element: aiRef, onMoveToElement: moveToAi } = useMoveScroll();
  const { element: howRef, onMoveToElement: moveToHow } = useMoveScroll();

  useEffect(() => {
    aboutRef.current = document.querySelector('#about');
    aiRef.current = document.querySelector('#ai');
    howRef.current = document.querySelector('#how');
  }, [aboutRef, aiRef, howRef]);

  const handleMoveToScroll = (moveTo: () => void) => {
    moveTo();
    setShowSideMenu();
  };

  return (
    <section className="w-full h-screen absolute top-0 right-0 z-20">
      <div className="w-full h-full bg-black opacity-50 absolute top-0" onClick={setShowSideMenu}></div>
      <div className="w-1/2 h-full bg-black absolute right-0 flex flex-col justify-start items-start space-y-9 pl-9 pt-24 animate-fadeIn_sideMenu xm:pl-6">
        <button className="mb-12" onClick={setShowSideMenu}>
          <Image alt="close" src={'/icons/close_icon_mint.svg'} width={32} height={32} className="w-8 h-8" />
        </button>
        <button className="flex justify-start items-center ml-0.5" onClick={() => handleMoveToScroll(moveToAbout)}>
          <Image alt="about-icon" src={'/icons/about_icon.svg'} width={28} height={28} className="w-7 h-7" />
          <div className="text-main_active text-xl ml-3 xm:text-base">About</div>
        </button>
        <button className="flex justify-start items-center" onClick={() => handleMoveToScroll(moveToHow)}>
          <Image
            alt="about-icon"
            src={'/icons/question_icon.svg'}
            width={30.4}
            height={30.4}
            className="w-[1.9rem] h-[1.9rem]"
          />
          <div className="text-main_active text-xl ml-3 xm:text-base">사용방법</div>
        </button>
        <button className="flex justify-start items-center ml-[3px]" onClick={() => handleMoveToScroll(moveToAi)}>
          <Image alt="about-icon" src={'/icons/image_icon.svg'} width={28} height={28} className="w-7 h-7" />
          <div className="text-main_active text-xl ml-[11px] xm:text-base">생성 이미지</div>
        </button>
      </div>
    </section>
  );
}
