import React from 'react';

const Question1 = () => {
  return (
    <div className="max-w-[43.8125rem] w-[90%]">
      <p className="text-2xl text-start mb-3 sm:text-lg">1. 연령대가 어떻게 되시나요?</p>
      <div className="flex flex-col justify-between items-start bg-input_bg w-full h-[15rem] py-3 pl-10 mb-14 sm:h-[14rem] sm:pl-7 xm:mb-8 xm:pl-4">
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="age"
            value={'10대'}
          />
          <span className="peer-checked:text-black sm:text-base">10대</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="age"
            value={'20대'}
          />
          <span className="peer-checked:text-black sm:text-base">20대</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="age"
            value={'30대'}
          />
          <span className="peer-checked:text-black sm:text-base">30대</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="age"
            value={'40대'}
          />
          <span className="peer-checked:text-black sm:text-base">40대</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="age"
            value={'50대이상'}
          />
          <span className="peer-checked:text-black sm:text-base">50대 이상</span>
        </label>
      </div>
    </div>
  );
};

export default Question1;
