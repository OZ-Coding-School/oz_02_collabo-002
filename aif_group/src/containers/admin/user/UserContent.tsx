'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export const dummyUserData = {
  number: 1,
  id: 'fasdfas',
  createAt: '2024-04-14',
  apiCount: 1,
  promptId: '프롬프트1',
  formId: '설문1',
};

function UserContent() {
  const router = useRouter();
  function handleClickPromptButton() {
    router.push(`/admin/manage/user/prompt?promptId=${dummyUserData.promptId}`);
  }
  function handleClickFormButton() {
    router.push(`/admin/manage/user/form?formId=${dummyUserData.formId}`);
  }

  return (
    <div className="mt-[3.3125rem] mx-[5.4375rem]">
      <table className="w-full table-fixed text-[#828282] text-[1rem]">
        <thead className="h-[4.5625rem] bg-table_bg">
          <tr className="font-normal">
            <th className="border-t-[1px] border-table_border w-[8.9490968801%]">번호</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[20.68308703%]">아이디</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[12.8078817734%]">사용일시</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[10.0476190476%]">API 사용 횟수</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[18%]">프롬프트/이미지 No</th>
            <th className="border-t-[1px] border-table_border w-[18%]">설문 No</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border text-center">{dummyUserData.number}</td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border text-center">
              {dummyUserData.id}
            </td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border text-center">
              {dummyUserData.createAt}
            </td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border text-center">
              {dummyUserData.apiCount}
            </td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border text-center">
              <button onClick={handleClickPromptButton}>{dummyUserData.promptId}</button>
            </td>
            <td className="bg-white border-b-[1px] border-table_border text-center">
              <button onClick={handleClickFormButton}>{dummyUserData.formId}</button>
            </td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>
          <tr className="h-[4.5625rem]">
            <td className="bg-table_bg border-b-[1px] border-table_border"></td>
            <td className="bg-table_bg border-b-[1px] border-table_border"></td>
            <td className="bg-table_bg border-b-[1px] border-table_border"></td>
            <td className="bg-table_bg border-b-[1px] border-table_border"></td>
            <td className="bg-table_bg border-b-[1px] border-table_border"></td>
            <td className="bg-table_bg border-b-[1px] border-table_border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserContent;
