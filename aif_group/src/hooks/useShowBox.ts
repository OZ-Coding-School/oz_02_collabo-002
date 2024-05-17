'use client';
import { useState } from 'react';
import { createImages } from '@/services/createImages';
import { getImages } from '@/services/getImages';
import { ImageInfo } from '@/types/designSelectBoxType';
import { useAppSelector } from './reduxHooks';

function useShowBox() {
  const selectedImage = useAppSelector(state => state.ref);
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
      await createImages(userInput.keyword, userInput.style);
      const response = await getImages();
      if (response) {
        setCreatedImages(state => state.concat(response));
      }
      setIsLoading(state => ({ ...state, create: false }));
      setShow(state => ({
        ...state,
        selectBox: true,
        previewBox: false,
      }));

      setDisable(true);
      //setDesignCreateCount(prev => prev + 1);
    } else {
      setShow(state => ({ ...state, errorAlert3: true }));
    }
  };

  const handleDesignSelection = () => {
    if (selectedImage.length > 0) {
      setIsLoading(state => ({ ...state, select: true }));
      setTimeout(() => {
        setIsLoading(state => ({ ...state, select: false }));
      }, 2000);
      setShow(state => ({ ...state, previewBox: true }));
    }
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
    createdImages,
    disable,
    designCreateCount,
    setShow,
    setDisable,
  };
}

export default useShowBox;
