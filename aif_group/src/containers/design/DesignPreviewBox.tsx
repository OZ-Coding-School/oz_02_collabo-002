'use client';
import React, { useEffect, useState } from 'react';
import { default as NextImage } from 'next/image';
import { useRouter } from 'next/navigation';
import useSelectImage from '@/hooks/useSelectImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setImgFileUrl } from '@/states/imageSlice';
import drawSelectedImage from '@/utils/drawSelectedImage';
import ThumbnailImage from '@/components/ThumbnailImage';

const DesignPreviewBox = () => {
  const [selectedColorArray, setSelectedColorArray] = useState<string[]>(['white', 'white', 'white']);
  const [currentId, setCurrentId] = useState(0);
  const [imageFile, setImageFile] = useState<{ imageUrl: string; imageName: string }[]>([]);
  const router = useRouter();
  // const { selectImage } = useSelectImage();
  // console.log(selectImage);
  const selectImage = {
    image: ['/images/aiImage1.png', '/images/aiImage2.png', '/images/aiImage3.png'],
  };

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

  useEffect(() => {
    imageFile.map(image => {
      dispatch(setImgFileUrl(image));
    });
  }, [imageFile]);

  return (
    <div className="w-[27rem] h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl">
      <div className="w-full h-[9.9375rem] bg-black rounded-t-[14px] flex flex-col items-center mb-10">
        <div className="bg-main_active flex mt-[1.9375rem] w-[4.375rem] h-[1.25rem] justify-center items-center rounded-[3px]">
          <p>STEP</p>
          <p className="font-black ml-[2px]">03</p>
        </div>
        <h2 className="text-main_active h-[3.125rem] flex items-center text-[1.5rem] font-bold">티셔츠 미리보기</h2>
        <div className="text-[0.8rem] flex flex-col items-center">
          <p className="text-white">디자인 실력이 대단하시네요!</p>
          <p className="text-white">패셔너블한 티셔츠가 완성됐어요!</p>
        </div>
      </div>
      {/* 티셔츠 색상 버튼 */}
      <div className="grid grid-cols-2 w-[6rem] ml-80">
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
      <section className="relative flex justify-center items-center mx-2">
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
          {selectImage.image?.map((item, index) => {
            return (
              <SwiperSlide key={index} className={'flex justify-center items-center absolute top-0'}>
                <div className="w-[330px] h-[340px] relative -top-5 left-[50%] translate-x-[-50%] flex justify-center items-center">
                  <NextImage
                    src={selectedColorArray[index] === 'white' ? tShirtImage.white : tShirtImage.black}
                    alt="T-shirt"
                    priority
                    fill
                    sizes="(min-width: 720px) 50vw, 100vw"
                    className="drop-shadow-tShirt"
                  />
                  <NextImage src={item} alt="T-shirt" priority width={120} height={120} className="z-10" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-full h-[4.8rem] flex justify-center items-center absolute bottom-2">
          {selectImage.image?.map((item, index) => {
            return (
              <ThumbnailImage
                key={index}
                tShirtImage={selectedColorArray[index] === 'white' ? tShirtImage.white : tShirtImage.black}
                image={item}
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
            drawSelectedImage({ selectImage, selectedColorArray, tShirtImage, setImageFile });
            router.push('/design/feedback');
          }}>
          다운로드
        </button>
      </div>
    </div>
  );
};

export default DesignPreviewBox;
