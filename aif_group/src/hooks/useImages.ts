import { handleImageProcess } from '@/services';
import { createImages } from '@/services/createImages';
import { getImages } from '@/services/getImages';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useImages = (keyword: string, style: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['getImages'],
    queryFn: async () => {
      await createImages(keyword, style);
      const imageData = await getImages();
      return imageData;
    },
    enabled: false,
  });

  return { data, isLoading, error, refetch };
};
