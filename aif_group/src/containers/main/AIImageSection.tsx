import Image from 'next/image';

export default function AIImageSection() {
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
    <main className="w-full h-banner flex justify-center items-center bg-bg">
      <section className="w-full h-[33.1875rem] flex flex-col items-center">
        <div className="flex flex-col justify-center items-center sm:w-[80%]">
          <div className="font-bold text-[2.625rem] leading-[58px] tracking-wider sm:text-[2.125rem] sm:leading-[56px]">
            AI 생성 이미지
          </div>
          <div className="text-[1.3125rem] leading-[37px] tracking-[-0.06em] text-center sm:text-lg">
            AIF 디자인 툴을 통해 생성된 프린트 디자인 티셔츠
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="w-fit h-[24.1875rem] flex flex-row mt-[49px] relative sm:h-[14.25rem]">
            <div className="w-[241.25rem] h-[24.1875rem] flex flex-row animate-slide1 sm:w-[151.25rem] sm:h-[14.25rem]">
              {latestImageList.map((image, index) => {
                return (
                  <li key={index} className="bg-sample_img_bg p-[20px] list-none mr-[0.6875rem] rounded-md sm:p-3">
                    <Image
                      alt={`${index}`}
                      src={image}
                      width={375}
                      height={387}
                      className="sm:w-[13.75rem] sm:h-[12.5625rem]"
                    />
                  </li>
                );
              })}
            </div>
            <div className="w-[241.25rem] h-[24.1875rem] flex flex-row absolute left-[241.25rem] animate-slide2 sm:w-[151.25rem] sm:h-[14.25rem] sm:left-[151.25rem]">
              {latestImageList.map((image, index) => {
                return (
                  <li key={index} className="bg-sample_img_bg p-[20px] list-none mr-[0.6875rem] rounded-md sm:p-3">
                    <Image
                      alt={`${index}`}
                      src={image}
                      width={375}
                      height={387}
                      className="sm:w-[13.75rem] sm:h-[12.5625rem]"
                    />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
