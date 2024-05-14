import { AxiosError } from 'axios';
import { apiClient } from './instance';

//users/check_email
// users/jwt-login 토큰 생성 및 발행
// users/register_email 이메일을 db에 등록

export async function validateEmail(email: string) {
  const jsonData = JSON.stringify({
    email,
  });
  try {
    const response = await apiClient.post('/users/check_email/', jsonData);
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
  }
}
