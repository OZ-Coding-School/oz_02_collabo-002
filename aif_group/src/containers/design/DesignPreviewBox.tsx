'use client';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { default as NextImage } from 'next/image';
import { useRouter } from 'next/navigation';
import downloadImage from '@/utils/downloadImages';

const DesignPreviewBox = () => {
  const [selectedColor, setSelectedColor] = useState('white');
  const [imageDataUrl, setImageDataUrl] = useState('');
  const [imageFile, setImageFile] = useState<{ imageUrl: string; imageName: string }[]>([]);
  const router = useRouter();

  const tshirtImage = {
    white: '/images/t-shirt_white.png',
    black: '/images/t-shirt_black.png',
  };

  const imagePath = {
    aiImage1:
      'https://lh3.googleusercontent.com/fife/ALs6j_Hp2PEtE1a1A02tz07GeGJMclDB2N7fSB4yqYMaJKmoTgnUD8P21ir7opBoG2SU-ZOwC_nOj_76gGsBNuDYjOEWl-2mxF-Tmf7ps_hN-9MgNiJhBwuVgZMlHDmt3cC1ETL93j-LllzxijJNtKhyldVK6Raa2cu0LIckQNSy3OwYs90cTSv0u-KqOpQeDd6E9opHwhBwUSBEpqD8Uo-bmS1eh68W3L0ZjGrJQ8n3ZZdEHDSXErphhvfS-ZbP_ER-ayW35YGqlnZu1RVUflyLoaSW6BAagdPppAl9Fn1u2AsHc2qCIRFd6scYEBYrhUzxNnCxgrYnBMQTTvBG9ADkm9P3XX_LrYHeQDBhrrT3NT_wAUX2C68aq4NIF8QAPrwqWzfkAq3jM6Im9RBjysfjaHlJ-Q08NnbdTR6SbaB3JuLKECgi5eXxodSyQ-tBFI-MV68ygxCG4YRIaM8sFZYkxO0ISvv_fofJWgBpYMxaNLMnsTv1lBbpB_fn1n_33KNHlS1y6lbtrXDPbJoRFS70_B_ziQs_uJuCYyv4F1pHzEFjzxBW5vcOAff0uTLfKwFLTwmemKwjiDxUVtKC8cU5hS8Q5Ktr6Wbei03O83GOzmG9laUVj5Ox6Fr3X_3pKIxurdIw_pdwvrqWJ7AiteaLCo9yrMo-era5pq1RQo5wN7cXTMrsMT9zDMWGh6t-mEPZPX4RTu7iAceZARE0o9cMQonyN4orrgx5H0V7Tzwx3Lfu6wTkMBq1s0Oz7z2mhUOLMhFWhQSM-XY3AFUfehY7fqTz6w5ncGww1ri5C3nsm49xMNQ3WO3XJhkqlquG12J8kubCn7sFrCXkgBuFcQl1nOHVRsvjE049U6mi_NNVXU74TBNvzRvnvEAVUm_MN9AofTR1i81GmomDr33IZ3mkr1YsIQ40qVy3JyRIIYyVXQfGCLXtyLs5LI5RvDdhYe7Ue5JouszaK7EOcVoKm4kXh_CA2vJZ7rjpGrYXlckYq0czkFIs8avIRA8lKQR2_bA6o10pWi37Sm2UsSavjs6_WP8np_2SeEdZ1fEkh7S2sbtuQRjhyDegZ1A9xeTG6wxsBB1y77VS2KkXvv7Vbkx6RC6pOGJYDU5xuhl52J_ZOclK1XkRAsOMTh-1P5OcTH3VB7fM2HleFLMpAgTNjrie3qHHmNm30oUOyYE1nSToiR6ack_J-sCS0fxWV7Zicmy_FciqVz3CBoP6uR9MvpWpCZuduILMODtrTube2tdcAj5EdRdgPSjbXEYx9wye8plF6M-NZTxYU3R1rSK9x-CcBmEephypyISFZ__wbvytoegBIPmx56Y7L4UkH0_6MGMgO3VFIeIfFVX0FW1UqxnR34UCSr2lw75Ve2m6BnGdvA5B-7-80ngh6-3TfrysyxgAlTLCMkoRDl52BNQ7rfil-uTWcv2u1vsBO0JmOchnY2ZyYvS8tCCTbuQxLsuwImDf_TebgIpEJIkqW-jOJM9xj5e43-mXvwigszwP_b6sHF-aNp7_j4LSCNcdGjhsa_pyDzC9PIidDpT-7oHlab_Z0r1LE788zgqsvAkZS-R-RIlux-JP60Cb-17VFxArTIuH5o-dKSFb3dv6MQQiB8fovIgYIRd8tGBpEfi7_oc2Vy0nUGmy8kY=w1774-h1316',
    aiImage2: 'images/aiImage2.png',
    aiImage3: 'images/aiImage3.png',
  };

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1800;
    canvas.height = 1800;
    const context = canvas.getContext('2d');
    context?.clearRect(0, 0, canvas.width, canvas.height);

    const Tshirt = new Image();
    Tshirt.crossOrigin = 'anonymous';
    Tshirt.src = selectedColor === 'white' ? tshirtImage.white : tshirtImage.black;
    Tshirt.onload = () => {
      context?.drawImage(Tshirt, 0, 0, canvas.width, canvas.height);

      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.src = imagePath.aiImage1;
      image.onload = () => {
        context?.drawImage(image, canvas.width / 2 - 520 / 2, canvas.height / 2 - 520 / 2, 520, 520);

        const dataUrl = canvas.toDataURL(`image/png`);
        setImageDataUrl(dataUrl);
        setImageFile(prev => [
          ...prev,
          { imageUrl: dataUrl, imageName: '티셔츠합성이미지1' },
          { imageUrl: imagePath.aiImage1, imageName: 'ai생성이미지1' },
        ]);
      };
    };
  }, [selectedColor]);

  return (
    <div className="w-[27rem] h-[46.875rem] border-[2px] border-black rounded-[16px] shadow-xl">
      <div className="w-full h-[9.9375rem] bg-black rounded-t-[14px] flex flex-col items-center mb-10">
        <div className="bg-main_active flex mt-[1.9375rem] w-[4.375rem] h-[1.25rem] justify-center items-center rounded-[3px]">
          <p>STEP</p>
          <p className="font-black ml-[2px]">03</p>
        </div>
        <h2 className="text-main_active h-[3.125rem] flex items-center text-[1.5rem] font-bold">티셔츠 미리보기</h2>
        <div className="text-[0.8rem] flex flex-col items-center">
          <p className="text-white">디자인 실력이 대단하시네요!</p>
          <p className="text-white">패셔너블한 티셔츠가 완성됐어요!</p>
        </div>
      </div>
      {/* 티셔츠 색상 버튼 */}
      <div className="grid grid-cols-2 w-[5.15rem] ml-80 mb-2">
        <div className="flex flex-col items-center">
          <button
            className={`w-8 h-8 rounded-full border border-text overflow-hidden focus:outline-none ${
              selectedColor === 'white' ? 'ring ring-main_active' : ''
            }`}
            onClick={() => setSelectedColor('white')}></button>
          <span className="text-sm text-text mt-1">화이트</span>
        </div>
        <div className="flex flex-col items-center">
          <button
            className={`w-8 h-8 rounded-full border border-text overflow-hidden focus:outline-none bg-black ${
              selectedColor === 'black' ? 'ring ring-main_active' : ''
            }`}
            onClick={() => setSelectedColor('black')}></button>
          <span className="text-sm text-text mt-1">블랙</span>
        </div>
      </div>
      <section className="relative flex justify-center items-center">
        <NextImage src="/icons/arrow_left.svg" alt="left_arrow" width={50} height={50} priority />
        <div className="w-[360px] h-[340px] relative">
          {imageDataUrl && <NextImage src={imageDataUrl} alt="T-shirt" priority fill />}
        </div>
        <NextImage src="/icons/arrow_right.svg" alt="right_arrow" width={50} height={50} priority />
      </section>
      <div className="w-[15rem] h-[2.5rem] mt-[3.1375rem] mx-[6.1875rem] flex justify-between">
        <button
          className="w-[15rem] h-full text-btn_text border-btn_border border-[1px] rounded-[4px] hover:bg-main_active hover:border-none hover:text-black"
          // onClick={() => router.push('/design/feedback')}
          onClick={() => {
            downloadImage(imageFile);
          }}>
          다운로드
        </button>
      </div>
    </div>
  );
};

export default DesignPreviewBox;
