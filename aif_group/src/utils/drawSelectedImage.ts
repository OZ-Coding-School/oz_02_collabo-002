import { SetStateAction } from 'react';

type drawPropsType = {
  selectImage: { image: string[] };
  selectedColorArray: string[];
  tShirtImage: { white: string; black: string };
  setImageFile: React.Dispatch<
    SetStateAction<
      {
        imageUrl: string;
        imageName: string;
      }[]
    >
  >;
};

const drawSelectedImage = async (props: drawPropsType) => {
  props.selectImage.image.map((img, index) => {
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
      image.src = img;
      image.onload = () => {
        context?.drawImage(image, canvas.width / 2 - 540 / 2, canvas.height / 2 - 540 / 2, 540, 540);

        const dataUrl = canvas.toDataURL(`image/png`);
        props.setImageFile(prev => [
          ...prev,
          { imageUrl: dataUrl, imageName: `티셔츠합성이미지${index}` },
          { imageUrl: img, imageName: `ai생성이미지${index}` },
        ]);
      };
    };
  });
};

export default drawSelectedImage;
