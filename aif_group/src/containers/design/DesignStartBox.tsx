'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useCheckWidth from '@/hooks/useCheckWidth';

interface DesignStartBoxProps {
  onCreateDesign: () => void;
  setUserInput: Dispatch<
    SetStateAction<{
      keyword: string;
      style: string;
    }>
  >;
  userInput: { keyword: string; style: string };
  onError: () => void;
  step: number;
  disabled: boolean;
  goNext: () => void;
}

const styles = [
  { id: '팝아트', src: '/icons/팝아트.png' },
  { id: '데코', src: '/icons/Ellipse 154.svg' },
  { id: '그라피티', src: '/icons/Ellipse 155.svg' },
  { id: '키덜트', src: '/icons/Ellipse 156.svg' },
  { id: '라인아트', src: '/icons/Ellipse 157.svg' },
  { id: '스테인글라스', src: '/icons/Ellipse 158.svg' },
  { id: '빈티지포스터', src: '/icons/Ellipse 159.svg' },
  { id: '엠블럼', src: '/icons/Ellipse 160.svg' },
  { id: '애니메이션', src: '/icons/Ellipse 161.svg' },
  { id: '픽셀아트', src: '/icons/픽셀아트.png' },
];

const DesignStartBox: React.FC<DesignStartBoxProps> = ({
  onCreateDesign,
  setUserInput,
  userInput,
  onError,
  step,
  disabled,
  goNext,
}) => {
  const innerWidth = useCheckWidth();
  const router = useRouter();

  const handleStyleSelect = (styleId: string) => {
    setUserInput(state => ({ ...state, style: styleId }));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(state => ({ ...state, keyword: e.target.value }));
  };

  const handleCreateDesign = () => {
    const specialChar = /[~!@\#$%^&*\()\-=+_'\;<>\/.\`:\"\\[\]?|{}]/gi;
    const notFullKorean = /[ㄱ-ㅎㅏ-ㅣ]/gi;
    if (!userInput.keyword.trim() || !userInput.style) {
      console.log(userInput.keyword);
      onError();
      return;
    } else if (userInput.keyword.match(specialChar) || userInput.keyword.match(notFullKorean)) {
      onError();
      return;
    }
    onCreateDesign();
  };

  return (
    <div className="w-[27rem] h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl xm:w-full xm:min-h-screen xm:h-full xm:rounded-none xm:border-none">
      <div className="w-full h-[9.9375rem] bg-black rounded-t-[14px] flex flex-col items-center relative xm:py-5 xm:h-[40%] xm:rounded-none">
        {innerWidth < 490 && (
          <div>
            {step >= 2 && (
              <div className="absolute right-4 top-7 flex flex-col justify-start items-center">
                <button className="flex flex-col justify-center items-center space-y-1" onClick={goNext}>
                  <Image alt="go-back" src={'/icons/next_icon.svg'} width={36} height={36} />
                </button>
              </div>
            )}
          </div>
        )}
        <div className="bg-main_active flex mt-[1.9375rem] w-[4.375rem] h-[1.25rem] justify-center items-center rounded-[3px]">
          <p>STEP</p>
          <p className="font-black ml-[2px]">01</p>
        </div>
        <h2 className="text-main_active h-[3.125rem] flex items-center text-[1.5rem] font-bold">디자인 하기</h2>
        <div className="text-[0.8rem] flex flex-col items-center">
          <p className="text-white">텍스트를 디자인으로 생성합니다.</p>
          <p className="text-white">상상을 현실로 만들어보세요.</p>
        </div>
        {innerWidth < 490 && (
          <div className="absolute right-5 bottom-4 flex flex-col justify-start items-center">
            <button
              className="flex flex-col justify-center items-center"
              onClick={() => router.push(`/design/howtouse`)}>
              <Image alt="how-to-custom" src={'/icons/question_icon.svg'} width={28} height={28} />
              <div className="text-main_active text-[0.8rem]">사용법</div>
            </button>
            <button
              className="flex flex-col justify-center items-center mt-1"
              onClick={() => router.push('/design/sampleImage')}>
              <Image alt="sample-image" src={'/icons/image_icon.svg'} width={28} height={28} />
              <div className="text-main_active text-[0.8rem]">샘플</div>
            </button>
          </div>
        )}
      </div>
      <div className="w-full xm:h-[60%] flex flex-col justify-center items-center mt-9">
        <section className="w-full">
          <div className="ml-4">
            <span className="text-lg font-bold">키워드</span>
            <span className="text-text text-base ml-2"> 한글, 영어, 숫자를 &quot;,&quot; 로 구분하여 작성하세요.</span>
          </div>
          <input
            type="text"
            placeholder="ex)테니스, 호랑이, 여성1명, 얼굴..."
            className="placeholder-[#92EADA] bg-gray-100 text-[15px] px-2 w-[23.625rem] mt-1 h-[2.5rem] mx-4 mb-7 rounded-sm disabled:text-btn_border xm:w-[90%]"
            onChange={handleChangeInput}
            value={userInput.keyword}
            disabled={disabled}
          />
        </section>
        <section className="w-full">
          <div className="ml-4">
            <span className="text-lg font-bold">스타일</span>
            <span className="text-text text-base ml-2"> 원하는 스타일 1개를 선택 해 주세요.</span>
          </div>

          <div className="w-full justify-center items-center text-center flex scroll-pt-11">
            <div className="grid grid-cols-4 w-[23.75rem] h-[20.75rem] mt-2">
              {styles.map(style => (
                <div key={style.id} className="flex flex-col items-center w-full">
                  <button
                    onClick={() => handleStyleSelect(style.id)}
                    disabled={disabled}
                    className={`w-20 h-20 rounded-full border overflow-hidden ${
                      userInput.style === style.id ? 'ring-4 ring-main_active' : 'ring-1 ring-[#AFAFAF]'
                    } focus:outline-none xm:w-[70px] xm:h-[70px]`}>
                    <Image src={style.src} alt={style.id} width={500} height={300} className="object-cover" />
                  </button>
                  <span className="text-sm text-text mt-1">{style.id}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[15rem] h-[2.5rem] my-[1.03rem] mx-auto flex justify-center items-center xm:w-full">
            <button
              onClick={handleCreateDesign}
              disabled={disabled}
              className={`w-[15rem] h-full border-btn_border border-[1px] rounded-[4px] hover:bg-main_active hover:border-none text-btn_text hover:text-black ${
                disabled ? 'opacity-50 cursor-not-allowed bg-main_active' : ''
              }`}>
              디자인 생성하기
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignStartBox;
