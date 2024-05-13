import axios, { AxiosError } from 'axios';

export const apiClient = axios.create({
  baseURL: '/api/surveys',
  timeout: 0,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

export async function getSurveys() {
  try {
    const response = await apiClient.get('/answer/1', {
      withCredentials: true,
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
