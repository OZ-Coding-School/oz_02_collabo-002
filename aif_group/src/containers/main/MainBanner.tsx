import DesignStartButton from '@/components/DesignStartButton';
import Image from 'next/image';

export default function MainBanner() {
  return (
    <main className="w-full h-banner bg-[url('/images/main_banner.png')] bg-cover relative bg-center">
      <div className="absolute top-2/4 left-[36%] flex flex-col items-end transform -translate-x-1/2 -translate-y-1/2">
        <Image alt="main_banner_logo" src={'/icons/main_banner_logo.svg'} width={451} height={56} />
        <div className=" mt-[1.125rem] mr-[4px]">
          <DesignStartButton />
        </div>
      </div>
    </main>
  );
}
