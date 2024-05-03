import axios from 'axios';

const apiClient = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export async function createDesign(keyword: string, style: string) {
  try {
    const useremail = '';
    const res = await apiClient.post(
      '/image/create',
      {
        keyword: 'obama president, vincent van gogh',
        style: 'painting',
      },
      {
        headers: {
          useremail,
        },
      },
    );
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}
