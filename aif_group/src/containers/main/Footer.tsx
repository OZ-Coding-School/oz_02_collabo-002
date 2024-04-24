import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <main className="w-full h-footer flex flex-col justify-center items-center relative">
      <div className="w-3/4 border-t-[1px] border-footer_text absolute top-2"></div>
      <div className="w-3/4 flex justify-between align-top">
        <div>
          <div className="text-[1rem] text-footer_text mb-[15.5px]">AI Fashionista l AI 패셔니스타</div>
          <div className="text-[1rem] text-footer_text mr-5">
            AI Fashionista l Online Service l aif.aifashionista@gmail.com <br />
            AI 패셔니스타 콘텐츠를 무단 사용 및 도용하는 경우 저작권법 등에 따라 법 책임을 질 수 있음을 알려드립니다.{' '}
            <br />
            Copyright 2024 © AI Fashionista, All right reserved
          </div>
        </div>
        <div className="w-[17.1875rem] h-[1.875rem] flex justify-between items-center">
          <Link href="https://www.instagram.com/AI_Fashionista__/" rel="noopener noreferrer" target="_blank">
            <Image alt="insta_icon" src={'/icons/insta_icon.svg'} width={40} height={40} />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC17QRG75E3NRUMCmk88cioA"
            rel="noopener noreferrer"
            target="_blank">
            <Image alt="youtube_icon" src={'/icons/youtube_icon.svg'} width={40} height={40} />
          </Link>
          <Link href="http://www.tiktok.com/@ai_fashionista_" rel="noopener noreferrer" target="_blank">
            <Image alt="tiktok_icon" src={'/icons/tiktok_icon.svg'} width={40} height={40} />
          </Link>
          <Link href="https://open.kakao.com/o/gRTgDRag" rel="noopener noreferrer" target="_blank">
            <Image alt="kakao_icon" src={'/icons/kakao_icon.svg'} width={40} height={40} />
          </Link>
          <Link href="https://cafe.naver.com/aifashionista" rel="noopener noreferrer" target="_blank">
            <Image alt="naver_icon" src={'/icons/naver_icon.svg'} width={40} height={40} />
          </Link>
        </div>
      </div>
    </main>
  );
}
