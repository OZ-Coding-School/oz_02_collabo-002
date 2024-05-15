import { apiClient, emailClient } from './instance';

export async function getUsers() {
  try {
    const response = await emailClient.get('/users');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
