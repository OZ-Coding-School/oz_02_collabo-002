'use client';
import Image from 'next/image';
import React from 'react';
import { IconLogo } from '../../../../public/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const currentPath = usePathname();
  const shouldRender = currentPath.startsWith('/admin/manage');

  return (
    <header className="w-full h-header py-[2.3125rem] flex justify-center items-center px-[3rem] sm:pl-[1.8125rem] bg-white">
      <div className="w-[78.75rem] flex flex-row justify-between items-center ">
        <Link href={'/'}>
          <Image alt="logo" src={IconLogo} width={237} height={68} />
        </Link>
        {shouldRender && (
          <div>
            <button className="text-[1.25rem]">로그아웃</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
