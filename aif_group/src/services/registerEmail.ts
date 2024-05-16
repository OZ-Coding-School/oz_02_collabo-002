import { emailClient } from './instance';

export async function registerEmail(email: string) {
  const jsonData = JSON.stringify({
    email,
  });
  try {
    const response = await emailClient.post('slash/users/register_email', jsonData);
    console.log(response.data.message);
    if (response.status === 200 || response.data.message === '이미 존재하는 이메일입니다.') {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
}
