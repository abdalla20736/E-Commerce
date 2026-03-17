import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICartProduct } from '../../../../core/models/cart/cart-product-model';

@Component({
  selector: 'app-cart-product-card',
  imports: [RouterLink],
  templateUrl: './cart-product-card.component.html',
  styleUrl: './cart-product-card.component.css',
})
export class CartProductCardComponent {
  product = input<ICartProduct>();
}
