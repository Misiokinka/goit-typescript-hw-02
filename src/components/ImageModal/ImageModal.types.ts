import { ImageProps } from "../App/App.types";

export interface ImageModalProps {
    selectedImage: ImageProps | null;
    setModalIsOpen: (value: boolean) => void;
    modalIsOpen: boolean;
    
}