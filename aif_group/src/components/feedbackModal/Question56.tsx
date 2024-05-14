import React, { ChangeEvent, useCallback, useState } from 'react';

const Question56 = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [reasonText, setReasonText] = useState('');

  const handleCheckedReasonChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setReasonText('');
    setSelectedValue(event.target.value);
  }, []);

  return (
    <div className="max-w-[43.8125rem] w-[90%]">
      <p className="font-bold text-2xl mb-3 sm:text-lg">
        5. AI로 자신이 직접 만든 이미지를 프린팅 티셔츠로 제작해주는 서비스가 있다면 이용할 생각이 있으신가요?
      </p>
      <div className="flex flex-col justify-between items-start bg-input_bg w-full h-[7.3125rem] py-5 px-10 mb-14 sm:pl-7 xm:mb-8 xm:pl-4">
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="availability"
            value={'예'}
            onChange={handleCheckedReasonChange}
          />
          <span className="peer-checked:text-black sm:text-base">예</span>
        </label>
        <label className="w-full h-full text-xl text-form_color flex items-center">
          <input
            type="radio"
            className="h-[1.4rem] w-[1.4rem] mr-2 peer appearance-none border-[2.5px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center sm:w-[1.2rem] sm:h-[1.2rem]"
            name="availability"
            value={'아니오'}
            onChange={handleCheckedReasonChange}
          />
          <span className="peer-checked:text-black sm:text-base">아니오</span>
        </label>
      </div>

      {selectedValue ? (
        selectedValue === '예' ? (
          <div className="w-full">
            <p className="font-bold text-2xl mb-3 sm:text-lg">
              6. ‘예’를 선택한 이유와 사용 용도에 대해 자유롭게 작성 해 주세요.
            </p>
            <div className="bg-input_bg w-full h-[6.25rem] pt-9 mb-14 xm:mb-8">
              <div className="w-[80%] flex justify-center items-center m-auto">
                <input
                  type="text"
                  id="yes-reason"
                  name="reason"
                  placeholder="작성해주세요."
                  maxLength={300}
                  onChange={e => setReasonText(e.target.value)}
                  value={reasonText}
                  className="font-normal text-xl px-1 bg-input_bg border-b-2 border-form_color w-full sm:text-base"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <p className="font-bold text-2xl mb-3 sm:text-lg">
              6. ‘아니오’를 선택한 이유에 대해서 자유롭게 작성 해 주세요.
            </p>
            <div className="bg-input_bg w-full h-[6.25rem] pt-9 mb-14 xm:mb-8">
              <div className="w-[80%] flex justify-center items-center m-auto">
                <input
                  type="text"
                  id="no-reason"
                  name="reason"
                  placeholder="작성해주세요."
                  maxLength={300}
                  onChange={e => setReasonText(e.target.value)}
                  value={reasonText}
                  className="font-normal text-xl px-1 bg-input_bg border-b-2 border-form_color w-full sm:text-base"
                />
              </div>
            </div>
          </div>
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default Question56;
