import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('access_token');

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

export const emailClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

export const imageClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  withCredentials: true,
  headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json', Authorization: `Bearer ${token}` },
});

export const sampleClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

export const surveyClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

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
