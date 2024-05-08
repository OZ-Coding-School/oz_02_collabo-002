import { createImages } from '@/services/createImages';
import { getImages } from '@/services/getImages';
import { useQuery } from '@tanstack/react-query';

export interface CreationResult {
  status_code: 201 | 400;
  detail: string;
  header: string;
}

export const useImages = (keyword: string, style: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['getImageDataApi', keyword, style],
    queryFn: async () => {
      await createImages(keyword, style);
      return await getImages();
    },
    enabled: false,
  });
  return { data, isLoading, error, refetch };
};
