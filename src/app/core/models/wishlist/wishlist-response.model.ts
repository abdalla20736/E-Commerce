import { IProduct } from '../products/product.model';

export interface WishlistResponse {
  status: string;
  count: number;
  data: IProduct[];
}
