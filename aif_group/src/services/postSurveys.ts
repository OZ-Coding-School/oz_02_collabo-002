import { AxiosError } from 'axios';
import { jsonTypeApi } from './instance';

export async function postSurveys(JSONdata: string) {
  try {
    const response = await jsonTypeApi('/surveys/submit', JSONdata);

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
