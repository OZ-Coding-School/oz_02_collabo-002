import DesignStartButton from '@/components/DesignStartButton';
import SideNavigationMenu from '@/components/SideNavigationMenu';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MobileMainBanner() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (showSideMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [showSideMenu]);

  return (
    <main className="w-full h-[50rem] relative">
      <div className="w-full h-full relative">
        <div className="w-full h-[8rem] flex justify-between items-center absolute top-0 z-10">
          <button onClick={() => router.refresh()}>
            <Image
              alt="main-logo"
              src={'/icons/logo_mint.svg'}
              width={300}
              height={100}
              className="ml-[1.75rem] mt-[1.75rem]"
            />
          </button>
          <button onClick={() => setShowSideMenu(true)}>
            <Image alt="hamburger-menu" src={'/icons/hamburger_icon.svg'} width={30} height={30} className="mr-6" />
          </button>
        </div>
        <div className="w-full h-full relative">
          <Image alt="main-banner" src={'/images/main_banner_mobile.png'} fill className="object-cover" priority />
        </div>
      </div>
      <div className="absolute bottom-10 left-2/4 flex flex-col justify-end items-end transform -translate-x-1/2 -translate-y-1/2">
        <DesignStartButton />
      </div>
      {showSideMenu && <SideNavigationMenu setShowSideMenu={() => setShowSideMenu(false)} />}
    </main>
  );
}
