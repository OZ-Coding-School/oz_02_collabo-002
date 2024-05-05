import { getImages } from '@/services/getImages';
import { useQuery } from '@tanstack/react-query';

export const useImages = (keyword: string, style: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getImageDataApi'],
    queryFn: () =>
      getImages(keyword, style)
        .then(res => res?.data)
        .catch(err => {
          console.error(err);
          return [];
        }),
  });
  return { data, isLoading, error };
};
