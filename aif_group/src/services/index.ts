import axios, { AxiosError } from 'axios';
import { createImages } from './createImages';
import { getImages } from './getImages';
import { imageClient } from './instance';

export async function handleImageProcess(keyword: string, style: string) {
  try {
    // 이미지 생성 API 호출
    await createImages(keyword, style);
    // 이미지 생성 후 조금 기다렸다가 이미지 조회
    setTimeout(async () => {
      const showResponse = await getImages();
      //console.log('Fetched images:', showResponse.data);
    }, 5000); // 3초 후에 이미지 조회
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
