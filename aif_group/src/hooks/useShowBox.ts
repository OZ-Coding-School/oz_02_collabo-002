'use client';
import { useState } from 'react';

function useShowBox() {
  const [show, setShow] = useState({
    alert: true,
    selectBox: false,
    previewBox: false,
  });
  const [isLoading, setIsLoading] = useState({
    create: false,
    select: false,
  });

  const handleStartDesign = () => {
    setShow(state => ({
      ...state,
      alert: false,
    }));
  };

  const handleCreateDesign = () => {
    if (!show.selectBox) {
      setIsLoading(state => ({
        ...state,
        create: true,
      }));
      setTimeout(
        () =>
          setIsLoading(state => ({
            ...state,
            create: false,
          })),
        1000,
      );
    }
    setShow(state => ({
      ...state,
      selectBox: true,
      previewBox: false,
    }));
  };

  const handleDesignSelection = () => {
    if (!show.previewBox) {
      setIsLoading(state => ({
        ...state,
        select: true,
      }));
      setTimeout(
        () =>
          setIsLoading(state => ({
            ...state,
            select: false,
          })),
        1000,
      );
    }
    setShow(state => ({
      ...state,
      previewBox: true,
    }));
  };

  return { handleCreateDesign, handleDesignSelection, handleStartDesign, show, isLoading };
}

export default useShowBox;
