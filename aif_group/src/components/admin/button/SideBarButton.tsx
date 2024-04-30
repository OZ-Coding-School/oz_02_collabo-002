import React, { ReactNode } from 'react';

interface ButtonProps {
  onSelect: (contentId: string) => void;
  children: ReactNode;
  contentId: string;
  activeContent: string;
}

function SideBarButton({ onSelect, children, contentId, activeContent }: ButtonProps) {
  return (
    <button
      className={`w-[18.4375rem] h-[5.6875rem] mb-[1.6875rem] hover:bg-main_passive 
      ${activeContent === `${contentId}` ? 'bg-main_active' : 'bg-btn_bg'}`}
      onClick={() => onSelect(contentId)}>
      {children}
    </button>
  );
}

export default SideBarButton;
