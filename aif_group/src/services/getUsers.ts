import { apiClient } from './instance';

export async function getUsers() {
  try {
    const response = await apiClient.get('/users');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
