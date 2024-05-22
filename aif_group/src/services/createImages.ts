import { AxiosError } from 'axios';
import { apiClient } from './instance';
import Cookies from 'js-cookie';

// POST 요청 보내기
export async function createImages(keyword: string, style: string) {
  const formData = new FormData();
  formData.append('keyword', keyword);
  formData.append('style', style);
  try {
    const response = await apiClient.post('/image/tmp-create-load', formData);
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
