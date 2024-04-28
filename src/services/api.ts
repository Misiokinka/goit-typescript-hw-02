import axios from "axios";
import { ParamsTypes } from "./api.types";
import { ImageProps } from "../components/App/App.types";

const clientId = "o_2r6sAVRTu_TAdRBswawRrxX-w6zVvb-K4Ds8ra04s";

export const requestImagesByQuery = async (
  query: string,
  page: number,
  perPage: number
):Promise<ParamsTypes<ImageProps>> => {
  const { data } = await axios.get<ParamsTypes<ImageProps>>(
    `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${query}&per_page=${perPage}&page=${page}`
  );
  return data;
};

export const requestPagination = async (page:number, perPage:number):Promise<ParamsTypes<ImageProps>> => {
  const { data } = await axios.get<ParamsTypes<ImageProps>>(
    `https://api.unsplash.com/photos/?client_id=${clientId}&per_page=${perPage}&page=${page}`
  );
  return data;
};
