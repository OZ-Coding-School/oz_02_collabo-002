import DesignStartButton from '@/components/DesignStartButton';
import Image from 'next/image';

export default function LastBanner() {
  return (
    <main className="w-full h-banner flex justify-center items-center bg-gradient-to-r from-[#566081] to-[#1F1D22]">
      <section className="w-full h-[43.75rem] flex flex-col justify-center items-center sm:w-[90%] sm:h-[50rem]">
        <div className="font-bold text-white text-[2.625rem] text-center mb-[6px] sm:text-[2.125rem] sm:text-start sm:mb-5 sm:break-keep">
          어느 누구든 <span className="text-main_active">디자이너</span>가 되는 공간 <br />
          <span className="text-main_active">진정한 커스텀</span>을 <span className="text-main_active">무료</span>로
          경험하세요.
        </div>
        <div className="text-[1.375rem] text-[#EDEDED] text-center mb-[1.3125rem] sm:text-lg sm:text-start sm:break-keep">
          원하는 디자인을 간략한 키워드 작성과 스타일 선택으로 간결하고 쉽게 입력하세요. <br />
          디자인을 몰라도 누구나 손쉽게 자신만의 그래픽 이미지를 만들 수 있습니다.
        </div>
        <DesignStartButton />
        <div className="w-full h-fit flex justify-center items-center">
          <Image
            alt="last_banner_img"
            src={'/images/last_banner_img.svg'}
            width={750}
            height={370}
            className="w-[46.875rem] h-[23.125rem] object-contain"
          />
        </div>
      </section>
    </main>
  );
}
