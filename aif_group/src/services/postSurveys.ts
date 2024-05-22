import { AxiosError } from 'axios';
import { surveyClient } from './instance';
import Cookies from 'js-cookie';

export async function postSurveys(JSONdata: string) {
  try {
    const response = await surveyClient.post('/surveys/submit', JSONdata);

    surveyClient.interceptors.request.use(
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
