import { ImageProps } from "../components/App/App.types";



export interface RequestImagesByQuery {
    query: string;
      page: number;
      perPage: number;
      clientId:string
      results: ImageProps[];
    }
    
export interface RequestPagination{
   
    page: number;
      perPage: number;
      clientId:string
}

export interface ParamsTypes<Dto>{
results:Dto[]
    total: number;
    totalPages: number;
}