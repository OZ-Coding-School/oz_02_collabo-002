'use client';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { useRouter } from 'next/navigation';

const BAR_COLOR = ['#4986e6', '#78E8C1', '#3AD49E', '#214832', '#003080', '#D6D6D6'];
const dummy_data = {
  '1번': [25, 10, 20, 100],
  '2번': [25, 10, 20, 100],
  '3번': [25, 10, 20, 100],
  '4번': [25, 10, 20, 100],
  '5번': [25, 10, 20, 100],
  '6번': [25, 10, 20, 100],
  //각 연령별 1번 고른 횟수
};

function BarChart({ title }: { title: string }) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return; // 캔버스 레퍼런스가 없으면 초기화 x

    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['10대', '20대', '30대', '40대'],
        datasets: [
          {
            label: '1번',
            data: dummy_data['1번'],
            backgroundColor: BAR_COLOR[0],
            borderRadius: 10,
            stack: 'stack 0',
          },
          {
            label: '2번',
            data: dummy_data['2번'],
            backgroundColor: BAR_COLOR[1],
            borderRadius: 10,
            stack: 'stack 0',
          },
          {
            label: '3번',
            data: dummy_data['3번'],
            backgroundColor: BAR_COLOR[2],
            borderRadius: 10,
            stack: 'stack 0',
          },
          {
            label: '4번',
            data: dummy_data['4번'],
            backgroundColor: BAR_COLOR[3],
            borderRadius: 10,
            stack: 'stack 0',
          },
          {
            label: '5번',
            data: dummy_data['5번'],
            backgroundColor: BAR_COLOR[4],
            borderRadius: 10,
            stack: 'stack 0',
          },
          {
            label: '6번',
            data: dummy_data['6번'],
            backgroundColor: BAR_COLOR[5],
            borderRadius: 10,
            stack: 'stack 0',
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
          },
        },
        plugins: {
          legend: {
            onClick: (e, legendItem, legend) => {
              router.push(`/admin/manage/form/result?legend=${legendItem.text}`, { scroll: false });
            },
            labels: {
              pointStyle: 'rect',
            },
          },
        },
      },
    });

    return () => {
      barChart.destroy();
    };
  }, [router]);

  return (
    <div className="m-[2rem] relative w-[90%] flex justify-center flex-col">
      <h2 className="text-[1.25rem]">{title}</h2>
      <div className="bg-white rounded-xl">
        <canvas className="m-[2rem] relative z-10" ref={chartRef} />
      </div>
    </div>
  );
}

export default BarChart;
