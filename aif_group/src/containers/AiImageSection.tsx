import Image from 'next/image';

export default function AiImageSection() {
  let latestImageList = [
    '/images/sample_img_1.png',
    '/images/sample_img_2.png',
    '/images/sample_img_3.png',
    '/images/sample_img_4.png',
    '/images/sample_img_5.png',
    '/images/sample_img_6.png',
    '/images/sample_img_7.png',
    '/images/sample_img_8.png',
    '/images/sample_img_9.png',
    '/images/sample_img_10.png',
  ];
  return (
    <main className="w-full h-banner flex justify-center items-center">
      <section className="w-full h-[33.1875rem]">
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[2.625rem] leading-[58px] tracking-wider">AI 생성 이미지</div>
          <div className="text-[1.3125rem] leading-[37px] tracking-[-0.06em]">
            AIF 디자인 툴을 통해 생성된 프린트 디자인 티셔츠
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="w-fit h-[387px] flex flex-row mt-[49px] relative">
            <div className="w-[3860px] h-[387px] flex flex-row animate-slide1">
              {latestImageList.map((image, index) => {
                return (
                  <Image
                    key={index}
                    alt={`${index}`}
                    src={image}
                    width={375}
                    height={387}
                    className="mr-[0.6875rem] bg-sample_img_bg p-[20px]"
                  />
                );
              })}
            </div>
            <div className="w-[3860px] h-[387px] flex flex-row absolute left-[3860px] animate-slide2">
              {latestImageList.map((image, index) => {
                return (
                  <Image
                    key={index}
                    alt={`${index}`}
                    src={image}
                    width={375}
                    height={387}
                    className="mr-[0.6875rem] bg-sample_img_bg p-[20px]"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
