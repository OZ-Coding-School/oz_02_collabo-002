'use client';
import { MAX_SELECTIONS } from '@/constants';
import { CurrentImage, SelectImage } from '@/types/designSelectBoxType';
import { useRef, useState } from 'react';

function useSelectImage() {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [currentImage, setCurrentImage] = useState<CurrentImage>({
    image: '',
    idx: undefined,
  });
  const [selectImage, setSelectImage] = useState<SelectImage>({
    image: [],
    idx: [],
  });

  function toggleCheck() {
    if (!checkboxRef.current) return;
    checkboxRef.current.checked = false;

    if (currentImage.idx === undefined) return;
    handleSelectImage(currentImage.image, currentImage.idx);
  }

  function handleSelectImage(image: string, idx: number) {
    if (selectImage.idx.includes(idx)) {
      setSelectImage(prevState => ({
        ...prevState,
        idx: selectImage.idx.filter(item => item !== idx),
      }));

      if (currentImage.idx === idx) {
        setCurrentImage({ image: '', idx: undefined });
      }
    } else {
      if (selectImage.idx.length < MAX_SELECTIONS) {
        setCurrentImage({ image: image, idx: idx });

        setSelectImage(prevState => ({
          image: [...prevState.image, image],
          idx: [...prevState.idx, idx],
        }));
        if (!checkboxRef.current) return;
        checkboxRef.current.checked = true;
      }
    }
  }
  return { toggleCheck, handleSelectImage, selectImage, currentImage, checkboxRef };
}

export default useSelectImage;
