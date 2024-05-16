import React, { ChangeEvent, useCallback, useState } from 'react';

const Question4 = () => {
  const [isOtherFeedbackChecked, setIsOtherFeedbackChecked] = useState(false);
  const [otherFeedback, setOtherFeedback] = useState('');

  const handleCheckedSelectChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      setIsOtherFeedbackChecked(true);
    } else {
      setIsOtherFeedbackChecked(false);
      setOtherFeedback('');
    }
  }, []);

  return (
    <div className="max-w-[43.8125rem] w-[90%]">
      <p className="font-bold text-2xl mb-3 sm:text-lg">
        4. 해당 서비스에 개선이 필요한 부분을 선택 해 주세요.
        <span className="font-normal text-xl ml-1.5 sm:text-base">(중복선택 가능)</span>
      </p>
      <div className="flex flex-col justify-between items-start space-y-1 bg-input_bg w-full min-h-[18rem] h-fit py-3 pl-10 mb-14 sm:pl-7 sm:py-4 sm:pr-2 xm:mb-8 xm:pl-4">
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="checkbox"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="feedback"
            value={'설명'}
          />
          <span className="w-[90%] peer-checked:text-black sm:text-base">
            서비스 사용 방법에 대한 설명이 더 자세하면 좋겠다.
          </span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="checkbox"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="feedback"
            value={'스타일'}
          />
          <span className="w-[90%] peer-checked:text-black sm:text-base">AI 이미지 스타일이 다양하면 좋겠다.</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="checkbox"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="feedback"
            value={'개수'}
          />
          <span className="w-[90%] peer-checked:text-black sm:text-base">
            AI 이미지 다운로드 갯수가 3개 이상이면 좋겠다.
          </span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="checkbox"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="feedback"
            value={'색상'}
          />
          <span className="w-[90%] peer-checked:text-black sm:text-base">티셔츠 색상이 더 다양하면 좋겠다.</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="checkbox"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="feedback"
            value={'아이템'}
          />
          <span className="w-[90%] peer-checked:text-black sm:text-base">
            티셔츠 이외 다른 아이템이 있으면 좋겠다. (예:후드티,맨투맨)
          </span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center relative">
          <input
            type="checkbox"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="feedback"
            id="otherFeedback"
            value={otherFeedback}
            checked={isOtherFeedbackChecked}
            onChange={handleCheckedSelectChange}
          />
          <span className="peer-checked:text-black sm:text-base">
            기타
            <input
              type="text"
              id="otherFeedback"
              name="otherFeedback"
              placeholder="작성해주세요."
              onClick={() => {
                setIsOtherFeedbackChecked(true);
              }}
              value={otherFeedback}
              onChange={e => setOtherFeedback(e.target.value)}
              maxLength={300}
              required={isOtherFeedbackChecked}
              className="font-normal text-base px-1 bg-input_bg border-b-2 border-form_color w-[22.25rem] ml-3 absolute bottom-1 sm:w-[60%] sm:text-sm xm:ml-2"
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default Question4;
