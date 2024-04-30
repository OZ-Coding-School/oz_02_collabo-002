import React from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart';

function FormContent() {
  return (
    <div className="p-[2rem] w-[100%]" id="form-content">
      <h1 className="text-[2rem]">설문조사 통계</h1>
      <div className="grid grid-cols-2 w-[100%] gap-[2rem] p-[2rem]">
        <PieChart title={'연령대가 어떻게 되시나요?'} />
        <PieChart title={'AI 티셔츠 가격'} />
        <PieChart title={'서비스 만족도'} />
        <PieChart title={'AIF 서비스 사용 여부'} />
      </div>
      <div>
        <BarChart title={'서비스 개선되면 좋을 부분'} />
      </div>
    </div>
  );
}

export default FormContent;
