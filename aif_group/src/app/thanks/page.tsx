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
          'https://lh3.googleusercontent.com/fife/ALs6j_HG_CuVu-_TrHwgX4m0bA3ab3B1hmbWl9eu9UcjRHjWXzx6exSmK_AlOkgDKHggRR0_F_I5Ax2xW3TeqUAP4nOzqNc0RI6zL8RiDOj8eZc2tLEnZ_S5wUzc1tsqgikS95M8hY7WUWuRUvOciOz2u8HC1AlWAqV_tL34MRQBH9MFco4x3VonKharmI1ynWE1H7877teENuB398cc_kn1IvSEKkRmwzh8TUBxC39RF0bSFHmbOvv5NREzot2ygByIjNz33QqxkyCPPWm3YmIYO08IvVO5rtP0eqVB2uS85kIP2sUpiPotYcOYCpreb1gqYA2Z5--RyfPbmjGKC0isWteJW0yqNL9jVvuoC9tS_pl1f626ccGyStr1Ps770_kqrGZGp1Qtr7uu_9P1YB1hFBuGClO4pkOByjDAbNpdmbXt9zlKBgd6JDBWNx-jFTwy60uSv0wI4eh6A-_WgqurIK2v0SuY7l3TZVaDP9GVvv3UYFZOffNBMZdxQlTdwZNSIx9E3i2cj0KQtIYX47Q_QD1uIrtP9hm7gDO0rUQEhrTAUwp4UR2VE9iRxc5-XwQTcQPBWURDiNAN3fsafLAkZwjw_ugbIAOUvvA1NsVtZnD3O73CJ8oia24xJuKM4aXzpLgTThTK8mtGph2fE0Cl5xMQVik0S-rblbo_muLO1CgumSmDt_Go4J8cKiite4zHW8xqHYmXfkIip9lJWg6y460ARmjrcaqG7SAhdxJ_z68BpCW-uMOtG-gfxuA31tfXwSV8I5D97PQuDqgv3chL5wk0vyu4P3zOE85fc2M1TXmGp7uMwLA6JS32Uo6foHFMSIv1YSJPpbc20qj46JaPjaOBX4oE6ITKCOmMVhCOpXedH9Q_9jFKcuTDEOiEy1J83dygo-0vjUANDSmtOrGccCx1w0kPkBVmXbCxe1mLoaRI2iDB9KFWpyaAYgeEf2dtFvsoQkokHlIH160Y60yjkSb5fxjeMDGz9eVm--ti1y3_nL2ULNIV3iEtK4CmoE86PJNJGACSx6vAp-T9tI4w-BLmChaUtskWTPPdM0aQh-7jZ7yF-zRLzThzQF7hREpYYLUeQ-b2oBHaj71netJUpR2wWzgHO08LX6RYjk0U6YxVGGp6rhMdk5bltQlLj-J05oZaOSWTtzXB6hTA446fYfqtuHLwxub3LNUmKnmzLmxZJgO9dC2CXOBBgYN-y5nnsMc2RXBU4kePVQ84xtyu0a76Md_tIW6ARks4wnSV5TOLfI6V7vKT3ejrK_82vhiLyVzi68ncXLlx_ssWB9N-pOrChZ27vE9pRBEcu4ScJs5pa5yOvZNSMfa8P7DuUjWtA3tjqkEWjVP8PGRQQ6BbotWDAPFE03QlGUxW4m85ZnLjoAbtS0fbjyep-K_glCP_W-g8xJ_gKpvRVJ6Q8jgKyL0cEpRkDTqd5l23sRl1dOLOywz23E2TrYvHIQIgApHchdmg0sapdrmeEiakmA1080sK9pm-zje9RRRj59v-ZK86nPu7SRfA7zyCEO0BAghrp0gFSmdSBuIcgdfcO6NyX3pxJMUyOqIbHl5ATWCQer_q6qJjGNGdG-8Dy_5jUBeYl00mrmt4sdYa9f0iVKfUi_G11d0_ySvQeQK1gmTB91WO_4OxRAg=w2528-h1348',
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'https://localhost:3000',
          webUrl: 'https://localhost:3000',
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
    <main className="h-full">
      <Header />
      <section className="bg-bg w-full h-[calc(100%-8.875rem)] flex justify-center py-14 sm:bg-white">
        <div className="bg-white w-2/3 h-[46.5rem] mx-5 rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.25)] mmd:px-5 sm:shadow-none sm:w-full">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="font-saira text-[1.875rem] leading-[90%] tracking-[-0.02em] sm:text-2xl">
              AI Fashionista
            </div>
            <div className="font-bold text-[2rem] leading-[3.9375rem] mt-[3.375rem] text-center break-keep sm:text-3xl sm:font-medium">
              AIF 서비스를 이용해 주셔서 감사합니다.
            </div>
            <div className="w-[24.5625rem] h-1 border-t border-black my-[1.6875rem] sm:w-[60%] sm:my-10"></div>
            <div className="font-semibold text-[1.875rem] text-center leading-[3.125rem] mb-[3.875rem] sm:text-2xl sm:font-normal">
              <span className="sm:font-semibold">커스텀 디자인 경험</span>이 즐겁고 유쾌하셨다면 <br />{' '}
              <span className="sm:font-semibold">친구에게 공유</span>해 주세요!
            </div>
            <div className="w-[12.5rem] h-[5.625rem] flex justify-center items-center">
              <div className="h-[5.625rem] flex flex-col justify-between items-center mr-[1.375rem]">
                <button onClick={handleShearToKakao}>
                  <Image
                    alt="kakao_link_icon"
                    src={'/icons/kakao_link_icon.svg'}
                    width={56}
                    height={56}
                    className="sm:w-12 sm:h-12"
                  />
                </button>
                <div className="text-[1rem]">카카오톡</div>
              </div>
              <div className="h-[5.625rem] flex flex-col justify-between items-center">
                <button onClick={handleCopyClick}>
                  <Image
                    alt="link_icon"
                    src={'/icons/link_icon.svg'}
                    width={56}
                    height={56}
                    className="sm:w-12 sm:h-12"
                  />
                </button>
                <div className="text-[1rem]">링크공유</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
