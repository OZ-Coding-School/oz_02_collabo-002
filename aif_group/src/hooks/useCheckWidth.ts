'use client';
import { useEffect, useRef, useState } from 'react';

function useCheckWidth() {
  const [innerWidth, setInnerWidth] = useState(1220);
  //   const innerWidth = useRef<number>(1220);
  useEffect(() => {
    // innerWidth.current = window.innerWidth;
    setInnerWidth(window.innerWidth);
  }, []);

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [innerWidth]);

  return innerWidth;
}

export default useCheckWidth;
