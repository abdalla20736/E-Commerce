import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { WishlistResponse } from '../models/wishlist/wishlist-response.model';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl;

  getCurrentWishlist(): Observable<WishlistResponse> {
    return this.httpClient.get<WishlistResponse>(`${this.baseUrl}/v1/wishlist`);
  }

  addToWishlist(productId: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/v1/wishlist`, { productId });
  }

  removeFromWishlist(productId: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/v1/wishlist/${productId}`);
  }

  // isInWishlist(productId: string): boolean {
  //   let isInWishlist = false;
  //   this.getCurrentWishlist().subscribe({
  //     next: (response) => {
  //       isInWishlist = response.products.some((product) => product.id === productId);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching wishlist:', error);
  //     },
  //   });
  // }
}
