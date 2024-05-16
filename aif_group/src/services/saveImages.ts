import { AxiosError } from 'axios';
import { imageClient } from './instance';
import { ImageInfo } from '@/types/designSelectBoxType';

export async function saveImages(images: ImageInfo[]) {
  const imageFormData = new FormData();
  images.forEach(image => {
    imageFormData.append('files', image.img_url);
  });
  try {
    const response = await imageClient.post('/image/save-images', {
      //image formdata
      imageFormData,
    });
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
