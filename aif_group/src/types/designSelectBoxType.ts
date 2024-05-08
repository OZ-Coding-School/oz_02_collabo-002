import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

export interface DesignSelectBoxProps {
  onSelectDesign: () => void;
  onRetry: () => void;
  data?: ImageData[];
  error: Error | null;
}
export interface SelectImage {
  image: string[];
  idx: number[];
}
export interface CurrentImage {
  image: string;
  idx: number | undefined;
}
export interface ImageData {
  img_id: number;
  img_url: string;
  keyword_input: string;
  member_id: number;
  style_code: string;
}
export interface FetchImageData {
  data: ImageData[];
  isLoading: boolean;
  error: Error | null;
  refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>>;
}
