'use client';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import FormModal from '@/containers/modal/FormModal';

function BarChart({ title }) {
  const chartRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLegend, setSelectedLegend] = useState('');
  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['10대', '20대', '30대', '40대'],
        datasets: [
          {
            label: '1번',
            data: [25, 10, 20, 100, 10, 50, 20],
            backgroundColor: ['#4986e6', '#78E8C1', '#3AD49E', '#214832', '#003080', '#D6D6D6'],
            borderRadius: 10,
          },
          {
            label: '2번',
            data: [25, 10, 20, 100, 50, 20],
            backgroundColor: ['#4986e6', '#78E8C1', '#3AD49E', '#214832', '#003080', '#D6D6D6'],
            borderRadius: 10,
          },
          {
            label: '3번',
            data: [25, 10, 20, 100, 50, 20],
            backgroundColor: ['#4986e6', '#78E8C1', '#3AD49E', '#214832', '#003080', '#D6D6D6'],
            borderRadius: 10,
          },
          {
            label: '4번',
            data: [25, 10, 20, 100, 50, 20],
            backgroundColor: ['#4986e6', '#78E8C1', '#3AD49E', '#214832', '#003080', '#D6D6D6'],
            borderRadius: 10,
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
          },
        },

        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      barChart.destroy();
    };
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="m-[2rem] relative w-full">
      <h2 className="text-[1.25rem]">{title}</h2>
      <canvas className="relative z-10" ref={chartRef} />
      <FormModal isModalOpen={isModalOpen} selectedLegend={selectedLegend} closeModal={closeModal} />
    </div>
  );
}

export default BarChart;
