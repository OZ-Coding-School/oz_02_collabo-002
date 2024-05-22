import useCheckWidth from '@/hooks/useCheckWidth';
import { getSamples } from '@/services/getSamples';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ImageInfo } from '@/types/designSelectBoxType';

export default function AIImageSection() {
  const innerWidth = useCheckWidth();
  const [sampleImages, setSampleImages] = useState<ImageInfo[]>([]);

  useEffect(() => {
    async function getSampleImages() {
      setSampleImages(await getSamples());
    }
    getSampleImages();
  }, []);

  return (
    <main className="w-full h-banner flex justify-center items-center bg-bg">
      <section className="w-full h-[33.1875rem] flex flex-col justify-center items-center sm:h-fit">
        <div className="flex flex-col justify-center items-center sm:w-[80%]">
          <div className="font-bold text-[2.625rem] leading-[58px] tracking-wider sm:text-[2rem] sm:leading-[56px]">
            AI 생성 이미지
          </div>
          <div className="text-[1.3125rem] leading-[37px] tracking-[-0.06em] text-center sm:text-lg">
            AIF 디자인 툴을 통해 생성된 프린트 디자인 티셔츠
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="w-fit h-[24.1875rem] flex flex-row mt-[49px] relative sm:h-[14.25rem]">
            <div className="w-[241.25rem] h-[24.1875rem] flex flex-row animate-slide1 sm:w-[151.25rem] sm:h-[14.25rem]">
              {sampleImages.map((image, index) => {
                return (
                  <li key={index} className="bg-sample_img_bg px-3 pt-3 list-none mr-[0.6875rem] rounded-md sm:p-3">
                    <Image
                      alt={`${index}`}
                      src={image.img_url}
                      width={375}
                      height={387}
                      className="sm:w-[13.75rem] sm:h-[12.5625rem]"
                    />
                  </li>
                );
              })}
            </div>
            <div className="w-[241.25rem] h-[24.1875rem] flex flex-row absolute left-[241.25rem] animate-slide2 sm:w-[151.25rem] sm:h-[14.25rem] sm:left-[151.25rem]">
              {sampleImages.map((image, index) => {
                return (
                  <li key={index} className="bg-sample_img_bg px-3 pt-3 list-none mr-[0.6875rem] rounded-md sm:p-3">
                    <Image
                      alt={`${index}`}
                      src={image.img_url}
                      width={375}
                      height={387}
                      className="sm:w-[13.75rem] sm:h-[12.5625rem]"
                    />
                  </li>
                );
              })}
            </div>
          </div>
          {innerWidth < 768 && (
            <div className="w-fit h-[24.1875rem] flex flex-row mt-[1.5rem] relative sm:h-[14.25rem]">
              <div className="flex flex-row animate-slide1_reverse w-[151.25rem] h-[14.25rem]">
                {sampleImages.map((image, index) => {
                  return (
                    <li key={index} className="bg-sample_img_bg px-3 pt-3 list-none mr-[0.6875rem] rounded-md sm:p-3">
                      <Image
                        alt={`${index}`}
                        src={image.img_url}
                        width={375}
                        height={387}
                        className="sm:w-[13.75rem] sm:h-[12.5625rem]"
                      />
                    </li>
                  );
                })}
              </div>
              <div className="flex flex-row absolute animate-slide2_reverse w-[151.25rem] h-[14.25rem] right-[151.25rem]">
                {sampleImages.map((image, index) => {
                  return (
                    <li key={index} className="bg-sample_img_bg px-3 pt-3 list-none mr-[0.6875rem] rounded-md sm:p-3">
                      <Image
                        alt={`${index}`}
                        src={image.img_url}
                        width={375}
                        height={387}
                        className="sm:w-[13.75rem] sm:h-[12.5625rem]"
                      />
                    </li>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
