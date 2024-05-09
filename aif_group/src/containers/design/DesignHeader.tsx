'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DesignHeader() {
  const [isMouseHoverToQuestion, setIsMouseHoverToQuestion] = useState(false);
  const [isMouseHoverToImage, setIsMouseHoverToImage] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full h-header px-[3rem] py-[2.3125rem] flex justify-center items-center bg-white">
      <div className="lg:w-[78.75rem] flex justify-between items-center">
        <button onClick={() => router.push('/')}>
          <Image alt="logo" src={'/icons/logo.svg'} width={237} height={68} priority />
        </button>
        <div className="w-[49.8125rem] flex justify-end ml-12 mmd:w-[43rem] mmd:ml-5">
          <button
            className="text-xl font-medium w-[13.75rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md flex justify-center items-center mr-10"
            onMouseEnter={() => setIsMouseHoverToQuestion(true)}
            onMouseLeave={() => setIsMouseHoverToQuestion(false)}
            onClick={() => router.push(`/design/howtouse`)}>
            {isMouseHoverToQuestion ? (
              <Image alt="question_icon_hover" src={'/icons/question_icon_hover.svg'} width={37.38} height={31.5} />
            ) : (
              <Image alt="question_icon" src={'/icons/question_icon.svg'} width={37.38} height={31.5} />
            )}
            <div className="group-hover:text-black group-active:text-black ml-4">디자인 하는 방법</div>
          </button>
          <button
            className="text-xl font-medium w-[13.75rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md flex justify-center items-center"
            onMouseEnter={() => setIsMouseHoverToImage(true)}
            onMouseLeave={() => setIsMouseHoverToImage(false)}
            onClick={() => router.push('/design/sampleImage')}>
            {isMouseHoverToImage ? (
              <Image alt="image_icon_hover" src={'/icons/image_icon_hover.svg'} width={34.14} height={32.45} />
            ) : (
              <Image alt="image_icon" src={'/icons/image_icon.svg'} width={34.14} height={32.45} />
            )}
            <div className="group-hover:text-black group-active:text-black ml-4">생성 이미지 샘플</div>
          </button>
        </div>
      </div>
    </div>
  );
}
