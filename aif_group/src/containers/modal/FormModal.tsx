'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function FormModal() {
  const searchParams = useSearchParams();
  const selectedLegend = searchParams.get('legend');
  const title =
    selectedLegend === '기타' ? '기타 답변' : selectedLegend === '예' ? '서비스 사용 용도' : ' "아니요"를 선택한 이유';

  return (
    <main className="w-[63.5625rem] flex justify-center items-center">
      <div className="flex justify-end"></div>
      <table className="w-full">
        <thead className=" h-[4.5625rem] bg-table_bg">
          <tr className="font-normal">
            <th className="border-t-[1px] border-table_border w-[10%] border-r-[1px]">No.</th>
            <th className="border-t-[1px] border-table_border w-[85%]">{title}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border border-r-[1px]"></td>
            <td className="bg-white border-b-[1px] border-table_border text-center"></td>
          </tr>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border border-r-[1px]"></td>
            <td className="bg-white border-b-[1px] border-table_border text-center"></td>
          </tr>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border border-r-[1px]"></td>
            <td className="bg-white border-b-[1px] border-table_border text-center"></td>
          </tr>
          <tr className="h-[3.375rem]">
            <td className="bg-white border-b-[1px] border-table_border border-r-[1px]"></td>
            <td className="bg-white border-b-[1px] border-table_border text-center"></td>
          </tr>

          <tr className="h-[3.375rem]">
            <td className="bg-text border-b-[1px] border-table_border"></td>
            <td className="bg-text border-b-[1px] border-table_border"></td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default FormModal;
