'use client';
import { FetchImageData } from '@/types/designSelectBoxType';
import { useEffect, useState } from 'react';
import { useImages } from './useImages';

function useShowBox() {
  const [userInput, setUserInput] = useState({
    keyword: '',
    style: '',
  });

  const { data, isLoading: isCreateLoading, error, createMutation } = useImages();

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

  const handleCreateDesign = async () => {
    console.log(userInput);
    //await refetch();
    createMutation.mutateAsync({ keyword: userInput.keyword, style: userInput.style });
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
    userInput,
    setUserInput,
    handleCreateDesign,
    handleDesignSelection,
    handleStartDesign,
    show,
    isLoading,
    isCreateLoading,
    data,
    error,
    createMutation,
  };
}

export default useShowBox;
