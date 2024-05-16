import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setImgFileUrl } from '@/states/imageSlice';
import { RootState } from '@/states/store';
import { ImageInfo } from '@/types/designSelectBoxType';
import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { SetStateAction } from 'react';

type drawPropsType = {
  selectImage: ImageInfo[];
  selectedColorArray: string[];
  tShirtImage: { white: string; black: string };
  dispatch: ThunkDispatch<
    {
      ref: ImageInfo[];
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>;
};

const drawSelectedImage = async (props: drawPropsType) => {
  props.selectImage.map((img, index) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1800;
    canvas.height = 1800;
    const context = canvas.getContext('2d');
    context?.clearRect(0, 0, canvas.width, canvas.height);
    const Tshirt = new Image();
    Tshirt.crossOrigin = 'anonymous';
    Tshirt.src = props.selectedColorArray[index] === 'white' ? props.tShirtImage.white : props.tShirtImage.black;
    Tshirt.onload = () => {
      context?.clearRect(0, 0, canvas.width, canvas.height);
      context?.drawImage(Tshirt, 0, 0, canvas.width, canvas.height);

      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.src = img.img_url;
      image.onload = () => {
        context?.drawImage(image, canvas.width / 2 - 540 / 2, canvas.height / 2 - 540 / 2, 540, 540);

        const dataUrl = canvas.toDataURL(`image/png`);
        console.log(dataUrl);
        props.dispatch(setImgFileUrl({ img_url: dataUrl, img_id: `티셔츠합성이미지${index}` }));
      };
    };
  });
};

export default drawSelectedImage;
