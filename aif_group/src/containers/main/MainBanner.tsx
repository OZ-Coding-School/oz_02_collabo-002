import DesignStartButton from '@/components/DesignStartButton';
import Image from 'next/image';

export default function MainBanner() {
  return (
    <main className="w-full h-banner relative">
      <div className="w-full h-full relative">
        <Image alt="main-banner" src={'/images/main_banner.png'} fill className="object-cover" priority />
      </div>
      <div className="absolute top-2/4 left-[36%] flex flex-col items-end transform -translate-x-1/2 -translate-y-1/3">
        <Image alt="main-banner-logo" src={'/icons/main_banner_logo.svg'} width={451} height={56} />
        <div className=" mt-[1.125rem] mr-[4px]">
          <DesignStartButton />
        </div>
      </div>
    </main>
  );
}
