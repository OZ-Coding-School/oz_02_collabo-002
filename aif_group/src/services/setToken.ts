import { emailClient } from './instance';
import Cookies from 'js-cookie';

export async function setToken(email: string, status: string, password: string = '') {
  const isStaff = status === 'staff';
  const body = isStaff
    ? {
        member_email: email,
        is_staff: isStaff,
        password,
      }
    : {
        member_email: email,
        is_staff: isStaff,
      };
  const jsonData = JSON.stringify(body);
  try {
    const response = await emailClient.post('users/jwt-login', jsonData);

    if (response.status === 200) {
      //set cookie
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
      const access_token = response.data.access_token;
      const refresh_token = response.data.refresh_token;
      Cookies.set('access_token', access_token, { expires: 1 }); // 1일 후 만료
      Cookies.set('refresh_token', refresh_token, { expires: 1 }); // 1일 후 만료
    }

    emailClient.interceptors.request.use(
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

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
