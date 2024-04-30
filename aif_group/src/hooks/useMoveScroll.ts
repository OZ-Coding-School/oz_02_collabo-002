'use client';
import { useRef } from 'react';

function useMoveScroll() {
  const element = useRef<HTMLDivElement | null>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return { element, onMoveToElement };
}

export default useMoveScroll;
