import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full h-header px-[20.625rem] py-[37px] flex justify-center items-center">
      <div className="w-[78.75rem] flex flex-row justify-between items-center">
        <button>
          <Image alt="logo" src={'/icons/logo.svg'} width={237} height={68} />
        </button>
        <div className="w-[49.8125rem] flex justify-between ml-20">
          <button className="text-[1.375rem] text-[#3A3A3A] font-medium">about</button>
          <button className="text-[1.375rem] text-[#3A3A3A] font-medium">생성 이미지</button>
          <button className="text-[1.375rem] text-[#3A3A3A] font-medium">사용 방법</button>
          <button className="text-[1.375rem] w-[12.5rem] h-[3.25rem] bg-black text-main_active group hover:bg-main_active active:bg-main_active rounded-md font-bold">
            <div className="group-hover:text-black group-active:text-black">디자인 시작하기</div>
          </button>
        </div>
      </div>
    </div>
  );
}
