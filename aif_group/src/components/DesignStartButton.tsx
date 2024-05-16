'use client';
import { useRouter } from 'next/navigation';

export default function DesignStartButton() {
  const router = useRouter();

  return (
    <button
      className="w-[21.875rem] h-[4.375rem] bg-black group hover:bg-main_active active:bg-main_active flex justify-center items-center rounded-[10px] md:w-[17.5rem] md:h-[3.8rem] sm:w-[15.625rem] sm:h-[3.4rem] xm:w-[13rem] xm:h-[3rem]"
      onClick={() => router.push('/design')}>
      <div className="font-[600] text-[2rem] text-main_active group-hover:text-black group-active:text-black md:text-[1.7rem] sm:text-2xl xm:text-xl">
        디자인 시작하기
      </div>
    </button>
  );
}
