'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface ImageItemProps {
  onSelect: (image: string, idx: number) => void;
  image: string;
  idx: number;
  isSelected: boolean;
  isCurrent: boolean;
}

function ImageItem({ onSelect, image, idx, isSelected, isCurrent }: ImageItemProps) {
  const [size, setSize] = useState({ width: 87, height: 87 });

  return (
    <li
      onClick={() => {
        onSelect(image, idx);
      }}
      className={`border-[0.25rem] flex justify-center items-center ${isSelected && 'border-main_active'} ${
        isCurrent && ''
      }`}>
      <Image src={image} width={size.width} height={size.height} alt="ai 디자인" />
    </li>
  );
}

export default ImageItem;
