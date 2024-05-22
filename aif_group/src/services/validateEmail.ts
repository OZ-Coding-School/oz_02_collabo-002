import { AxiosError } from 'axios';
import { jsonTypeApi } from './instance';

export async function validateEmail(email: string) {
  const jsonData = JSON.stringify({
    member_email: email,
  });
  try {
    const response = await jsonTypeApi('/users/create', jsonData);
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
