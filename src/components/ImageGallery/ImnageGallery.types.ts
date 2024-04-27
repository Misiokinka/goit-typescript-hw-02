import { ImageProps} from '../App/App.types'

export interface GalleryProps {
    images: ImageProps[] | null;
    modalOpen: (img:ImageProps) => void;
}