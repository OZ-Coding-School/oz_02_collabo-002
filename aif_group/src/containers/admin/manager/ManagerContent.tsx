'use client';

import ManagerButton from '@/components/admin/button/ManagerButton';
import { Switch } from 'antd';
import React from 'react';

function ManagerContent() {
  return (
    <div className="mt-[3.3125rem] mx-[5.4375rem]">
      <table className="w-[100%] table-fixed text-[#828282] text-[1rem]">
        <thead className="h-[4.5625rem] bg-table_bg">
          <tr className="font-normal">
            <th className="border-t-[1px] border-table_border w-[8.9490968801%]">번호</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[26.68308703%]">아이디</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[12.8078817734%]">이름</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[19.0476190476%]">연락처</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[9.5238095238%]">등급</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[8.9490968801%]">권한</th>
            <th className="border-t-[1px] border-table_border w-[14.039408867%]">가입 승인</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border text-center">
              <div>
                <Switch />
              </div>
            </td>
            <td className="bg-white border-b-[1px] border-table_border text-center">
              <ManagerButton />
            </td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
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
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
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
            <td className="bg-table_bg border-b-[1px] border-table_border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ManagerContent;
