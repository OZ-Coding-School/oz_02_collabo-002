import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('Authorization');

export const apiClient = axios.create({
  baseURL: '/api/surveys',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export async function postSurveys(JSONdata: string) {
  try {
    const response = await apiClient.post('/submit', JSONdata);

    console.log('Response:', response.data);
    return response;
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
