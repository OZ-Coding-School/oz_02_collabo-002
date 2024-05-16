'use client';
import Image from 'next/image';
import ImageItem from './ImageItem';
import useSelectImage from '@/hooks/useSelectImage';
import { DesignSelectBoxProps } from '@/types/designSelectBoxType';

import { dummyDesignData } from '../../../public';
import { useRouter } from 'next/navigation';

const DesignSelectBox: React.FC<DesignSelectBoxProps> = ({ onSelectDesign, data, error, onRetry }) => {
  const { handleSelectImage, handleClickImage, selectImage, currentImage, checkboxRef, isDisabled } = useSelectImage();
  const slicingData = data?.slice(0, 8);
  const router = useRouter();

  return (
    <section className="w-[39.75rem] h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl xm:w-full xm:min-h-screen xm:h-full xm:rounded-none xm:border-none">
      <div className="w-full h-[9.9375rem] bg-black rounded-t-[14px] flex flex-col items-center relative pt-8 pb-7 xm:h-[40%] xm:rounded-none">
        {innerWidth < 490 && (
          <div>
            <div className="absolute left-4 top-7 flex flex-col justify-start items-center">
              <button className="flex flex-col justify-center items-center space-y-1">
                <Image alt="go-back" src={'/icons/back_icon.svg'} width={36} height={36} />
              </button>
            </div>
            <div className="absolute right-4 top-7 flex flex-col justify-start items-center">
              <button className="flex flex-col justify-center items-center space-y-1">
                <Image alt="go-back" src={'/icons/next_icon.svg'} width={36} height={36} />
              </button>
            </div>
          </div>
        )}
        <div className="bg-main_active flex w-[4.375rem] h-[1.25rem] mt-2 justify-center items-center rounded-[3px]">
          <p>STEP</p>
          <p className="font-black ml-[2px]">02</p>
        </div>
        <h2 className="text-main_active h-[3.125rem] flex items-center text-[1.5rem] font-bold">디자인 선택</h2>
        <div className="text-[0.8rem] flex flex-col items-center">
          <p className="text-white">생성된 디자인이 마음에 드시나요?</p>
          <p className="text-white">원하는 디자인을 최대 3개 선택하세요.</p>
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
      <div className="w-full h-fit rounded-b-[14px] xm:h-[60%]">
        <div className="w-[35.75rem] h-[25.375rem] flex mt-[2.8125rem] mx-[1.875rem] mb-[4.3125rem] gap-[1.6875rem] xm:m-0 xm:flex-col xm:h-full">
          <div className="w-[12.625rem] h-[25.375rem]">
            <ul className="grid gap-[0.625rem] h-full grid-cols-2">
              {dummyDesignData?.map((image, idx) => {
                const isSelected = selectImage.some(selectImage => selectImage.img_id === image.img_id);
                return (
                  <div key={image.img_id}>
                    <ImageItem image={image} onSelect={handleClickImage} isSelected={isSelected} />
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="w-[21.6875rem] h-[25.375rem]">
            {currentImage && <Image src={currentImage.img_url} width={345} height={345} alt="선택된 ai 디자인" />}
            {!currentImage && (
              <div className="w-full h-[21.5625rem] bg-sample_img_bg flex items-center justify-center font-semibold text-xl">
                사진을 선택하세요
              </div>
            )}
            <div
              className="w-full h-[3.83125rem] bg-black flex justify-center items-center hover:bg-[#3f3f3f]"
              onClick={() => {
                currentImage !== undefined && handleSelectImage(currentImage);
              }}>
              <p className="text-main_active font-semibold">디자인 선택</p>
              <input
                type="checkbox"
                className="w-[1rem] h-[1rem] ml-[0.8125rem] accent-main_active rounded-xl "
                ref={checkboxRef}
                disabled={isDisabled}
              />
            </div>
          </div>
        </div>
        <div className="w-[33.375rem] h-[2.5rem] my-[1.9375rem] mx-auto flex justify-between xm:w-full xm:justify-around">
          <button
            onClick={onRetry}
            className="w-[15rem] h-full border-btn_border border-[1px] rounded-[4px] hover:bg-main_active text-btn_text hover:text-black hover:border-none xm:w-[40%]">
            다시 생성하기
          </button>
          <button
            onClick={onSelectDesign}
            className="w-[15rem] h-full border-btn_border border-[1px] rounded-[4px] hover:bg-main_active text-btn_text hover:text-black hover:border-none xm:w-[40%]">
            디자인 선택하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignSelectBox;
