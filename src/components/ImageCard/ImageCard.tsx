import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { src, alt, modalOpen, image } = props;

  return (
    <img
      className={css.imageItem}
      width={200}
      height={200}
      src={src}
      alt={alt}
      onClick={() => {
        modalOpen(image);
      }}
    />
  );
};

export default ImageCard;
