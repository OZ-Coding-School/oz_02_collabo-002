import Image from 'next/image';

type thumbnailImageType = {
  tShirtImage: string;
  image: string;
  isSelected: boolean;
};

const ThumbnailImage = ({ tShirtImage, image, isSelected }: thumbnailImageType) => {
  return (
    <div
      className={`w-[5rem] h-[4.8rem] border border-btn_border flex justify-center items-center relative rounded-sm ml-2 ${
        isSelected ? 'ring-2 ring-main_active' : ''
      }`}>
      <Image
        alt="T-shirt"
        src={tShirtImage}
        priority
        width={66}
        height={48}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-53%] drop-shadow-tShirtMini"
      />
      <Image
        src={image}
        alt="T-shirt"
        priority
        width={24}
        height={24}
        className="z-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
};

export default ThumbnailImage;
