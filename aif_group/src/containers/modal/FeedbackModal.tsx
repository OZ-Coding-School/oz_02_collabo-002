'use client';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Question1 from '@/components/feedbackModal/Question1';
import Question2 from '@/components/feedbackModal/Question2';
import Question3 from '@/components/feedbackModal/Question3';
import Question4 from '@/components/feedbackModal/Question4';
import Question56 from '@/components/feedbackModal/Question56';
import { useAppSelector } from '@/hooks/reduxHooks';
import { RootState } from '@/states/store';
import downloadImage from '@/utils/downloadImages';
import { postSurveys } from '@/services/postSurveys';
import { setToken } from '@/services/setToken';

const FeedbackModal = () => {
  const imgFile = useAppSelector((state: RootState) => state.imageFile);
  const email = useAppSelector((state: RootState) => state.email.email);
  const router = useRouter();

  const handleError = (data: { [key: string]: FormDataEntryValue | FormDataEntryValue[] | null }) => {
    try {
      Object.keys(data).forEach((key: string) => {
        if (!data[key]) {
          throw key;
        } else if (key === '4') {
          const arrayData = data[key]?.slice();
          if (Array.isArray(arrayData) && arrayData.length === 0) {
            throw key;
          }
        }
      });
      return 'true';
    } catch (e) {
      alert(`${e}번 문항에 답변해주세요`);
      return e;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue | FormDataEntryValue[] | null } = {
      1: formData.get('age'),
      2: formData.get('price'),
      3: formData.get('satisfaction'),
      4: formData.getAll('feedback'),
      5: formData.get('availability'),
      6: formData.get('reason'),
    };

    const resultError = handleError(data);
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    console.log(imgFile);

    if (resultError === 'true') {
      if (email) await setToken(email, 'user');
      const result = await postSurveys(JSONdata);
      console.log(result);
      if (result?.status === 200) {
        if (imgFile.length !== 0) {
          downloadImage(imgFile);
        }
        router.replace('/thanks');
      }
    }
  };

  return (
    <main className="w-full h-full">
      <div className="w-full flex flex-col justify-center items-center mt-[3rem] mx-auto sm:w-[80%] xm:w-[90%]">
        <div className="font-bold text-[2.725rem] text-center sm:text-2xl">디자인 제작 경험 어떠셨나요?</div>
        <div className="font-bold text-[2.725rem] text-center mb-4 sm:text-2xl">사용자의 의견을 들려주세요!</div>
        <div className="text-[1.6rem] sm:text-lg xm:mx-3">설문을 완료하시면 이미지가 자동으로 다운로드 됩니다.</div>
        <div className="w-[90%] h-1 border-t border-black mt-[1.6875rem] mb-[4rem] sm:w-full xm:mb-6"></div>
      </div>
      <div className="w-full flex flex-col justify-center items-center font-bold">
        <form className="max-w-[43.8125rem] w-[90%] h-full flex flex-col items-center" onSubmit={handleSubmit}>
          <Question1 />
          <Question2 />
          <Question3 />
          <Question4 />
          <Question56 />

          <div className="w-full text-center flex flex-col justify-center items-center sm:w-[90%]">
            <div className="w-fit flex flex-col justify-start">
              <p className="text-btn_text text-lg font-normal sm:text-base xm:text-sm">
                &bull; 서비스 제공을 위한 현황조사 및 향후 서비스 개선을 위한 목적으로 수집합니다.{' '}
              </p>
              <p className="w-fit text-btn_text text-lg font-normal sm:text-base relative xm:text-sm">
                &bull; 개인정보 수집에 동의하십니까? (미동의시 서비스 이용에 제한이 있습니다)
                <input
                  type="checkbox"
                  required
                  className="h-[1.4rem] w-[1.4rem] ml-1.5 appearance-none border-[2px] border-form_color rounded-md active:border-black checked:border-black checked:bg-black checked:bg-[url('/icons/checked_icon.svg')] bg-center absolute bottom-1 sm:bottom-0.5 sm:w-[1.2rem] sm:h-[1.2rem] xm:w-[1.1rem] xm:h-[1.1rem]"
                />
              </p>
            </div>

            <p className="text-[28px] mt-5 sm:text-2xl xm:text-lg">설문에 참여해 주셔서 감사합니다!</p>
            <p className="text-xl font-medium sm:text-lg xm:text-base">
              설문 완료시 이미지 다운로드가 자동으로 실행됩니다.
            </p>

            <button
              type="submit"
              className="w-[10rem] h-[3.5rem] bg-black group hover:bg-main_active active:bg-main_active flex justify-center items-center rounded-[4px] mt-10 mb-2 sm:w-30 sm:h-10 xm:w-28">
              <div className="font-bold text-[1.4rem] text-main_active group-hover:text-black group-active:text-black sm:text-xl xm:text-base">
                완료
              </div>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FeedbackModal;
