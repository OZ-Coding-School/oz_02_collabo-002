import { createImages } from '@/services/createImages';
import { getImages } from '@/services/getImages';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { randomUUID } from 'crypto';

export interface CreationResult {
  status_code: 201 | 400;
  detail: string;
  header: string;
}

export const useImages = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: data => createImages(data.keyword, data.style),
    onSuccess: () => {
      // createImage 호출 성공 후 getImages 쿼리를 트리거
      queryClient.invalidateQueries(['getImages']);
    },
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ['getImages'],
    queryFn: () => getImages(),
    enabled: false,
  });
  return { data, isLoading, error, createMutation };
};
