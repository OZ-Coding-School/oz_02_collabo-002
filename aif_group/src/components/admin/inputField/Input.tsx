import React from 'react';

function Input({ title, type, placeholder }) {
  return (
    <div className="flex justify-between items-center mb-[2.125rem]">
      <label htmlFor={type} className="font-bold">
        {title}
      </label>
      <input type={type} typeof={type} placeholder={placeholder} className="w-[22.8125rem] h-[3rem] px-[1.5625rem]" />
    </div>
  );
}

export default Input;
