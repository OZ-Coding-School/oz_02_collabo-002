'use client';
import { FetchImageData } from '@/types/designSelectBoxType';
import { useState } from 'react';
import { useImages } from './useImages';

function useShowBox() {
  const [userInput, setUserInput] = useState({
    keyword: '',
    style: '',
  });

  const {
    data,
    isLoading: isCreateLoading,
    error,
    refetch,
  }: FetchImageData = useImages(userInput.keyword, userInput.style);

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

  const handleCreateDesign = async (keyword: string, style: string) => {
    setUserInput(state => ({ keyword, style }));
    console.log(userInput.keyword, userInput.style);
    await refetch();
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

  return {
    handleCreateDesign,
    handleDesignSelection,
    handleStartDesign,
    show,
    isLoading,
    isCreateLoading,
    data,
    error,
  };
}

export default useShowBox;
