import { IProduct } from './product.model';

export interface IProductsResponse {
  results: number;
  metadata: Metadata;
  data: IProduct[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}
