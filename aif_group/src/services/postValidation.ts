import { AxiosError } from 'axios';
import { apiClient } from './getImages';

export async function postValidation(email: string) {
  try {
    const response = await apiClient.post('/verify', {
      email,
    });
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
