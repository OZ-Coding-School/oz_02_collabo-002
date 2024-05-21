import axios, { AxiosError } from 'axios';
import { sampleClient } from './instance';

export async function getSamples() {
  try {
    const response = await sampleClient.get('/slash', {
      withCredentials: true,
    });
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
