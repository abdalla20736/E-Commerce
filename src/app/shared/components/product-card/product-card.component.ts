import { CartService } from './../../../core/services/cart.service';
import { Component, computed, inject, input, signal } from '@angular/core';
import { IProduct } from '../../../core/models/products/product.model';
import { IconComponent } from '../icon/icon.component';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../../core/services/wishlist.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-product-card',
  imports: [IconComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  private readonly cartService = inject(CartService);
  private readonly wishlistService: WishlistService = inject(WishlistService);

  product = input<IProduct>();
  isAddedToCart = signal(false);
  isAddedToWishlist = signal(false);

  discountPercentage = computed(() => {
    const currentPrice = Number(this.product()?.price);
    const priceAfterDiscount = Number(this.product()?.priceAfterDiscount);

    const ratio = currentPrice - priceAfterDiscount;
    const percentage = ratio / currentPrice;
    return (percentage * 100).toFixed(0);
  });

  // isInWishlist = computed(() => this.wishlistService.isInWishlist(this.product()?.id!));

  addToWishlist() {
    const productId = this.product()?.id;
    this.wishlistService.addToWishlist(productId!).subscribe({
      next: (response) => {
        console.log('Product added to wishlist:', response);
      },
      error: (error) => {
        console.error('Error adding product to wishlist:', error);
      },
    });
    console.log('Adding product to wishlist:', productId);
  }

  addToCart() {
    this.isAddedToCart.set(true);
    const productId = this.product()?.id;
    this.cartService
      .addToCart(productId!)
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.isAddedToCart.set(false);
          }, 2000);
        }),
      )
      .subscribe({
        next: (response) => {},
        error: (error) => {
          console.error('Error adding product to cart:', error);
        },
      });
  }

  stars = computed(() => Array(4).fill(0));
}
