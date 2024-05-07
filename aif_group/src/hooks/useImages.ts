import { createImages } from '@/services/createImages';
import { getImages } from '@/services/getImages';
import { useQuery } from '@tanstack/react-query';

const email = 'b4ur2old@naver.com';
export const useImages = (keyword: string, style: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['getImageDataApi', email],
    queryFn: async () => {
      try {
        await createImages(keyword, style);
        const ImageData = await getImages();
        return ImageData;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: false,
  });
  return { data, isLoading, error, refetch };
};
