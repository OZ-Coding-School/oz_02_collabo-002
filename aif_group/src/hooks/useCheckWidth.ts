'use client';
import { useEffect, useState } from 'react';

function useCheckWidth() {
  const [innerWidth, setInnerWidth] = useState(1220);

  useEffect(() => {
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
