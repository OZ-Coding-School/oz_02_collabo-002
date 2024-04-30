'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { IconSample } from '../../../public/icons';

interface ImageItemProps {
  onSelect: (image: string) => void;
  image: string;
}

function ImageItem({ onSelect, image }: ImageItemProps) {
  const [size, setSize] = useState({ width: 87, height: 87 });
  const [isSelected, setIseSelected] = useState(false);

  return (
    <li
      onClick={() => {
        setIseSelected(state => !state);
        onSelect(image);
      }}
      className={`border-[0.25rem] border-white hover:border-main_passive flex justify-center items-center ${
        isSelected ? 'border-main_active' : ''
      }`}>
      <Image src={IconSample} width={size.width} height={size.height} alt="ai 디자인" />
    </li>
  );
}

export default ImageItem;
