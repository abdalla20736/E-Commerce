import { IBrand } from './brand.model';

export interface IBrandResponse {
  results: number;
  metadata: Metadata;
  data: IBrand[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}
