import axios, { AxiosError, AxiosResponse } from 'axios';

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
});

export async function getImages() {
  try {
    const email = 'b4ur2old@naver.com';
    const response = await apiClient.get('/image/show-samples', {
      headers: {
        Cookie: `email=${email}`,
      },
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
