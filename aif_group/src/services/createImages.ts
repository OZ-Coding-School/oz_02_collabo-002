import { AxiosError } from 'axios';
import { apiClient } from './getImages';

interface ImageCreationRequest {
  keyword: string;
  style: string;
  [key: string]: string; // 인덱스 시그니처 추가
}

// 데이터를 URL 인코딩된 형식으로 변환하는 함수
function encodeFormData(data: ImageCreationRequest) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

// POST 요청 보내기
export async function createImages(keyword: string, style: string) {
  try {
    const data = {
      keyword,
      style,
    };
    console.log(encodeFormData(data));
    const response = await apiClient.post('/image/tmp_create', encodeFormData(data), {
      withCredentials: true, //header에 쿠키 포함
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
