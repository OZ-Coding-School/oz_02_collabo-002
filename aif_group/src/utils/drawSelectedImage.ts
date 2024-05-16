import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { saveImages } from '@/services/saveImages';
import { setDownloadFileUrl } from '@/states/imageFileSlice';
import { setImgFileUrl } from '@/states/imageSlice';
import { RootState } from '@/states/store';
import { ImageInfo } from '@/types/designSelectBoxType';

type drawPropsType = {
  selectImage: ImageInfo[];
  selectedColorArray: string[];
  tShirtImage: { white: string; black: string };
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
      };
    };
  });

  // const imageFiles = await Promise.all(promises);
  // const result = await saveImages(imageFiles);
  // console.log(result);
};

export default drawSelectedImage;
