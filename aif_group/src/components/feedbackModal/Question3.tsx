import React from 'react';

const Question3 = () => {
  return (
    <div className="max-w-[43.8125rem] w-[90%]">
      <p className="font-bold text-2xl mb-3 sm:text-lg">
        3. 해당 이미지 제작 서비스 편의성에 대한 만족도를 체크 해 주세요.
      </p>
      <div className="bg-input_bg w-full h-[11.75rem] flex justify-start items-center py-16 mb-14 sm:h-[9rem] sm:py-0 xm:mb-8">
        <div className="w-[90%] h-fit flex justify-between text-center mx-auto my-auto sm:w-full sm:px-4 sm:pt-3 xm:px-2">
          <label className="w-[7rem] min-h-[4.3125rem] h-fit text-xl text-form_color flex flex-col justify-center items-center">
            <input
              type="radio"
              className="h-[1.4rem] w-[1.4rem] peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
              name="satisfaction"
              value={'매우불만족'}
            />
            <span className="block mt-4 peer-checked:text-black break-keep sm:text-base sm:h-12">매우 불만족</span>
          </label>
          <label className="w-[7rem] min-h-[4.3125rem] h-fit text-xl text-form_color flex flex-col justify-center items-center">
            <input
              type="radio"
              className="h-[1.4rem] w-[1.4rem] peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
              name="satisfaction"
              value={'불만족'}
            />
            <span className="block mt-4 peer-checked:text-black sm:text-base sm:h-12">불만족</span>
          </label>
          <label className="w-[7rem] min-h-[4.3125rem] h-fit text-xl text-form_color flex flex-col justify-center items-center">
            <input
              type="radio"
              className="h-[1.4rem] w-[1.4rem] peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
              name="satisfaction"
              value={'보통'}
            />
            <span className="block mt-4 peer-checked:text-black sm:text-base sm:h-12">보통</span>
          </label>
          <label className="w-[7rem] min-h-[4.3125rem] h-fit text-xl text-form_color flex flex-col justify-center items-center">
            <input
              type="radio"
              className="h-[1.4rem] w-[1.4rem] peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
              name="satisfaction"
              value={'만족'}
            />
            <span className="block mt-4 peer-checked:text-black sm:text-base sm:h-12">만족</span>
          </label>
          <label className="w-[7rem] min-h-[4.3125rem] h-fit text-xl text-form_color flex flex-col justify-center items-center">
            <input
              type="radio"
              className="h-[1.4rem] w-[1.4rem] peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
              name="satisfaction"
              value={'매우만족'}
            />
            <span className="block mt-4 peer-checked:text-black break-keep sm:text-base sm:h-12">매우 만족</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Question3;
