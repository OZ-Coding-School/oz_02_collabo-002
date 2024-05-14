import { apiClient } from './instance';

export async function registerEmail(email: string) {
  const jsonData = JSON.stringify({
    email,
  });
  try {
    const response = await apiClient.post('users/register_email', jsonData);
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
}
