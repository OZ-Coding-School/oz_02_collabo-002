'use client';
import { ImageInfo } from '@/types/designSelectBoxType';
import Image from 'next/image';
import React, { useState } from 'react';

interface ImageItemProps {
  onSelect: (image: ImageInfo) => void;
  image: ImageInfo;
  isSelected: boolean;
}

function ImageItem({ onSelect, image, isSelected }: ImageItemProps) {
  const [size, setSize] = useState({ width: 87, height: 87 });

  return (
    <li
      onClick={() => {
        onSelect(image);
      }}
      className={`border-[0.25rem] flex justify-center items-center ${isSelected && 'border-main_active'} `}>
      <Image src={image.img_url} width={size.width} height={size.height} alt="ai 디자인" priority />
    </li>
  );
}

export default ImageItem;
