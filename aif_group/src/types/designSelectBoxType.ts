export interface DesignSelectBoxProps {
  onSelectDesign: () => void;
}
export interface SelectImage {
  image: string[];
  idx: number[];
}
export interface CurrentImage {
  image: string;
  idx: number | undefined;
}
