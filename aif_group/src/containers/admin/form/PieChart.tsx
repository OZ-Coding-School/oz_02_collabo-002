'use client';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import FormModal from '@/containers/modal/FormModal';

function PieChart({ title }) {
  const chartRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLegend, setSelectedLegend] = useState('');

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['10대', '20대', '30대', '40대', '기타'],
        datasets: [
          {
            data: [25, 10, 20, 30, 15],
            backgroundColor: ['#4986e6', '#003080', '#78E8C1', '#3AD49E', '#D6D6D6'],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            onClick: (e, legendItem, legend) => {
              setSelectedLegend(legendItem.text);
              setIsModalOpen(true);
            },
            position: 'right',
            align: 'end',
            labels: {
              pointStyle: 'circle',
              usePointStyle: true,
            },
          },
        },
      },
    });

    return () => {
      pieChart.destroy();
    };
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="m-[2rem] relative w-[90%]">
      <h2 className="text-[1.25rem]">{title}</h2>
      <canvas className="relative z-10 w-[]" ref={chartRef} />
      <FormModal isModalOpen={isModalOpen} selectedLegend={selectedLegend} closeModal={closeModal} />
      <div className="w-[100%] h-[70%] bg-white absolute bottom-[0px] left-[30px] rounded-xl" />
    </div>
  );
}

export default PieChart;
