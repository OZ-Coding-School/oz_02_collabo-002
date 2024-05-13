import { handleImageProcess } from '@/services';
import { createImages } from '@/services/createImages';
import { getImages } from '@/services/getImages';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useImages = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['getImages'],
    queryFn: () => getImages(),
    enabled: false,
  });

  const createMutation = useMutation({
    mutationFn: (data: { keyword: string; style: string }) => createImages(data.keyword, data.style),
    //mutationFn: ({ keyword, style }: { keyword: string; style: string }) => handleImageProcess(keyword, style),
    onSuccess: () => {
      // createImage 호출 성공 후 getImages 쿼리를 트리거
      refetch();
    },
  });
  return { data, isLoading, error, createMutation };
};
