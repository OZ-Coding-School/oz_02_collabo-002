'use client';
import { MAX_SELECTIONS } from '@/constants';
import { ImageInfo } from '@/types/designSelectBoxType';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { RootState } from '@/states/store';
import { deleteImgFile, resetImgFile, setImgFileUrl } from '@/states/imageSlice';

function useSelectImage(step: number) {
  const [isDisabled, setIsDisabled] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [currentImage, setCurrentImage] = useState<ImageInfo>();

  const selectImage = useAppSelector((state: RootState) => state.ref);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (step === 2) {
      dispatch(resetImgFile());
    }
  }, [step]);

  function handleDisabled(id: number) {
    if (selectImage.length === MAX_SELECTIONS && !selectImage.filter(image => image.img_id === id)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }

  function handleSelectImage(selectedImage: ImageInfo) {
    if (selectImage.find(image => image.img_id === selectedImage.img_id)) {
      // selectImage에서 빼는 로직
      dispatch(deleteImgFile(selectedImage.img_id));
      setCurrentImage(undefined);
      if (!checkboxRef.current) return;
      checkboxRef.current.checked = false;
    } else {
      if (selectImage.length < MAX_SELECTIONS) {
        dispatch(setImgFileUrl(selectedImage));
        if (!checkboxRef.current) return;
        checkboxRef.current.checked = true;
      }
    }
  }

  function handleClickImage(clickedImage: ImageInfo) {
    if (!checkboxRef.current) return;
    if (selectImage.some(image => image.img_id === clickedImage.img_id)) {
      checkboxRef.current.checked = true;
    } else {
      checkboxRef.current.checked = false;
    }
    setCurrentImage(clickedImage);
    if (!clickedImage.img_id) return;
    handleDisabled(clickedImage.img_id);
  }

  return { handleSelectImage, handleClickImage, selectImage, currentImage, checkboxRef, isDisabled };
}

export default useSelectImage;
