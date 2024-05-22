import axios from 'axios';
import Cookies from 'js-cookie';

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

export const jsonTypeApi = (url: string, data: {}) => {
  const response = apiClient.post(url, data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};

export const formDataTypeApi = (url: string, data: {}) => {
  const response = apiClient.post(url, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response;
};

export const sampleApi = (url: string) => {
  const response = apiClient.get(url, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};

apiClient.interceptors.request.use(
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

// 응답 인터셉터 설정
apiClient.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response && error.response.status === 401) {
      // access token 만료 처리
      const refreshToken = Cookies.get('refresh_token');
      if (refreshToken) {
        try {
          const response = await axios.post('/users/jwt-login', { token: refreshToken });
          const newToken = response.data.access_token;
          Cookies.set('access_token', newToken);

          // 요청 재시도
          error.config.headers.Authorization = `Bearer ${newToken}`;
          return axios.request(error.config);
        } catch (refreshError) {
          // 리프레시 토큰이 유효하지 않으면 사용자 로그아웃 처리
          Cookies.remove('access_token');
          Cookies.remove('refresh_token');
          window.location.href = '/';
          return Promise.reject(refreshError);
        }
      } else {
        // 리프레시 토큰이 없으면 사용자 로그아웃 처리
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  },
);
