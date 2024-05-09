'use client';
import { MAX_SELECTIONS } from '@/constants';
import { CurrentImage, SelectImage } from '@/types/designSelectBoxType';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { RootState } from '@/states/store';
import { deleteImgFile } from '@/states/imageSlice';

function useSelectImage() {
  const [isDisabled, setIsDisabled] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [currentImage, setCurrentImage] = useState<CurrentImage>({
    image: '',
    idx: undefined,
  });

  const selectImage = useAppSelector((state: RootState) => state.ref);
  const dispatch = useAppDispatch();

  function handleDisabled(idx: number) {
    if (selectImage.length === MAX_SELECTIONS && !selectImage.filter(image => image.imageName === idx.toString())) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }

  function handleSelectImage(image: string, idx: number) {
    selectImage.forEach(image => {
      if (image.imageName === idx.toString()) {
        // selectImage에서 빼는 로직
        dispatch(deleteImgFile(idx));
        setCurrentImage({ image: '', idx: undefined });
        if (!checkboxRef.current) return;
        checkboxRef.current.checked = false;
      } else {
        if (selectImage.idx.length < MAX_SELECTIONS) {
          setSelectImage(prevState => ({
            image: [...prevState.image, image],
            idx: [...prevState.idx, idx],
          }));
          if (!checkboxRef.current) return;
          checkboxRef.current.checked = true;
        }
      }
    });
  }

  function handleClickImage(image: string, idx: number) {
    if (!checkboxRef.current) return;
    if (selectImage.idx.includes(idx)) {
      checkboxRef.current.checked = true;
    } else {
      checkboxRef.current.checked = false;
    }
    setCurrentImage(state => ({ ...state, image, idx }));
    handleDisabled(idx);
  }

  return { handleSelectImage, handleClickImage, selectImage, currentImage, checkboxRef, isDisabled };
}

export default useSelectImage;
