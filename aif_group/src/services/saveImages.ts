import { AxiosError } from 'axios';
import { formDataTypeApi } from './instance';
import Cookies from 'js-cookie';

export async function saveImages(images: File[]) {
  const imageFormData = new FormData();
  images.forEach(image => {
    imageFormData.append('files', image);
  });

  try {
    const response = await formDataTypeApi('/image/save-images', imageFormData);
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
