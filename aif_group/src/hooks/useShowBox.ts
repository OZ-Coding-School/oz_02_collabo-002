'use client';
import { createImages } from '@/services/createImages';
import { ImageInfo } from '@/types/designSelectBoxType';
import { useRef, useState } from 'react';

function useShowBox() {
  const [userInput, setUserInput] = useState({
    keyword: '',
    style: '',
  });
  const [createdImages, setCreatedImages] = useState<ImageInfo[]>([]);

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

  const step = useRef(1);
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
      setIsLoading(state => ({ ...state, create: true }));
      const response = await createImages(userInput.keyword, userInput.style);
      if (response !== undefined) {
        setCreatedImages(state => state.concat(response));

        setIsLoading(state => ({ ...state, create: false }));

        setShow(state => ({
          ...state,
          startBox: false,
          selectBox: true,
          previewBox: false,
        }));
        step.current = 2;
        setDisable(true);
        setDesignCreateCount(prev => prev + 1);
      } else {
        setIsLoading(state => ({ ...state, create: false }));
        return;
      }
    } else {
      setShow(state => ({ ...state, errorAlert3: true }));
    }
  };

  const handleDesignSelection = async () => {
    setIsLoading(state => ({ ...state, select: true }));
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(state => ({ ...state, select: false }));
      }, 1000);
      resolve(true);
    });
    step.current = 3;
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
    createdImages,
    disable,
    designCreateCount,
    setShow,
    setDisable,
  };
}

export default useShowBox;
