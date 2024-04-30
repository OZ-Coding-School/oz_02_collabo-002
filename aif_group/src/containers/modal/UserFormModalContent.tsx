import React from 'react';
import Image from 'next/image';

const UserFormModalContent = () => {
  return (
    <div className="w-[75rem]">
      <div className="flex flex-col items-center mt-16">
        <div className="text-center">
          <p className="font-bold text-[45px]">디자인 제작 경험 어떠셨나요?</p>
          <p className="font-bold text-[45px] mb-4">사용자의 의견을 들려주세요!</p>
          <p className="font-normal text-3xl mb-4">설문을 완료하시면 이미지가 자동으로 다운로드 됩니다.</p>
          <Image src="/icons/Line.svg" alt="line" width={1039} height={0} />
        </div>

        <div className="font-bold mt-16">
          <form action="/submit-survey" className="w-[43.8125rem] h-full flex flex-col items-start">
            <p className="text-2xl text-start mb-2">1. 연령대가 어떻게 되시나요?</p>
            <div className="bg-input_bg w-full h-[15rem] space-y-4 pt-4 pl-10 mb-14">
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>10대</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>20대</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>30대</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>40대</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>50대 이상</label>
              </div>
            </div>

            <p className="font-bold text-2xl mb-2">2.AI로 디자인한 나만의 티셔츠, 이 가격이면 산다!?</p>
            <div className="bg-input_bg w-full h-[15rem] space-y-4 pt-5 pl-10 mb-14">
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>1만원대</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>2~3만원대</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>4~5만원대</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>나만의 디자인을 가질 수 있다면 가격은 상관없다!</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>기타</label>
                <input
                  type="text"
                  id="otherPrice"
                  name="otherPrice"
                  placeholder="작성해주세요."
                  className="font-normal text-base bg-input_bg border-b-2 border-[#8F8F8F] w-[22.25rem] ml-2"
                />
              </div>
            </div>

            <p className="font-bold text-2xl mb-2">3. 해당 이미지 제작 서비스 편의성에 대한 만족도를 체크 해 주세요.</p>
            <div className="bg-input_bg w-full h-[11.75rem] flex justify-center space-x-16 py-16 mb-14">
              <div className="text-xl text-[#8F8F8F] text-center">
                <input type="checkbox" className="h-5 w-5" />
                <label className="block mt-2">매우 불만족</label>
              </div>
              <div className="text-xl text-[#8F8F8F] text-center">
                <input type="checkbox" className="h-5 w-5" />
                <label className="block mt-2">불만족</label>
              </div>
              <div className="text-xl text-[#8F8F8F] text-center">
                <input type="checkbox" className="h-5 w-5" />
                <label className="block mt-2">보통</label>
              </div>
              <div className="text-xl text-[#8F8F8F] text-center">
                <input type="checkbox" className="h-5 w-5" />
                <label className="block mt-2">만족</label>
              </div>
              <div className="text-xl text-[#8F8F8F] text-center">
                <input type="checkbox" className="h-5 w-5" />
                <label className="block mt-2">매우 만족</label>
              </div>
            </div>

            <p className="font-bold text-2xl mb-2">
              4. 해당 서비스에 개선이 필요한 부분을 선택 해 주세요.
              <span className="font-normal text-xl">(중복선택 가능)</span>
            </p>
            <div className="bg-input_bg w-full h-[17.5625rem] space-y-4 pt-5 pl-10 mb-14">
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>서비스 사용 방법에 대한 설명이 더 자세하면 좋겠다.</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>AI 이미지 스타일이 다양하면 좋겠다.</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>AI 이미지 다운로드 갯수가 3개 이상이면 좋겠다.</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>티셔츠 색상이 더 다양하면 좋겠다.</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>티셔츠 이외 다른 아이템이 있으면 좋겠다.(예:후드티,맨투맨)</label>
              </div>
              <div className="text-xl text-[#8F8F8F] flex items-center">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>기타</label>
                <input
                  type="text"
                  id="otherPrice"
                  name="otherPrice"
                  placeholder="작성해주세요."
                  className="font-normal text-base bg-input_bg border-b-2 border-[#8F8F8F] w-[22.25rem] ml-2"
                />
              </div>
            </div>

            <p className="font-bold text-2xl mb-2">
              5. 자신이 직접 AI로 만든 이미지를 프린팅 티셔츠로 제작해주는 서비스가 있다면 이용할 생각이 있으신가요?
            </p>
            <div className="bg-input_bg w-full h-[7.3125rem] space-y-4 pt-5 pl-10 mb-14">
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>예</label>
              </div>
              <div className="text-xl text-[#8F8F8F]">
                <input type="checkbox" className="h-5 w-5 mr-2" />
                <label>아니오</label>
              </div>
            </div>

            <p className="font-bold text-2xl mb-2">6. ‘예’를 선택한 이유와 사용 용도에 대해 자유롭게 작성 해 주세요.</p>
            <div className="bg-input_bg w-full h-[6.25rem] pt-9 pl-10 mb-14">
              <div>
                <input
                  type="text"
                  id="otherPrice"
                  name="otherPrice"
                  placeholder="작성해주세요."
                  className="font-normal text-base bg-input_bg border-b-2 border-[#8F8F8F] w-[22.25rem]"
                />
              </div>
            </div>

            <p className="font-bold text-2xl mb-2">7. ‘아니오’를 선택한 이유에 대해서 자유롭게 작성 해 주세요.</p>
            <div className="bg-input_bg w-full h-[6.25rem] pt-9 pl-10 mb-14">
              <div>
                <input
                  type="text"
                  id="otherPrice"
                  name="otherPrice"
                  placeholder="작성해주세요."
                  className="font-normal text-base bg-input_bg border-b-2 border-[#8F8F8F] w-[22.25rem]"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserFormModalContent;
