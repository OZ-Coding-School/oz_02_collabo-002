'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SampleImageModal = () => {
  const router = useRouter();
  const [moreShow, setMoreShow] = useState(false);

  let sampleImageList = [
    {
      src: '/images/sample_img_1.png',
      keyword: '키워드1',
    },
    {
      src: '/images/sample_img_2.png',
      keyword: '키워드2',
    },
    {
      src: '/images/sample_img_3.png',
      keyword: '키워드3',
    },
    {
      src: '/images/sample_img_4.png',
      keyword: '키워드4',
    },
    {
      src: '/images/sample_img_5.png',
      keyword: '키워드5',
    },
    {
      src: '/images/sample_img_6.png',
      keyword: '키워드6',
    },
    {
      src: '/images/sample_img_7.png',
      keyword: '키워드7',
    },
    {
      src: '/images/sample_img_8.png',
      keyword: '키워드8',
    },
    {
      src: '/images/sample_img_9.png',
      keyword: '키워드9',
    },
    {
      src: '/images/sample_img_10.png',
      keyword: '키워드10',
    },
  ];

  return (
    <main>
      <div className="flex flex-col justify-start items-center mt-[3rem]">
        <div className="font-bold text-[3.725rem]">Images</div>
        <div className="text-[1.6rem]">AIF 디자인 툴로 생성한 이미지입니다.</div>
        <div className="w-[65rem] h-1 border-t border-black mt-[1.6875rem] mb-[2.6rem]"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-2 w-[63.5625rem]">
          {sampleImageList.slice(0, 6).map((image, index) => {
            return (
              <div
                key={index}
                className="bg-sample_img_bg w-[31.25rem] h-[32.25rem] flex justify-center items-center rounded-md relative group">
                <Image src={image.src} alt={`sample_image_${index + 1}`} width={446.67} height={456} className="" />
                <div className="w-[31.25rem] h-[32.25rem] absolute bottom-0 items-end rounded-md bg-gradient-to-b from-[rgba(0,0,0,0)] from-0% via-[rgba(0,0,0,0.28785)] via-[68.5%] to-[rgba(0,0,0,0.57)] to-100% hidden group-hover:flex">
                  <div className="ml-4 mb-2.5 text-lg text-white">{image.keyword}</div>
                </div>
              </div>
            );
          })}
          {moreShow &&
            sampleImageList.slice(6, 10).map((image, index) => {
              return (
                <div
                  key={index}
                  className="bg-sample_img_bg w-[31.25rem] h-[32.25rem] flex justify-center items-center rounded-md relative group">
                  <Image src={image.src} alt={`sample_image_${index + 1}`} width={446.67} height={456} className="" />
                  <div className="w-[31.25rem] h-[32.25rem] absolute bottom-0 items-end rounded-md bg-gradient-to-b from-[rgba(0,0,0,0)] from-0% via-[rgba(0,0,0,0.28785)] via-[68.5%] to-[rgba(0,0,0,0.57)] to-100% hidden group-hover:flex">
                    <div className="ml-4 mb-2.5 text-lg text-white">{image.keyword}</div>
                  </div>
                </div>
              );
            })}
        </div>
        {moreShow ? (
          <button
            className="w-[10rem] h-[3.5rem] bg-black group hover:bg-main_active active:bg-main_active flex justify-center items-center rounded-[4px] mt-[5rem] mb-2"
            onClick={() => router.replace('/design')}>
            <div className='font-bold text-[1.4rem] text-main_active group-hover:text-black group-active:text-black"'>
              창닫기
            </div>
          </button>
        ) : (
          <button
            className="w-[10rem] h-[3.5rem] bg-black group hover:bg-main_active active:bg-main_active flex justify-center items-center rounded-[4px] mt-[5rem] mb-2"
            onClick={() => setMoreShow(true)}>
            <div className='font-bold text-[1.4rem] text-main_active group-hover:text-black group-active:text-black"'>
              더보기
            </div>
          </button>
        )}
      </div>
    </main>
  );
};

export default SampleImageModal;
