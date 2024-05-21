import React, { useState } from 'react';

function ManagerButton({ isAccept, onClick }: { isAccept: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-[80%] h-[2.375rem] hover:bg-btn_border text-white rounded-[4px] ${
        isAccept ? 'bg-text' : 'bg-btn_bg'
      }`}>
      {isAccept ? '승인' : '승인 취소'}
    </button>
  );
}

export default ManagerButton;
