import React from 'react';

function PromptModalContent() {
  return (
    <main className="w-[63.5625rem]">
      <table className="w-full">
        <thead className="h-[4.5625rem] bg-table_bg">
          <tr className="font-normal">
            <th className="border-t-[1px] border-table_border w-[5.9490968801%]">번호</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[20.68308703%]">아이디(이메일)</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[20.0476190476%]">프롬프트/이미지 No</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[15%]">생성일</th>
            <th className="border-t-[1px] border-table_border w-[8%]">노출 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border text-center"></td>
            <td className="bg-white border-b-[1px] border-table_border text-center"></td>
          </tr>
        </tbody>
      </table>
      <table className="w-full">
        <thead>
          <tr className="h-[3.4375rem]">
            <td className="bg-table_bg border-b-[1px] border-table_border text-center">프롬프트</td>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>
        </tbody>
      </table>

      <table className="w-full">
        <thead>
          <tr className="h-[3.4375rem]">
            <td className="bg-table_bg border-b-[1px] border-table_border text-center w-[50%]">AI 이미지</td>
            <td className="bg-table_bg border-b-[1px] border-table_border text-center w-[50%]">티셔츠 이미지</td>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="bg-white border-b-[1px] border-table_border border-r-[1px]">
              <div className="grid grid-cols-2 gap-[1.3125rem] p-[1.3125rem] place-items-center">
                <div className="bg-btn_text w-[9.58125rem] h-[9.58125rem]">생성 이미지</div>
                <div className="bg-btn_text w-[9.58125rem] h-[9.58125rem]">생성 이미지</div>
                <div className="bg-btn_text w-[9.58125rem] h-[9.58125rem]">생성 이미지</div>
                <div className="bg-btn_text w-[9.58125rem] h-[9.58125rem]">생성 이미지</div>
              </div>
            </td>
            <td className="bg-white border-b-[1px] border-table_border">
              <div className="grid grid-cols-2 gap-[1.3125rem] p-[1.3125rem] place-items-center">
                <div className="bg-btn_text w-[9.58125rem] h-[9.58125rem]">티셔츠 이미지</div>
                <div className="bg-btn_text w-[9.58125rem] h-[9.58125rem]">티셔츠 이미지</div>
                <div className="bg-btn_text w-[9.58125rem] h-[9.58125rem]">티셔츠 이미지</div>
              </div>
            </td>
          </tr>
          <tr className="h-[3.375rem]">
            <td className="bg-table_bg border-b-[1px] border-table_border text-center"></td>
            <td className="bg-table_bg border-b-[1px] border-table_border text-center"></td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default PromptModalContent;
