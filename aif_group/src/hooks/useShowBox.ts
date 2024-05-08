'use client';
import { useState } from 'react';

function useShowBox() {
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

  const handleCreateDesign = () => {
    if (designCreateCount < 2) {
      setIsLoading(state => ({ ...state, create: true }));
      setTimeout(() => {
        setIsLoading(state => ({ ...state, create: false }));
      }, 1000);
      setShow(state => ({ ...state, selectBox: true, previewBox: false }));
      setDesignCreateCount(prev => prev + 1);
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
    handleCreateDesign,
    handleDesignSelection,
    handleStartDesign,
    handleRetryDesign,
    show,
    isLoading,
    setShow,
    designCreateCount,
  };
}

export default useShowBox;
