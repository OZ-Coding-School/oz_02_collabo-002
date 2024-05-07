import { getImages } from '@/services/getImages';
import { useQuery } from '@tanstack/react-query';

const email = 'b4ur2old@naver.com';
export const useImages = (keyword: string, style: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['getImageDataApi', email],
    queryFn: () =>
      getImages()
        .then(res => res)
        .catch(err => {
          console.error(err);
          return [];
        }),
    enabled: false,
  });
  return { data, isLoading, error, refetch };
};
