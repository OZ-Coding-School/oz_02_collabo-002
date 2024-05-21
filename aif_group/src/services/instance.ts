import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('access_token');

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
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
