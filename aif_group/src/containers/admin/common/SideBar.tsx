import SideBarButton from '@/components/admin/button/SideBarButton';
import { useRouter } from 'next/navigation';
import React from 'react';

interface SideBarProps {
  setActiveContent: (contentId: string) => void;
  activeContent: string;
}

function SideBar({ setActiveContent, activeContent }: SideBarProps) {
  const router = useRouter();

  function handleButtonClick(contentId: string) {
    router.replace(`/admin/manage/${contentId}`, { scroll: true });
    setActiveContent(contentId);
  }

  return (
    <aside className="w-[22.0625rem] bg-white px-[1.8125rem] pt-[1.8125rem] pb-[20.875rem]">
      <div>
        <SideBarButton onSelect={handleButtonClick} contentId="manager" activeContent={activeContent}>
          관리자 설정
        </SideBarButton>
        <SideBarButton onSelect={handleButtonClick} contentId="user" activeContent={activeContent}>
          유저정보 관리
        </SideBarButton>
        <SideBarButton onSelect={handleButtonClick} contentId="statistic" activeContent={activeContent}>
          통계
        </SideBarButton>
        <SideBarButton onSelect={handleButtonClick} contentId="form" activeContent={activeContent}>
          설문
        </SideBarButton>
        <SideBarButton onSelect={handleButtonClick} contentId="homepage" activeContent={activeContent}>
          게시판 관리
        </SideBarButton>
      </div>
    </aside>
  );
}

export default SideBar;
