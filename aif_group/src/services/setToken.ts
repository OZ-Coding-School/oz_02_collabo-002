import { apiClient } from './instance';

export async function setToken(email: string, status: string, password: string) {
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
    const response = await apiClient.post('/users/jwt-login', jsonData);
    if (response.status === 200) {
      //set cookie
      const jwtToken = response.data;
      apiClient.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
        return config;
      });
    }
  } catch (error) {
    console.error(error);
  }
}
