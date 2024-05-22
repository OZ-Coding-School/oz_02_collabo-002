import { AxiosError } from 'axios';
import { emailClient } from './instance';
import Cookies from 'js-cookie';

export async function validateEmail(email: string) {
  const jsonData = JSON.stringify({
    member_email: email,
  });
  emailClient.interceptors.request.use(
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
    const response = await emailClient.post('/users/create', jsonData);
    const isValid = response.status === 200;
    return isValid;
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
    return false;
  }
}
