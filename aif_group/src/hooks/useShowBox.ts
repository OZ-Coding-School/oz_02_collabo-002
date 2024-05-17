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
    startBox: true,
    selectBox: false,
    previewBox: false,
    errorAlert2: false,
    errorAlert3: false,
  });

  const [isLoading, setIsLoading] = useState({
    create: false,
    select: false,
  });

  const [step, setStep] = useState(1);
  const [designCreateCount, setDesignCreateCount] = useState(0);

  const handleStartDesign = () => {
    setShow(state => ({
      ...state,
      alert: false,
    }));
  };

  const [disable, setDisable] = useState(false);

  const handleCreateDesign = async () => {
    if (designCreateCount < 2) {
      console.log(userInput);
      // await refetch();
      setShow(state => ({
        ...state,
        startBox: false,
        selectBox: true,
        previewBox: false,
      }));
      setStep(2);
      setDisable(true);
      //setDesignCreateCount(prev => prev + 1);
    } else {
      setShow(state => ({ ...state, errorAlert3: true }));
    }
  };

  const handleDesignSelection = async () => {
    setIsLoading(state => ({ ...state, select: true }));
    console.log(1);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(state => ({ ...state, select: false }));
      }, 1000);
      resolve('true');
    });
    setStep(3);
    setShow(state => ({ ...state, selectBox: false, previewBox: true }));
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
    step,
    isLoading,
    isCreateLoading,
    data,
    error,
    disable,
    designCreateCount,
    setShow,
    setDisable,
  };
}

export default useShowBox;
