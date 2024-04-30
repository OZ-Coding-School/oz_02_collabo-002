import React from 'react';

interface InputProps {
  title: string;
  type: string;
  placeholder: string;
}

function Input({ title, type, placeholder }: InputProps) {
  return (
    <div className="flex justify-between items-center mb-[2.125rem]">
      <label htmlFor={type} className="font-bold">
        {title}
      </label>
      <input type={type} placeholder={placeholder} className="w-[22.8125rem] h-[3rem] px-[1.5625rem]" />
    </div>
  );
}

export default Input;
