import React, { ChangeEvent, useCallback, useState } from 'react';

const Question2 = () => {
  const [isOtherPriceChecked, setIsOtherPriceChecked] = useState(false);
  const [otherPrice, setOtherPrice] = useState('');

  const handleCheckedRadioChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'otherPrice') {
      setIsOtherPriceChecked(true);
    } else {
      setOtherPrice('');
      setIsOtherPriceChecked(false);
    }
  }, []);

  return (
    <div className="max-w-[43.8125rem] w-[90%]">
      <p className="font-bold text-2xl mb-3 sm:text-xl">2. AI로 디자인한 나만의 티셔츠, 이 가격이면 산다!?</p>
      <div className="flex flex-col justify-between items-start bg-input_bg w-full min-h-[15rem] h-fit py-3 pl-10 mb-14 sm:h-[14rem] sm:pl-7">
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="price"
            value={'1만원대'}
            onChange={handleCheckedRadioChange}
          />
          <span className="peer-checked:text-black sm:text-lg">1만원대</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="price"
            value={'2~3만원대'}
            onChange={handleCheckedRadioChange}
          />
          <span className="peer-checked:text-black sm:text-lg">2~3만원대</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="price"
            value={'4~5만원대'}
            onChange={handleCheckedRadioChange}
          />
          <span className="peer-checked:text-black sm:text-lg">4~5만원대</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="price"
            id="price"
            value={'상관없음'}
            onChange={handleCheckedRadioChange}
          />
          <span className="w-[90%] peer-checked:text-black sm:text-lg">
            나만의 디자인을 가질 수 있다면 가격은 상관없다!
          </span>
        </label>
        <label className="w-full h-full text-xl text-form_color relative flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="price"
            id="otherPrice"
            value={otherPrice}
            onChange={handleCheckedRadioChange}
            checked={isOtherPriceChecked}
          />
          <span
            className="peer-checked:text-black sm:text-lg"
            onClick={() => {
              setIsOtherPriceChecked(true);
            }}>
            기타
            <input
              type="text"
              name="price"
              id="otherPrice"
              placeholder="작성해주세요."
              onChange={e => setOtherPrice(e.target.value)}
              onFocus={() => setIsOtherPriceChecked(true)}
              value={otherPrice}
              maxLength={300}
              required={isOtherPriceChecked}
              className="font-normal text-base bg-input_bg border-b-2 border-form_color w-[22.25rem] ml-3 absolute bottom-2 sm:w-[70%]"
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default Question2;
