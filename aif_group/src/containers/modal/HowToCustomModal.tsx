'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function HowToCustomModal() {
  const router = useRouter();

  return (
    <main id="modal-component">
      <div className="flex flex-col justify-start items-center mt-[3rem]">
        <div className="font-bold text-[3.725rem]">How to Custom</div>
        <div className="text-[1.6rem]">AIF 디자인 툴 사용 방법입니다.</div>
        <div className="w-[65rem] h-1 border-t border-black mt-[1.6875rem]"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          alt="how_to_custom_step1"
          src={'/images/how_to_custom_step1.svg'}
          width={1017}
          height={788}
          className="mt-[2.6rem]"
        />
        <Image
          alt="how_to_custom_step2"
          src={'/images/how_to_custom_step2.svg'}
          width={1017}
          height={788}
          className="mt-[4.125rem]"
        />
        <Image
          alt="how_to_custom_step3"
          src={'/images/how_to_custom_step3.svg'}
          width={1017}
          height={788}
          className="mt-[4.125rem] mb-[5rem]"
        />
        <button
          className="w-[10rem] h-[3.5rem] bg-black group hover:bg-main_active active:bg-main_active flex justify-center items-center rounded-[4px] mb-2"
          onClick={() => router.replace('/design')}>
          <div className='font-bold text-[1.4rem] text-main_active group-hover:text-black group-active:text-black"'>
            창닫기
          </div>
        </button>
      </div>
    </main>
  );
}

export default HowToCustomModal;
