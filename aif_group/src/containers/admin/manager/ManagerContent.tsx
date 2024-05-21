'use client';

import ManagerButton from '@/components/admin/button/ManagerButton';
import { getManagers } from '@/services/admin/getManagers';
import { Switch } from 'antd';
import React, { useEffect, useState } from 'react';
const dummyData = [
  {
    index: 1,
    id: 1,
    name: '호범',
    phone_number: '010-4799-5022',
    status: 'admin',
    authority: 'staff',
    isApproval: true,
    isAccept: false,
  },
];

function ManagerContent() {
  const [managers, setManagers] = useState([]);
  useEffect(() => {
    //const data = getManagers();
    //console.log(data);
  }, []);
  const [isApproval, setIsApproval] = useState(dummyData[0].isApproval);
  const [isAccept, setIsAccept] = useState(dummyData[0].isAccept);
  function handleOnClickSwitch() {
    dummyData[0].isApproval = !dummyData[0].isApproval;
    setIsApproval(dummyData[0].isApproval);
    // 권한 변경 api 호출
  }
  function handleOnClickButton() {
    dummyData[0].isAccept = !dummyData[0].isAccept;
    setIsAccept(dummyData[0].isAccept);
    // 권한 변경 api 호출
  }
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
        <tbody className="text-center">
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border">{dummyData[0].index}</td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border">{dummyData[0].id}</td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border">{dummyData[0].name}</td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border">{dummyData[0].phone_number}</td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border">{dummyData[0].status}</td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border text-center">
              <div>
                <Switch checked={isApproval} onClick={handleOnClickSwitch} />
              </div>
              {/* 양방향 바인딩이 필요 */}
            </td>
            <td className="bg-white border-b-[1px] border-table_border text-center">
              <ManagerButton isAccept={isAccept} onClick={handleOnClickButton} />
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
