import Image from 'next/image';
import React from 'react';
import { IconLogo } from '../../../public/icons';
import Link from 'next/link';

function Header() {
  return (
    <header className="w-full h-header py-[37px] flex justify-center items-center pl-[10.3125rem] sm:pl-[1.8125rem] bg-white">
      <div className="w-[78.75rem] flex flex-row justify-start items-center ">
        <Link href={'/'}>
          <Image alt="logo" src={IconLogo} width={237} height={68} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
