import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

export interface DesignSelectBoxProps {
  onSelectDesign: () => void;
  onRetry: () => void;
  data?: ImageInfo[];
  error: Error | null;
}
export interface SelectImage {
  image: ImageInfo[];
}
export interface ImageInfo {
  img_id: string;
  img_url: string;
  keyword_input?: string;
  member_id?: number;
  style_code?: string;
}
export interface FetchImageData {
  data: ImageInfo[];
  isLoading: boolean;
  error: Error | null;
  refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>>;
}
