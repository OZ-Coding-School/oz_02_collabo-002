'use client';
import Header from '@/containers/admin/common/Header';
import SideBar from '@/containers/admin/common/SideBar';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function AdminLayout({ children }: { children: React.ReactNode }) {
  const currenPath = usePathname();
  const shouldRender = currenPath.startsWith('/admin/manage');
  const [activeContent, setActiveContent] = useState('manager');
  return (
    <section className="bg-bg h-full">
      <Header />
      <div className={`${shouldRender && 'flex w-full min-w-[1080px]'}`}>
        {shouldRender && <SideBar setActiveContent={setActiveContent} activeContent={activeContent} />}
        <main>{children}</main>
      </div>
    </section>
  );
}

export default AdminLayout;
