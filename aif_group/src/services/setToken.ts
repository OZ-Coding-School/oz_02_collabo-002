import { emailClient } from './instance';
import Cookies from 'js-cookie';

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
    const response = await emailClient.post('users/jwt-login', jsonData);
    if (response.status === 200) {
      //set cookie
      const jwtToken = response.data.token;
      Cookies.set('Authorization', jwtToken, { expires: 1 }); // 1일 후 만료
    }
  } catch (error) {
    console.error(error);
  }
}
