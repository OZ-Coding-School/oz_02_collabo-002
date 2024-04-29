'use client';
import Header from '@/containers/main/Header';
import Image from 'next/image';

export default function Thanks() {
  const handleShearToKakao = () => {
    const { Kakao, location } = window;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'AI Fashionista',
        description: '누구나 패션디자이너가 되는 곳 AI Fashionista',
        // imageUrl: 'https://dev.woodaebbang.com/image/buyingRecommend/buying_recommend_og_image.png', // 이미지 링크 바꿔주기
        imageUrl:
          'https://cdn.discordapp.com/attachments/1229713851218657300/1233237563494633483/KakaoTalk_20240426_110343089.png?ex=662c5d7b&is=662b0bfb&hm=9124f79d0575fecdb788143fde1be1009aae9e80c15c3d4ac952173cc8e1133d&', // 이미지 링크 바꿔주기
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'https://localhost:3000',
          webUrl: 'https://localhost:3000',
          // webUrl: location.href,
        },
      },

      buttons: [
        {
          title: 'AIF 바로가기',
          link: {
            mobileWebUrl: 'https://localhost:3000',
            webUrl: 'https://localhost:3000',
          },
        },
      ],
    });
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('링크가 복사되었습니다.'); // 나중에 커스텀 알람창으로 수정
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopyClick = () => {
    const textToCopy = `http://localhost:3000`; // 나중에 배포 링크로 수정
    copyToClipboard(textToCopy);
  };

  return (
    <main className="h-screen">
      <Header />
      <section className="bg-bg w-full h-[calc(100vh-8.875rem)] flex justify-center">
        <div className="bg-white w-2/3 h-[46.5rem] mx-5 rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.25)] mt-[3.375rem]">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="font-saira text-[1.875rem] leading-[90%] tracking-[-0.02em]">AI Fashionista</div>
            <div className="font-bold text-[2rem] leading-[3.9375rem] mt-[3.375rem]">
              AIF 서비스를 이용해 주셔서 감사합니다.
            </div>
            <div className="w-[24.5625rem] h-1 border-t border-black my-[1.6875rem]"></div>
            <div className="font-bold text-[1.875rem] text-center leading-[3.125rem] mb-[3.875rem]">
              커스텀 디자인 경험이 즐겁고 유쾌하셨다면 <br /> 친구에게 공유해 주세요!
            </div>
            <div className="w-[12.5rem] h-[5.625rem] flex justify-center items-center">
              <div className="h-[5.625rem] flex flex-col justify-between items-center mr-[1.375rem]">
                <button onClick={handleShearToKakao}>
                  <Image alt="kakao_link_icon" src={'/icons/kakao_link_icon.svg'} width={56} height={56} />
                </button>
                <div className="text-[0.9375rem]">카카오톡</div>
              </div>
              <div className="h-[5.625rem] flex flex-col justify-between items-center">
                <button onClick={handleCopyClick}>
                  <Image alt="link_icon" src={'/icons/link_icon.svg'} width={56} height={56} />
                </button>
                <div className="text-[0.9375rem]">링크공유</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
