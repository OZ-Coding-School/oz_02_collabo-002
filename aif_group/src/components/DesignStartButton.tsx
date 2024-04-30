'use client';
import { useRouter } from 'next/navigation';

export default function DesignStartButton() {
  const router = useRouter();

  return (
    <button
      className="w-[21.875rem] h-[4.375rem] bg-main_active group hover:bg-black active:bg-black flex justify-center items-center rounded-[10px]"
      onClick={() => router.push('/design')}>
      <div className="font-medium text-[2rem] group-hover:text-main_active group-active:text-main_active">
        디자인 시작하기
      </div>
    </button>
  );
}
