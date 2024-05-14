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
