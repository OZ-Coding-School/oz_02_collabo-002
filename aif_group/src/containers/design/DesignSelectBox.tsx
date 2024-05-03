import { dummyDesignData } from '../../../public';
import Image from 'next/image';
import ImageItem from './ImageItem';
import { DesignSelectBoxProps } from '@/types/designSelectBoxType';
import useSelectImage from '@/hooks/useSelectImage';

const DesignSelectBox: React.FC<DesignSelectBoxProps> = ({ onSelectDesign }) => {
  const { toggleCheck, handleSelectImage, selectImage, currentImage, checkboxRef } = useSelectImage();

  return (
    <section className="w-[39.75rem] h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl">
      <div className="w-full h-[9.9375rem] bg-black rounded-t-[14px] flex flex-col items-center">
        <div className="bg-main_active flex mt-[1.9375rem] w-[4.375rem] h-[1.25rem] justify-center items-center rounded-[3px]">
          <p>STEP</p>
          <p className="font-black ml-[2px]">02</p>
        </div>
        <h2 className="text-main_active h-[3.125rem] flex items-center text-[1.5rem] font-bold">디자인 선택</h2>
        <div className="text-[0.8rem] flex flex-col items-center">
          <p className="text-white">생성된 디자인이 마음에 드시나요?</p>
          <p className="text-white">원하는 디자인을 최대 3개 선택하세요.</p>
        </div>
      </div>
      <div className="w-full h-[36.9375rem] rounded-b-[14px]">
        <div className="w-[35.75rem] h-[25.375rem] flex mt-[2.8125rem] mx-[1.875rem] mb-[4.3125rem] gap-[1.6875rem]">
          <div className="w-[12.625rem] h-[25.375rem]">
            <ul className="grid gap-[0.625rem] h-full grid-cols-2">
              {dummyDesignData.map((image, idx) => {
                const isSelected = selectImage.idx.includes(idx);
                const isCurrent = currentImage.idx === idx;
                return (
                  <ImageItem
                    image={image}
                    onSelect={handleSelectImage}
                    key={idx}
                    idx={idx}
                    isSelected={isSelected}
                    isCurrent={isCurrent}
                  />
                );
              })}
            </ul>
          </div>
          <div className="w-[21.6875rem] h-[25.375rem]">
            {currentImage.image && <Image src={currentImage.image} width={345} height={345} alt="선택된 ai 디자인" />}
            {!currentImage.image && (
              <div className="w-full h-[21.5625rem] bg-sample_img_bg flex items-center justify-center font-semibold text-xl">
                사진을 선택하세요
              </div>
            )}
            <div
              className="w-full h-[3.83125rem] bg-black flex justify-center items-center hover:bg-[#3f3f3f]"
              onClick={toggleCheck}>
              <p className="text-main_active font-semibold">디자인 선택</p>
              <input
                type="checkbox"
                className="w-[1rem] h-[1rem] ml-[0.8125rem] accent-main_active rounded-xl"
                ref={checkboxRef}
              />
            </div>
          </div>
        </div>
        <div className="w-[33.375rem] h-[2.5rem] mb-[1.9375rem] mx-[3.1875rem] flex justify-between">
          <button className="w-[15rem] h-full border-btn_border border-[1px] rounded-[4px] hover:bg-main_active text-btn_text">
            다시 생성하기
          </button>
          <button
            onClick={onSelectDesign}
            className="w-[15rem] h-full border-btn_border border-[1px] rounded-[4px] hover:bg-main_active text-btn_text hover:text-black hover:border-none">
            디자인 선택하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignSelectBox;
