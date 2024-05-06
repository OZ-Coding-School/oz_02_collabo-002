import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
});

// 데이터를 URL 인코딩된 형식으로 변환하는 함수
function encodeFormData(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

// POST 요청 보내기
export async function createImages(keyword: string, style: string) {
  try {
    const email = 'b4ur2old@naver.com';
    const data = {
      keyword,
      style, // 오타 수정
    };

    const response = await apiClient.post('/image/create', encodeFormData(data), {
      headers: {
        Cookie: `email=${email}`,
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
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
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
