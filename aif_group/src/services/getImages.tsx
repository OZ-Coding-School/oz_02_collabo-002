import axios, { AxiosError, AxiosResponse } from 'axios';

interface ImageCreationRequest {
  keyword: string;
  style: string;
  [key: string]: string; // 인덱스 시그니처 추가
}

const apiClient = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
});

// 데이터를 URL 인코딩된 형식으로 변환하는 함수
function encodeFormData(data: ImageCreationRequest) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

// POST 요청 보내기
export async function createImages(keyword: string, style: string): Promise<void> {
  try {
    const email = 'b4ur2old@naver.com';
    const data = {
      keyword,
      style,
    };
    console.log(encodeFormData(data));
    const response = await apiClient.post('/image/create', encodeFormData(data), {
      headers: {
        Cookie: `email=${email}`,
      },
    });

    console.log('Response:', response.data);
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
