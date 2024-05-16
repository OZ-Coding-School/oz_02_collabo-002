import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
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

  const dispatch = useAppDispatch();

  const promises = props.selectImage.map(
    (img, index) =>
      new Promise<File>((resolve, reject) => {
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

            canvas.toBlob(blob => {
              if (!blob) return;

              const file = new File([blob], `${img.img_id}.png`, { type: 'image/png' });
              
              const dataUrl = canvas.toDataURL(`image/png`);
      
              props.dispatch(setDownloadFileUrl({ img_url: dataUrl, img_id: `티셔츠합성이미지${index}` }));
              props.dispatch(setDownloadFileUrl({ img_url: img.img_url, img_id: `합성이미지${index}` }));
              
              resolve(file);
            });
          };
        };
      }),
  );

  const imageFiles = await Promise.all(promises);
  const result = await saveImages(imageFiles);
  console.log(result);
};

export default drawSelectedImage;
