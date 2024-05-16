import { saveImages } from '@/services/saveImages';
import { ImageInfo } from '@/types/designSelectBoxType';
import { useQuery } from '@tanstack/react-query';

export const useSaveImages = (images: ImageInfo[]) => {
  const { error, refetch } = useQuery({
    queryKey: ['saveImages'],
    queryFn: () => saveImages(images),
    enabled: false,
  });

  return { error, refetch };
};
