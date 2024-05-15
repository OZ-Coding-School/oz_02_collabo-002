import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <main className="w-full h-footer flex flex-col justify-center items-center relative sm:h-fit sm:py-8">
      <div className="w-3/4 flex justify-between align-top mmd:flex-col-reverse sm:items-center">
        <div className="mr-8 mmd:mr-0">
          <div className="text-base text-footer_text mb-[15.5px] sm:text-center sm:text-sm">
            AI Fashionista l AI 패셔니스타
          </div>
          <div className="text-base text-footer_text sm:text-center sm:break-keep sm:text-sm">
            AI Fashionista l Online Service l aif.aifashionista@gmail.com <br />
            AI 패셔니스타 콘텐츠를 무단 사용 및 도용하는 경우 저작권법 등에 따라 법 책임을 질 수 있음을 알려드립니다.{' '}
            <br />
            Copyright 2024 © AI Fashionista, All right reserved
          </div>
        </div>
        <div className="min-w-[14.875rem] h-[2.5rem] flex justify-between items-center space-x-3 mb-7 mmd:w-[14rem] sm:!w-[12rem] sm:space-x-1 sm:h-fit">
          <Link href="https://www.instagram.com/AI_Fashionista__/" rel="noopener noreferrer" target="_blank">
            <Image
              alt="insta_icon"
              src={'/icons/insta_icon.svg'}
              width={40}
              height={40}
              className="w-10 h-10 sm:w-9 sm:h-9"
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC17QRG75E3NRUMCmk88cioA"
            rel="noopener noreferrer"
            target="_blank">
            <Image
              alt="youtube_icon"
              src={'/icons/youtube_icon.svg'}
              width={40}
              height={40}
              className="w-10 h-10 sm:w-9 sm:h-9"
            />
          </Link>
          <Link href="http://www.tiktok.com/@ai_fashionista_" rel="noopener noreferrer" target="_blank">
            <Image
              alt="tiktok_icon"
              src={'/icons/tiktok_icon.svg'}
              width={40}
              height={40}
              className="w-10 h-10 sm:w-9 sm:h-9"
            />
          </Link>
          <Link href="https://open.kakao.com/o/gRTgDRag" rel="noopener noreferrer" target="_blank">
            <Image
              alt="kakao_icon"
              src={'/icons/kakao_icon.svg'}
              width={40}
              height={40}
              className="w-10 h-10 sm:w-9 sm:h-9"
            />
          </Link>
          <Link href="https://cafe.naver.com/aifashionista" rel="noopener noreferrer" target="_blank">
            <Image
              alt="naver_icon"
              src={'/icons/naver_icon.svg'}
              width={40}
              height={40}
              className="w-10 h-10 sm:w-9 sm:h-9"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
