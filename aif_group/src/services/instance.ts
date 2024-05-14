import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
});

export const imageClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json' },
});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1lYmVyX2lkIjoxLCJtZW1iZXJfZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSJ9.om7bPFgHzC599MKGopAr_eHJd41U_kNalCdHxRzsrjQ';

apiClient.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
