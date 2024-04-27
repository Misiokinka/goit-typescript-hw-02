import { useState, useEffect } from "react";
import "./App.css";
import "modern-normalize";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import { requestImagesByQuery } from "../../services/api";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { ImageProps } from "./App.types";

const App = () => {
  const [images, setImages] = useState<ImageProps[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);
  const [page, setPage] = useState<number>(1);
  const perPage = 15;

  const fetchData = async (inputText: string, isReset: boolean) => {
    try {
      setIsLoading(true);
      if (inputText) {
        const data = await requestImagesByQuery(inputText, page, perPage);
        setImages((prevState: ImageProps[] | null) => {
          return isReset
            ? data.results
            : [...(prevState || []), ...data.results];
        });
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchQuery, false);
  }, [page]);

  const onSetSearchQuery = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const modalOpen = (image: ImageProps): void => {
    setModalIsOpen(true);
    setSelectedImage(image);
  };

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} fetchData={fetchData} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      {images?.length  && (
        <>
          <ImageGallery images={images} modalOpen={modalOpen} />
          <LoadMoreBtn handleLoadMore={handleLoadMore} />
        </>
      )}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          selectedImage={selectedImage}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </>
  );
};

export default App;
