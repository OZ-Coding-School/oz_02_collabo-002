import React from 'react';

function StatisticContent() {
  return (
    <div className="mt-[3.3125rem] mx-[5.4375rem] flex flex-col items-center">
      <div className="mb-[4.375rem] flex gap-[2.875rem] w-[100%] justify-around">
        <select className="min-w-[20%] h-[3.6875rem] border-[#afafaf] border-[1px] rounded-[15px] shadow-xl flex justify-center items-center gap-[1.6875rem] text-[1.5rem] px-[1rem] text-center">
          <option value="일간">일간</option>
          <option value="주간">주간</option>
        </select>
        <p className="w-[80%] h-[3.6875rem] border-[#afafaf] border-[1px] rounded-[15px] shadow-xl items-center flex justify-center text-[1.5rem]">
          날짜
        </p>
      </div>
      <table className="w-[100%] table-fixed text-[#828282] text-[1rem]">
        <thead className="h-[4.5625rem] bg-table_bg">
          <tr className="font-normal">
            <th className="border-t-[1px] border-table_border w-[8.9490968801%]">날짜</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[9.5238095238%]">방문자수</th>
            <th className="border-t-[1px] border-x-[1px] border-table_border w-[8.9490968801%]">회원가입수</th>
            <th className="border-t-[1px] border-table_border w-[14.039408867%]">다운로드수</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border text-center"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-x-[1px] border-b-[1px] border-table_border"></td>
            <td className="bg-white border-b-[1px] border-table_border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatisticContent;
