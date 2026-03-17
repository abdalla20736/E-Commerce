import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CartService } from '../../core/services/cart.service';
import { ICartResponse } from '../../core/models/cart/cart-response-model';
import { FeaturesSectionComponent } from '../../shared/components/features-section/features-section.component';
import { CartProductCardComponent } from './components/cart-product-card/cart-product-card.component';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, IconComponent, FeaturesSectionComponent, CartProductCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private readonly cartService = inject(CartService);
  

  cart = signal<ICartResponse | null>(null);

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.cartService.getCurrentUserCart().subscribe({
      next: (response) => {
        this.cart.set(response);
      },
      error: (error) => {
        console.error('Error fetching cart items:', error);
      },
    });
  }

  clearCart(): void {}

  removeFromCart(productId: string): void {}
}
