'use client';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { default as NextImage } from 'next/image';
import { useRouter } from 'next/navigation';
import downloadImage from '@/utils/downloadImages';

const DesignPreviewBox = () => {
  const [selectedColor, setSelectedColor] = useState('white');
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
  const [imageDataUrl, setImageDataUrl] = useState('');
  const router = useRouter();

  const imagePath = {
    whiteTShirt:
      'https://lh3.googleusercontent.com/fife/ALs6j_ForQt8SLEzVJIwnwaFiC9Vz-od2NUZR8VIA7E2wxoYvWZMK1r4n-owJ61O2tDPeUKdL8e9m6yiPUZdR8j1kC-YVohK_bwGhqydgSwvrjuAMnZsmvQzM6xFncug_UbmHFVqY3mvdOvpOWLqVoLuZ9AWHwEXkXTfRU_kSFc1PA5btKARVOsRoHKu1EfUmy9UGqJU0JIEJgD21ezBxa6hDGEKzjdCmlYI-nuBpHIFL2w2E8sdOJPNtThYi8TRGDeJgidhgHE8TjlLog0xcZdgnJMzTKv1HaSolRIwVlFdLsFoUZUy_EwBT6EGqXeDqeEmRlEO1gv45GHPaQ0haCAsULOeOEPxPQBIV0XpHBTGQOFVqAM2i5h8p3PXxcAiFYuWocwr0F73GFH6-XYcUyY2AO2pvgUn64Yu9MYfxKtjMyAhJH1xmODPQNeeTwItNClO-hFZJi1OI6EiIi36JCv_Xaf0TACyawF0V0P-56tYr47cqMSx2JxhjcrYd3b4MnImmxoDDJyo1IfgfJ698BxDbRuGuOJhvjdrWYGXz2Zzm7hJ94AHkwnUx7X0mSmc4-ZckzjpCmQxTN3uV6KjRzL1viC_bOjtPDTWBFIiuujfLg10vgg_dA8NQHFgDtiDaz_nAYiax82HvI93OIMmiBWubEmt5SaHbguN5r5SgJaBd2ebFS8tP9ED6yplq39S7f676QNDMV3i_5Lwlv5wAPGxzgjOpUop7-ODs_9BruySOThMD_tMUsNGsalskQ_vGS3MFP7qwFIebsX_m1Ofk7h-0CZjx7v3pRsL5WGJaC7NspBX3x3MRlfqT3FZ5Q-geNlL--I1OrYEP39qGklIa_CHLxdOIyS1cN9WKDunLkPq4yVW09xPoeHlO9sWkfHbfzpEoCqJxTKWgxS_NiASkFledJYg88nbDoiuQhsC4b66XMsLOCcRAdZanDy1vsKypE-RyX_QQTCT8yjpHXGhsbqMAPCr6azCBDtqPo2EJ4HCJCDLyHWgq7R3dwREg_k47lxkHtS7iO_Vf9-J1YqxCErjJOHH69ZAbSMr2CHGfgvY8apsmUrKXdqmX88Z6hJK0t311dX0cEb1IsTLmPQR2Gv-VJRIRRYDs9FgDa2QFiTgasI05YlcmZxJIRvl5LVZb-GVU7JfekecKVGTHicBE4s31J3dhybIP9wt2Ozf6_imjTPiEwrF689WQ8na4a8V7uFIPgjtC8UM94Sc6b-wKCA8CrdP5PDAdaH3FZpP4in7YC05Z_tAMROz877Gowyrum9c1k7cQGiiZNfF_dxy8Coj95DxiWKdP7verkA3gVbyAgKDKmM3aZuAgjfn3JyC--x74813WQJ4Bb8jS8Ek45DqvtgKnu1mi69TqdtbhGfpEySIkXvP9YRs7-0Dhx0pY3fFUZ26iT5FrCp1WBZSfACwomSt8ovyq7-6Krn2Icd4TzZHuR-54BjuN6XcE7wPYo46jrb9SYsoJN_o9PoNo-GBQiLyylErLfODuc_wyVUch72dO-Np4pDHwoV2uh4TChS4oPHwzOtYBI-q6taCT9UzcaC_dr7iERlPoERbZq9UAWfsqRXsgFc9XaPNfeb8cfnEtiw6pvGylcMLpelRD-JGYxMX3T3kM3JRn8vhYrzfFYNr7u2J3Q=w2508-h1348',
    blackTShirt:
      'https://lh3.googleusercontent.com/fife/ALs6j_FoqdWWNSwadee66aMbMeiNyJK2GKudSM9rusQxxeo2TQvnSAw6_C8yTs0lLLT6-fVDsRed-1Wb3g9gRARjBOpoWKR6oLntihuhZpLHNlMX22AHHZKymF6nGGmS17Izoel_HX8WsIA2vdpDVTazogMSv42b1iLW_3OsnAA6UneOZVEodGRKsYK4AHasAWXQlryWPitgu75oNC2jz7KbEeWPRLiCrUymSQSljUxUY0TJx0Exu-KaDgFDkMto8y7PmrkhEPynHFCwb1I-HQpG9wO8yxMxjBxWT00ED9GMLhSA_OvwRGS4sIHcPPtO2l_Bc23oMXtpfT_nyM5I_g5b-GhRrAUZad_26_7kUw0HyIopQn5aXcytbLpP5eCmZWGb-EQThobECS5pXgEIe1n_T0sQQ3Sap5vNNODK5ORwwPtBrIGx-TtgCwhf915A0DEyhg1PweFagHT3MMfMIbmJCQLneVTygn9l-ZHJQ_NgIhjRc4V2Sxu2Ykgr3RLlH4nWcFL7QhAwgnB7KQgLtbARA5cZQ2S6XuzsAgy9OLBNHIR7f2vBvSE1lnlMh2-ssMlvOMMwpi8nKlM_DcENHR2gzHYlH9jRkGD-Ozb3LPR3P1Q5F32CFfJnupc_YQonY7v3LeWAKnivYY2ujC6KM2Gz-wFh4mSFLY99jEoV5q7glAEJD35uusjGTHVS9NDaR10krjmIPmhxBQFOyteue0gmbw-3GhSNQDSOGIaXjMxA4mlr6nIXLT5qLFZSTxLxrwi7wFobzBCUHaq1vNX7W_cuMo0fzlmmnIBFaABSlP6Geev9hrPvoHjEo3FVtJWJ_pwipx5_sZKWHaAoHcQvCjbjGwS5SAezuwzUMiaYjVFnL0PNzt4ESg1tOm8HO91NF7pjnt1Oc09B-FItkK7v3aH4TMvu8VlhclsS1qx8-hFm4AMiOuUsAartx1VYkyQXNccfcDAZJ9UNx6mj6clhT-uy1UZ2l14E-bBM2icncj81akTLWdmfsoPkUeJJv0yNyuDOYly21b48XDOm4BIQa_Kpbi9kDTFSmXE5BMNK1rV9XJIE3vuoPwUDP4b8sF_Q2UvrDC0uj1EGsCxN6gsx9kRgcJdI20hWV8MQPgQNBIa3Xzz6ArgnbkqGmvQhR580V39qDL-0EtbnuluLB68Q41QmZ8MYgaAorYtj8DGofvaIZtYMMggvGXQikLscoQyI45l0VEZdYZsmZ_tGmKFVJ-GkdqQQjYMZNxkmSnc6_BxpITPPg-9uLMqymldOuuDGC1zzqp68BLLuCqWUlcTQYvneUzlVDl79VHWE9gfffA_aNeJ9vsbqvI0W6YRFo5mwByGtJ2zQlexafBQ3S-1cpa9p98SFK7P4PyO1FVBSv3MWlyks7aZUmavkS49QG1TFIcggNLUVeIPhA7SF5G3JKR2s4_r6RkpEuCl2GoyPZTjojJJb9tVkhDNoBTkCEyHCPyicDBughpu4OCc4r0WrPF90cNQfoxNidOsS-O5C3-Kv3gTy1IRryK5eSgrDrISxI9HaLgsOn0789qmzgd7nZKmpw0mqb_cvbSK-buWy1EjthqK7aco7HBWs8jsMsiYeVdy79wkHUpFQPw4sqZSpRzLr7zSKGG2vwTF0JGar0X2aTTOOAVXDSw=w2508-h1348',
    aiImage1:
      'https://lh3.googleusercontent.com/fife/ALs6j_Hp2PEtE1a1A02tz07GeGJMclDB2N7fSB4yqYMaJKmoTgnUD8P21ir7opBoG2SU-ZOwC_nOj_76gGsBNuDYjOEWl-2mxF-Tmf7ps_hN-9MgNiJhBwuVgZMlHDmt3cC1ETL93j-LllzxijJNtKhyldVK6Raa2cu0LIckQNSy3OwYs90cTSv0u-KqOpQeDd6E9opHwhBwUSBEpqD8Uo-bmS1eh68W3L0ZjGrJQ8n3ZZdEHDSXErphhvfS-ZbP_ER-ayW35YGqlnZu1RVUflyLoaSW6BAagdPppAl9Fn1u2AsHc2qCIRFd6scYEBYrhUzxNnCxgrYnBMQTTvBG9ADkm9P3XX_LrYHeQDBhrrT3NT_wAUX2C68aq4NIF8QAPrwqWzfkAq3jM6Im9RBjysfjaHlJ-Q08NnbdTR6SbaB3JuLKECgi5eXxodSyQ-tBFI-MV68ygxCG4YRIaM8sFZYkxO0ISvv_fofJWgBpYMxaNLMnsTv1lBbpB_fn1n_33KNHlS1y6lbtrXDPbJoRFS70_B_ziQs_uJuCYyv4F1pHzEFjzxBW5vcOAff0uTLfKwFLTwmemKwjiDxUVtKC8cU5hS8Q5Ktr6Wbei03O83GOzmG9laUVj5Ox6Fr3X_3pKIxurdIw_pdwvrqWJ7AiteaLCo9yrMo-era5pq1RQo5wN7cXTMrsMT9zDMWGh6t-mEPZPX4RTu7iAceZARE0o9cMQonyN4orrgx5H0V7Tzwx3Lfu6wTkMBq1s0Oz7z2mhUOLMhFWhQSM-XY3AFUfehY7fqTz6w5ncGww1ri5C3nsm49xMNQ3WO3XJhkqlquG12J8kubCn7sFrCXkgBuFcQl1nOHVRsvjE049U6mi_NNVXU74TBNvzRvnvEAVUm_MN9AofTR1i81GmomDr33IZ3mkr1YsIQ40qVy3JyRIIYyVXQfGCLXtyLs5LI5RvDdhYe7Ue5JouszaK7EOcVoKm4kXh_CA2vJZ7rjpGrYXlckYq0czkFIs8avIRA8lKQR2_bA6o10pWi37Sm2UsSavjs6_WP8np_2SeEdZ1fEkh7S2sbtuQRjhyDegZ1A9xeTG6wxsBB1y77VS2KkXvv7Vbkx6RC6pOGJYDU5xuhl52J_ZOclK1XkRAsOMTh-1P5OcTH3VB7fM2HleFLMpAgTNjrie3qHHmNm30oUOyYE1nSToiR6ack_J-sCS0fxWV7Zicmy_FciqVz3CBoP6uR9MvpWpCZuduILMODtrTube2tdcAj5EdRdgPSjbXEYx9wye8plF6M-NZTxYU3R1rSK9x-CcBmEephypyISFZ__wbvytoegBIPmx56Y7L4UkH0_6MGMgO3VFIeIfFVX0FW1UqxnR34UCSr2lw75Ve2m6BnGdvA5B-7-80ngh6-3TfrysyxgAlTLCMkoRDl52BNQ7rfil-uTWcv2u1vsBO0JmOchnY2ZyYvS8tCCTbuQxLsuwImDf_TebgIpEJIkqW-jOJM9xj5e43-mXvwigszwP_b6sHF-aNp7_j4LSCNcdGjhsa_pyDzC9PIidDpT-7oHlab_Z0r1LE788zgqsvAkZS-R-RIlux-JP60Cb-17VFxArTIuH5o-dKSFb3dv6MQQiB8fovIgYIRd8tGBpEfi7_oc2Vy0nUGmy8kY=w1774-h1316',
  };

  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      context?.clearRect(0, 0, canvas.width, canvas.height);

      const Tshirt = new Image();
      Tshirt.crossOrigin = 'anonymous';
      Tshirt.src = selectedColor === 'white' ? imagePath.whiteTShirt : imagePath.blackTShirt;
      Tshirt.onload = () => {
        context?.drawImage(Tshirt, 0, 0, canvas.width, canvas.height);

        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = imagePath.aiImage1;
        image.onload = () => {
          context?.drawImage(image, canvas.width / 2 - 126 / 2, canvas.height / 2 - 126 / 2, 126, 126);

          setImageDataUrl(canvas.toDataURL(`imagev?=${new Date().getTime()}/png`));
        };
      };
    }
  }, [canvasRef, selectedColor]);

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
      <div className="grid grid-cols-2 w-[5.15rem] ml-80">
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
        <NextImage src="/icons/arrow_left.svg" alt="T-shirt" width={50} height={50} priority />
        <canvas width={360} height={380} ref={canvasRef}></canvas>
        <NextImage src="/icons/arrow_right.svg" alt="T-shirt" width={50} height={50} priority />
      </section>
      <div className="w-[15rem] h-[2.5rem] mt-[3.1375rem] mx-[6.1875rem] flex justify-between">
        <button
          className="w-[15rem] h-full text-btn_text border-btn_border border-[1px] rounded-[4px] hover:bg-main_active hover:border-none hover:text-black"
          // onClick={() => router.push('/design/feedback')}
          onClick={() => {
            const imageUrl = imageDataUrl;
            const imageName = 'ai생성이미지1.png';
            console.log(imageUrl);
            downloadImage(imageUrl, imageName);
          }}>
          다운로드
        </button>
      </div>
    </div>
  );
};

export default DesignPreviewBox;
