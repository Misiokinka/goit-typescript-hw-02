
import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";
import { GalleryProps } from "./ImnageGallery.types";

const ImageGallery:React.FC<GalleryProps> = (props) => {
    const { images, modalOpen } = props
    return (<ul className={css.imageGalleryList}>
        {images?.length && images.map(image => (
            <li className={css.imageItemList} key={image.id} >
                <ImageCard
                    src={image.urls.small}
                    alt={image.alt_description}
                    modalOpen={modalOpen}
                    image={image}
                />
            </li>))}
    </ul>)

}

export default ImageGallery;