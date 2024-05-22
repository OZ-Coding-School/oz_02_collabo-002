import { useAppSelector } from '@/hooks/reduxHooks';
import { saveImages } from '@/services/saveImages';
import { setToken } from '@/services/setToken';
import { ImageInfo } from '@/types/designSelectBoxType';

type drawPropsType = {
  selectImage: ImageInfo[];
  selectedColorArray: string[];
  tShirtImage: { white: string; black: string };
  addFile: (file: ImageInfo) => { payload: ImageInfo; type: 'imageFile/setDownloadFileUrl' };
  email: string | null;
};

const promiseDrawSelectedImage = async (props: drawPropsType) => {
  const promises = props.selectImage.map(
    (img, index) =>
      new Promise<File>((resolve, reject) => {
        const canvas = document.createElement('canvas');
        canvas.width = 1800;
        canvas.height = 1800;
        const context = canvas.getContext('2d');
        context?.clearRect(0, 0, canvas.width, canvas.height);
        const tShirt = new Image();
        tShirt.crossOrigin = 'anonymous';
        tShirt.src = props.selectedColorArray[index] === 'white' ? props.tShirtImage.white : props.tShirtImage.black;
        tShirt.onload = () => {
          context?.clearRect(0, 0, canvas.width, canvas.height);
          context?.drawImage(tShirt, 0, 0, canvas.width, canvas.height);

          const image = new Image();
          image.crossOrigin = 'anonymous';
          image.src = img.img_url;
          image.onload = () => {
            context?.drawImage(image, canvas.width / 2 - 560 / 2, canvas.height / 2 - 560 / 2, 560, 560);

            canvas.toBlob(blob => {
              if (!blob) return;

              const file = new File([blob], `${img.img_id}.png`, { type: 'image/png' });

              const dataUrl = canvas.toDataURL(`image/png`);
              props.addFile({ img_url: dataUrl, img_name: `티셔츠합성이미지${index}` });
              props.addFile({ img_url: img.img_url, img_name: `합성이미지${index}` });

              resolve(file);
            });
          };
        };
      }),
  );

  const imageFiles = await Promise.all(promises);
  if (props.email) await setToken(props.email, 'user');
  const result = await saveImages(imageFiles);
  console.log(result);
};

export default promiseDrawSelectedImage;
