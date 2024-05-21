'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SampleModalMobile from '../design/SampleModalMobile';
import useCheckWidth from '@/hooks/useCheckWidth';
import { sampleImageList } from '../../../public';

const SampleImageModal = () => {
  const router = useRouter();
  const [moreShow, setMoreShow] = useState(false);
  const innerWidth = useCheckWidth();

  const sampleImages = sampleImageList;

  return (
    <main className="w-full h-full">
      <div className="h-fit flex flex-col justify-center items-center mt-[3rem] mx-auto sm:w-[80%] xm:mt-4">
        <div className="font-bold text-[3.725rem] text-center mb-4 sm:text-4xl xm:text-3xl">Images</div>
        <div className="text-[1.6rem] sm:text-xl xm:text-lg">AIF 디자인 툴로 생성한 이미지입니다.</div>
        <div className="w-[90%] h-1 border-t border-black mt-[1.6875rem] mb-[2.4rem] sm:w-full"></div>
      </div>
      <div className="w-[90%] flex flex-col justify-center items-center m-auto xm:overflow-auto">
        {innerWidth >= 768 ? (
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-2 max-w-[63.5625rem]">
              {sampleImages.slice(0, 6).map((image, index) => {
                return (
                  <div
                    key={index}
                    className="bg-sample_img_bg max-w-[31.25rem] max-h-[32.25rem] flex justify-center items-center rounded-md relative group p-3">
                    <Image
                      src={image.src}
                      alt={`sample_image_${index + 1}`}
                      width={446.67}
                      height={456}
                      className="object-contain"
                    />
                    <div className="w-full h-full absolute bottom-0 items-end rounded-md bg-gradient-to-b from-[rgba(0,0,0,0)] from-0% via-[rgba(0,0,0,0.28785)] via-[68.5%] to-[rgba(0,0,0,0.57)] to-100% hidden group-hover:flex">
                      <div className="mx-3 mb-2.5 text-lg text-white">{image.keyword}</div>
                    </div>
                  </div>
                );
              })}
              {moreShow &&
                sampleImages.slice(6, 10).map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-sample_img_bg max-w-[31.25rem] max-h-[32.25rem] flex justify-center items-center rounded-md relative group p-3">
                      <Image
                        src={image.src}
                        alt={`sample_image_${index + 1}`}
                        width={446.67}
                        height={456}
                        className="object-contain"
                      />
                      <div className="w-full h-full absolute bottom-0 items-end rounded-md bg-gradient-to-b from-[rgba(0,0,0,0)] from-0% via-[rgba(0,0,0,0.28785)] via-[68.5%] to-[rgba(0,0,0,0.57)] to-100% hidden group-hover:flex">
                        <div className="mx-3 mb-2.5 text-lg text-white">{image.keyword}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {moreShow ? (
              <button
                className="w-[10rem] h-[3.5rem] bg-black group hover:bg-main_active active:bg-main_active flex justify-center items-center rounded-[4px] mt-[5rem] mb-2"
                onClick={() => router.back()}>
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
        ) : (
          <SampleModalMobile />
        )}
      </div>
    </main>
  );
};

export default SampleImageModal;
