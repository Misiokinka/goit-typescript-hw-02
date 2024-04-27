import { ImageProps } from "../App/App.types";

export interface ImageCardProps {
  image: ImageProps;
  src: string;
  alt: string;
  modalOpen: (image: ImageProps) => void;
}

