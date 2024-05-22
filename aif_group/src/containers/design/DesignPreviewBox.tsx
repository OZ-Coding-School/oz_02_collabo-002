'use client';
import React, { useEffect, useState } from 'react';
import Image, { default as NextImage } from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import drawSelectedImage from '@/utils/drawSelectedImage';
import ThumbnailImage from '@/components/ThumbnailImage';
import useCheckWidth from '@/hooks/useCheckWidth';
import { RootState } from '@/states/store';
import { setDownloadFileUrl } from '@/states/imageFileSlice';
import promiseDrawSelectedImage from '@/utils/promiseDrawSelectedImage';

interface DesignPreviewBoxProps {
  goBack: () => void;
}

const DesignPreviewBox: React.FC<DesignPreviewBoxProps> = ({ goBack }) => {
  const [selectedColorArray, setSelectedColorArray] = useState<string[]>(['white', 'white', 'white']);
  const [currentId, setCurrentId] = useState(0);
  const router = useRouter();
  const innerWidth = useCheckWidth();

  const email = useAppSelector(state => state.email.email);
  const selectImage = useAppSelector((state: RootState) => state.ref);
  const dispatch = useAppDispatch();

  const tShirtImage = {
    white: '/images/t-shirt_white.png',
    black: '/images/t-shirt_black.png',
  };

  const setTshirtColor = (color: string) => {
    let copyColorArray = [...selectedColorArray];
    copyColorArray[currentId] = color;
    setSelectedColorArray(copyColorArray);
  };

  return (
    <div className="w-[27rem] h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl xm:w-full xm:min-h-screen xm:h-full xm:rounded-none xm:border-none">
      <div className="w-full h-[9.9375rem] bg-black rounded-t-[14px] flex flex-col items-center relative xm:py-5 xm:h-[40%] xm:rounded-none">
        {innerWidth < 490 && (
          <div>
            <div className="absolute left-4 top-7 flex flex-col justify-start items-center">
              <button className="flex flex-col justify-center items-center space-y-1" onClick={goBack}>
                <Image alt="go-back" src={'/icons/back_icon.svg'} width={36} height={36} />
              </button>
            </div>
          </div>
        )}
        <div className="bg-main_active flex mt-[1.9375rem] w-[4.375rem] h-[1.25rem] justify-center items-center rounded-[3px]">
          <p>STEP</p>
          <p className="font-black ml-[2px]">03</p>
        </div>
        <h2 className="text-main_active h-[3.125rem] flex items-center text-[1.5rem] font-bold">티셔츠 미리보기</h2>
        <div className="text-[0.8rem] flex flex-col items-center">
          <p className="text-white">디자인 실력이 대단하시네요!</p>
          <p className="text-white">패셔너블한 티셔츠가 완성됐어요!</p>
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
      {/* 티셔츠 색상 버튼 */}
      <div className="w-full xm:h-[60%] flex flex-col justify-center items-center mt-9">
        <div className="w-full flex justify-end mr-6">
          <div className="grid grid-cols-2 w-[6rem]">
            <div className="flex flex-col items-center">
              <button
                className={`w-8 h-8 rounded-full border border-text overflow-hidden focus:outline-none ${
                  selectedColorArray[currentId] === 'white' ? 'ring ring-main_active' : ''
                }`}
                onClick={() => setTshirtColor('white')}></button>
              <span className="text-sm text-text mt-1">화이트</span>
            </div>
            <div className="flex flex-col items-center">
              <button
                className={`w-8 h-8 rounded-full border border-text overflow-hidden focus:outline-none bg-black ${
                  selectedColorArray[currentId] === 'black' ? 'ring ring-main_active' : ''
                }`}
                onClick={() => setTshirtColor('black')}></button>
              <span className="text-sm text-text mt-1">블랙</span>
            </div>
          </div>
        </div>
        <section className="w-full relative flex justify-center items-center mx-2">
          <Swiper
            slidesPerView={1}
            simulateTouch={true}
            grabCursor={true}
            centeredSlides={true}
            onSlideChange={swiper => {
              setCurrentId(swiper.snapIndex);
            }}
            observer={true}
            navigation={true}
            pagination={{
              enabled: true,
              clickable: true,
              bulletClass: 'custom_bullet',
              bulletActiveClass: 'custom_bullet_active',
              renderBullet: function (index, className) {
                return '<div class="' + className + '"></div>';
              },
            }}
            modules={[Navigation, Pagination]}
            className="px-4 w-full h-[415px]">
            {selectImage?.map((item, index) => {
              return (
                <SwiperSlide key={index} className={'flex justify-center items-center absolute top-0'}>
                  <div className="w-[330px] h-[340px] relative -top-5 left-[50%] translate-x-[-50%] flex justify-center items-center">
                    <NextImage
                      src={selectedColorArray[index] === 'white' ? tShirtImage.white : tShirtImage.black}
                      alt="T-shirt"
                      fill
                      className="drop-shadow-tShirt"
                    />
                    <NextImage src={item.img_url} alt="T-shirt" priority width={125} height={125} className="z-10" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="w-full h-[4.8rem] flex justify-center items-center absolute bottom-2">
            {selectImage?.map((item, index) => {
              return (
                <ThumbnailImage
                  key={index}
                  tShirtImage={selectedColorArray[index] === 'white' ? tShirtImage.white : tShirtImage.black}
                  image={item.img_url}
                  isSelected={currentId === index ? true : false}
                />
              );
            })}
          </div>
        </section>
        <div className="w-[15rem] h-[2.5rem] mt-[0.6rem] mx-[6.1875rem] flex justify-between">
          <button
            className="w-[15rem] h-full text-btn_text border-btn_border border-[1px] rounded-[4px] hover:bg-main_active hover:border-none hover:text-black"
            onClick={() => {
              promiseDrawSelectedImage({
                selectImage,
                selectedColorArray,
                tShirtImage,
                addFile: file => dispatch(setDownloadFileUrl(file)),
                email,
              });
              router.push('/design/feedback');
            }}>
            다운로드
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignPreviewBox;
