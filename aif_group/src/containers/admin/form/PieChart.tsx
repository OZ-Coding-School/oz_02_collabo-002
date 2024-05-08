'use client';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useRouter } from 'next/navigation';

function PieChart({ title }: { title: string }) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

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
              router.push(`/admin/manage/form/result?legend=${legendItem.text}`, { scroll: false });
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
  }, [router]);

  return (
    <div className="m-[2rem] relative w-[90%]">
      <h2 className="text-[1.25rem]">{title}</h2>
      <canvas className="relative z-10 " ref={chartRef} />
      <div className="w-[100%] h-[70%] bg-white absolute bottom-[0px] left-[30px] rounded-xl" />
    </div>
  );
}

export default PieChart;
