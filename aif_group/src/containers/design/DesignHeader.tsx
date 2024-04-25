import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full h-header px-[20.625rem] py-[37px] flex justify-center items-center">
      <div className="w-[78.75rem] flex flex-row justify-between items-center">
        <button>
          <Image alt="logo" src={'/icons/logo.svg'} width={237} height={68} />
        </button>

        <div className="w-[49.8125rem] flex justify-center ml-20">
          <button className="text-xl font-medium w-[13.75rem] h-[3.25rem] bg-black text-main_active rounded-md flex justify-around items-center mr-10">
            <Image alt="question_icon" src={'/icons/question_icon.svg'} width={37.38} height={31.5} />
            <p>디자인 하는 방법</p>
          </button>
          <button className="text-xl font-medium w-[13.75rem] h-[3.25rem] bg-black text-main_active rounded-md flex justify-around items-center">
            <Image alt="image_icon" src={'/icons/image_icon.svg'} width={34.14} height={32.45} />
            <p>생성 이미지 샘플</p>
          </button>
        </div>
      </div>
    </div>
  );
}
