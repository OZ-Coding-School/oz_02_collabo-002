import { createImages } from '@/services/createImages';
import { getImages } from '@/services/getImages';
import { useQuery } from '@tanstack/react-query';

export const useImages = (keyword: string, style: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['getImageDataApi', keyword, style],
    queryFn: async () => {
      try {
        await createImages(keyword, style);
        const res = await getImages();
        return res;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: false,
  });
  return { data, isLoading, error, refetch };
};
