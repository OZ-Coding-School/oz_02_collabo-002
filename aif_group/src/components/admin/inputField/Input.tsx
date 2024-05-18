import React from 'react';

interface InputProps {
  title: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ title, type, placeholder, onChange }: InputProps) {
  return (
    <div className="flex justify-between items-center mb-[2.125rem]">
      <label htmlFor={type} className="font-bold">
        {title}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-[22.8125rem] h-[3rem] px-[1.5625rem]"
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
