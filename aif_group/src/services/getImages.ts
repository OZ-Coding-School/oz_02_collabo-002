import axios, { AxiosError } from 'axios';
import { apiClient } from './instance';
import { ImageInfo } from '@/types/designSelectBoxType';

export async function getImages(): Promise<ImageInfo[] | undefined> {
  try {
    const response = await apiClient.get('/image/show-samples');

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
    return undefined;
  }
}
