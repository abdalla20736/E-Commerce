import { ISubcategory } from './subcategory.model';

export interface ISubcategoriesResponse {
  results: number;
  metadata: Metadata;
  data: ISubcategory[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}
