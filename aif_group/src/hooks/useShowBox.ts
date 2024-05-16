'use client';
import { FetchImageData } from '@/types/designSelectBoxType';
import { useEffect, useState } from 'react';
import { useImages } from './useImages';

function useShowBox() {
  const [userInput, setUserInput] = useState({
    keyword: '',
    style: '',
  });

  const { data, isLoading: isCreateLoading, error, refetch } = useImages(userInput.keyword, userInput.style);

  const [show, setShow] = useState({
    alert: true,
    selectBox: false,
    previewBox: false,
    errorAlert2: false,
    errorAlert3: false,
  });

  const [isLoading, setIsLoading] = useState({
    create: false,
    select: false,
  });

  const [designCreateCount, setDesignCreateCount] = useState(0);

  const handleStartDesign = () => {
    setShow(state => ({
      ...state,
      alert: false,
    }));
  };

  const handleCreateDesign = async () => {
    if (designCreateCount < 2) {
      console.log(userInput);
      refetch();
      setShow(state => ({
        ...state,
        selectBox: true,
        previewBox: false,
      }));
      //setDesignCreateCount(prev => prev + 1);
    } else {
      setShow(state => ({ ...state, errorAlert3: true }));
    }
  };

  const handleDesignSelection = () => {
    setIsLoading(state => ({ ...state, select: true }));
    setTimeout(() => {
      setIsLoading(state => ({ ...state, select: false }));
    }, 1000);
    setShow(state => ({ ...state, previewBox: true }));
  };

  const handleRetryDesign = () => {
    if (designCreateCount >= 2) {
      setShow(prev => ({ ...prev, errorAlert3: true }));
    } else {
      setShow(prev => ({ ...prev, errorAlert2: true }));
    }
  };

  return {
    userInput,
    setUserInput,
    handleCreateDesign,
    handleDesignSelection,
    handleRetryDesign,
    handleStartDesign,
    show,
    isLoading,
    isCreateLoading,
    data,
    designCreateCount,
    setShow,
    error,
  };
}

export default useShowBox;
