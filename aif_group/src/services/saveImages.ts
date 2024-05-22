import { AxiosError } from 'axios';
import { imageClient } from './instance';
import Cookies from 'js-cookie';

export async function saveImages(images: File[]) {
  const imageFormData = new FormData();
  images.forEach(image => {
    imageFormData.append('files', image);
  });

  imageClient.interceptors.request.use(
    config => {
      const token = Cookies.get('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  try {
    const response = await imageClient.post('/image/save-images', imageFormData);
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
