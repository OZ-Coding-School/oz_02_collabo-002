'use client';
import { Switch } from 'antd';
import React from 'react';
import PromptModal from '../../modal/PromptModal';
import { dummyUserData } from '../user/UserContent';
import { useRouter } from 'next/navigation';

function HomepageContent() {
  const router = useRouter();

  function handleClickPromptButton() {
    // 사용자마다의 프롬프트 api를 받아오는 로직 ...

    router.push(`/admin/manage/homepage/prompt?promptId=${dummyUserData.promptId}`);
  }
  return (
    <div className="mt-[3.3125rem] mx-[5.4375rem]">
      <table className="w-[100%] table-fixed text-[#828282] text-[1rem]">
        <thead className="h-[4.5625rem] bg-table_bg">
          <tr className="font-normal">
            <th className="border-t-[1px] border-table_border w-[5.9490968801%]">번호</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[15.68308703%]">아이디(이메일)</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[25.8078817734%]">프롬프트 / 이미지</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[10.0476190476%]">생년월일</th>
            <th className="border-t-[1px] border-table_border w-[6.039408867%]">노출 활성화</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border text-center">
              <button onClick={handleClickPromptButton}>{dummyUserData.promptId}</button>
            </td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border text-center"></td>
            <td className="bg-white border-b-[1px] border-table_border text-center">
              <Switch />
            </td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
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
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
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
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>
          <tr className="h-[4.5625rem]">
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

export default HomepageContent;
