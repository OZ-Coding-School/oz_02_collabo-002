import Image from 'next/image';

export default function HowToCustomSection() {
  return (
    <main className="w-full h-banner md:h-fit bg-[#E6E6E6] flex justify-center items-center">
      <section className="w-full h-[33.1875rem] flex flex-col justify-center items-center md:h-fit md:my-24 sm:!my-20">
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[2.625rem] leading-[58px] sm:text-[2rem] sm:leading-[56px]">How to Custom</div>
          <div className="text-[1.3125rem] leading-[37px] text-[#555555] sm:text-lg">AIF 디자인 툴 사용 방법</div>
        </div>
        <div className="max-w-[84rem] h-[23.0625rem] flex justify-between items-center mt-[4.1875rem] space-x-4 md:h-fit md:grid md:grid-cols-6 md:gap-x-2 md:gap-y-16 md:justify-items-center mmd:grid-cols-1 mmd:gap-0 mmd:mt-[3rem] mmd:space-x-0 sm:w-[90%] sm:!mt-10">
          <div className="w-[13.125rem] h-[23.0625rem] flex flex-col justify-between items-center space-x-2 md:col-span-2 mmd:col-span-1 mmd:w-[27rem] mmd:flex-row mmd:h-[18rem] sm:justify-center sm:!h-[14rem] sm:!w-full">
            <Image
              alt="how_to_custom_1"
              src={'/images/how_to_custom_1.svg'}
              width={210}
              height={212}
              className="w-[13.125rem] h-[13.25rem] drop-shadow-gray sm:w-[8.75rem] sm:h-[8.75rem]"
            />
            <div className="w-[13.125rem] h-[7.625rem] flex flex-col justify-between items-center">
              <div className="font-bold text-[1.5rem] leading-[37px] xm:text-[1.375rem]">디자인 키워드</div>
              <div className="h-[60px] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555] xm:text-base">
                만들려고 하는 이미지를 <br /> 키워드로 작성하세요.
              </div>
            </div>
          </div>
          <div className="w-[13.125rem] h-[23.0625rem] flex flex-col justify-between items-center space-x-2 md:col-span-2 mmd:col-span-1 mmd:w-[27rem] mmd:flex-row mmd:h-[18rem] sm:justify-center sm:!h-[14rem] sm:!w-full">
            <div className="w-[13.125rem] flex justify-center items-center sm:w-[8.75rem]">
              <Image
                alt="how_to_custom_2"
                src={'/images/how_to_custom_2.svg'}
                width={165}
                height={218}
                className="drop-shadow-gray sm:w-[8.6rem] sm:h-[10.5rem]"
              />
            </div>
            <div className="w-[13.125rem] h-[7.625rem] flex flex-col justify-between items-center">
              <div className="font-bold text-[1.5rem] leading-[37px] xm:text-[1.375rem]">디자인 스타일</div>
              <div className="h-[60px] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555] xm:text-base">
                원하는 이미지 스타일 <br /> 옵션을 선택하세요.
              </div>
            </div>
          </div>
          <div className="w-fit h-[23.0625rem] flex justify-between items-center md:col-span-2 mmd:col-span-1 mmd:h-[18rem] sm:justify-center sm:!h-[14rem] sm:!w-full">
            <div className="w-1 h-[314px] border-l-[2.5px] border-white mr-[1.875rem] md:hidden"></div>
            <div className="w-full h-full flex flex-col justify-between items-center space-x-2 mmd:w-[27rem] mmd:flex-row sm:justify-center">
              <Image
                alt="how_to_custom_3"
                src={'/images/how_to_custom_3.svg'}
                width={210}
                height={210}
                className="w-[13.125rem] h-[13.125rem] drop-shadow-mint sm:w-[8.75rem] sm:h-[8.75rem]"
              />
              <div className="w-[13.125rem] h-[7.625rem] flex flex-col justify-between items-center">
                <div className="font-bold text-[1.5rem] leading-[37px] flex xm:text-[1.375rem]">
                  디자인 생성
                  <span className="relative top-1.5 left-1.5">
                    <Image
                      alt="cursor_icon"
                      src={'/icons/cursor_icon.svg'}
                      width={39}
                      height={39}
                      className="sm:w-[1.8rem] sm:h-[1.8rem]"
                    />
                  </span>
                </div>
                <div className="h-[3.75rem] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555] xm:text-base">
                  디자인 생성 클릭 시 <br /> 이미지가 4개 생성됩니다.
                </div>
              </div>
            </div>
            <div className="w-1 h-[314px] border-l-[2.5px] border-white ml-[1.875rem] md:hidden"></div>
          </div>
          <div className="w-[13.125rem] h-[23.0625rem] flex flex-col justify-between items-center space-x-2 md:col-start-2 md:col-end-4 mmd:col-span-1 mmd:w-[27rem] mmd:flex-row mmd:h-[18rem] sm:justify-center sm:!h-[14rem] sm:!w-full">
            <div className="w-[13.125rem] flex justify-center items-center sm:w-[8.75rem]">
              <Image
                alt="how_to_custom_4"
                src={'/images/how_to_custom_4.svg'}
                width={166}
                height={227}
                className="drop-shadow-gray sm:w-[8.75rem] sm:h-[10rem]"
              />
            </div>
            <div className="w-[13.125rem] h-[7.625rem] flex flex-col justify-between items-center">
              <div className="font-bold text-[1.5rem] leading-[37px] xm:text-[1.375rem]">디자인 선택하기</div>
              <div className="h-[60px] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555] xm:text-base">
                생성된 이미지 중 <br /> 최대 3개를 선택해주세요.
              </div>
            </div>
          </div>
          <div className="w-[13.125rem] h-[23.0625rem] flex flex-col justify-between items-center space-x-2 md:col-start-4 md:col-end-6 mmd:col-span-1 mmd:w-[27rem] mmd:flex-row mmd:h-[18rem] sm:justify-center sm:!h-[14rem] sm:!w-full">
            <Image
              alt="how_to_custom_5"
              src={'/images/how_to_custom_5.svg'}
              width={210}
              height={228}
              className="w-[13.125rem] h-[14.25rem] drop-shadow-gray sm:w-[8.8rem] sm:h-[8.8rem]"
            />
            <div className="w-[13.125rem] h-[7.625rem] flex flex-col justify-between items-center">
              <div className="font-bold text-[1.5rem] leading-[37px] xm:text-[1.375rem]">티셔츠 미리보기</div>
              <div className="h-[60px] text-[1.125rem] tracking-[-0.06em] text-center text-[#555555] xm:text-base">
                선택한 프린트 디자인 <br /> 티셔츠를 확인하세요.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
