'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { IconSample } from '../../public/icons';

function ImageItem() {
  const [size, setSize] = useState({ width: 87, height: 87 });
  return (
    <li className="border-[0.25rem] border-white hover:border-main_active flex justify-center items-center">
      <Image src={IconSample} width={size.width} height={size.height} alt="ai 디자인" />
    </li>
  );
}

export default ImageItem;
