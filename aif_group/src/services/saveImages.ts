import { AxiosError } from 'axios';
import { imageClient } from './instance';
import { ImageInfo } from '@/types/designSelectBoxType';

export async function saveImages(images: ImageInfo[]) {
  try {
    const response = await imageClient.post(
      '/image/save-images',
      {
        //image formdata
        images,
      },
      {
        withCredentials: true, //header에 쿠키 포함
      },
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      console.error('Error Response:', axiosError.response.data);
      console.error('Status:', axiosError.response.status);
      console.error('Headers:', axiosError.response.headers);
    } else if (axiosError.request) {
      console.error('Error Request:', axiosError.request);
    } else {
      console.error('Error Message:', axiosError.message);
    }
  }
}
