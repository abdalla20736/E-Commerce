import { inject, Injectable } from '@angular/core';
import { IProduct } from '../models/products/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ICartResponse } from '../models/cart/cart-response-model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly baseURL = environment.baseUrl;
  private products: IProduct[] = [];

  getCurrentUserCart(): Observable<ICartResponse> {
    return this.httpClient.get<ICartResponse>(`${this.baseURL}/v2/cart`);
  }

  addToCart(productId: string): Observable<ICartResponse> {
    return this.httpClient.post<ICartResponse>(`${this.baseURL}/v2/cart`, { productId });
  }

  applyCoupon(couponName: string): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/v2/cart/applyCoupon`, { couponName });
  }

  removeFromCart(productId: string): Observable<ICartResponse> {
    return this.httpClient.delete<ICartResponse>(`${this.baseURL}/v2/cart/${productId}`);
  }

  clearCart(): Observable<ICartResponse> {
    return this.httpClient.delete<ICartResponse>(`${this.baseURL}/v2/cart`);
  }

  updateCartItemQuantity(productId: string, count: number): Observable<ICartResponse> {
    return this.httpClient.put<ICartResponse>(`${this.baseURL}/v2/cart/${productId}`, { count });
  }
}
