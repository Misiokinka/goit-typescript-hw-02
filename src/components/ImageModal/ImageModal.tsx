import Modal from 'react-modal';
import css from "./ImageModal.module.css"
import { ImageModalProps } from './ImageModal.types';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: " rgba(0, 0, 0, 0)",
        border:"none"
    },
};



const ImageModal: React.FC<ImageModalProps> = (props) => {
    const { modalIsOpen, selectedImage, setModalIsOpen } = props

    return (
        <Modal
            style={customStyles}
            ariaHideApp={false}
            isOpen={modalIsOpen}
            contentLabel="Example Modal"
            onRequestClose={() => setModalIsOpen(false)}
        >
            <img
                className={css.imageModal}
                onClick={() => setModalIsOpen(false)}
                src={selectedImage?.urls.regular}
                alt={selectedImage?.alt_description}
            />
        </Modal>
    );
}

export default ImageModal;