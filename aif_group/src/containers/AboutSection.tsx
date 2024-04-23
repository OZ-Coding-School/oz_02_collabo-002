import DesignStartButton from '@/components/DesignStartButton';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <main className="w-full h-banner bg-[#E6E6E6] flex justify-center items-center">
      <section className="w-[78.5625rem] h-[33.5rem] flex justify-between items-center mx-4">
        <div className="block">
          <div className="flex justify-start items-center">
            <div className="w-[5rem] h-[1.5rem] bg-black rounded-[6px] flex justify-center items-center">
              <div className="font-bold text-[1.125rem] text-main_active leading-[90%] tracking-[-0.02em]">About</div>
            </div>
            <div className="text-[1.375rem] font-saira leading-[90%] tracking-[-0.02em] ml-[1.375rem]">
              AI Fashionista
            </div>
          </div>
          <div className="h-[8.0625rem] font-bold text-[2.625rem] leading-[58px] mt-[2.25rem] tracking-wider">
            내가 디자인하는 <br /> 나만의 AI 맞춤형 티셔츠
          </div>
          <div className="w-[40.25rem] h-[11.125rem] text-[1.375rem] leading-[37px] tracking-[-0.06em] mt-[5px] mb-[9px]">
            AIF는 생성형 AI 기반의 패션에 특화된 프린트 디자인 툴 서비스 입니다. <br />
            상상속의 디자인을 글로 작성하면 원하는 이미지를 빠르고 드라마틱하게 눈으로 확인할 수 있습니다. <br />
            이제 AIF를 통해 자유로운 커스텀과 디자인의 경이로움을 경험하세요!
          </div>
          <DesignStartButton />
        </div>
        <Image
          alt="about_section_image"
          src={'/images/about_section_image.png'}
          width={536}
          height={536}
          layout="responsive"
          className="min-w-[450px] min-h-[450px]"
        />
      </section>
    </main>
  );
}
