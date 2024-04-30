import React, { useState } from 'react';

function ManagerButton() {
  const [isActive, setIsActive] = useState(false);

  function handleClickButton() {
    setIsActive(state => !state);
  }
  return (
    <button
      onClick={handleClickButton}
      className={`w-[80%] h-[2.375rem] hover:bg-btn_border text-white rounded-[4px] ${
        isActive ? 'bg-text' : 'bg-btn_bg'
      }`}>
      {isActive ? '승인' : '승인 취소'}
    </button>
  );
}

export default ManagerButton;
