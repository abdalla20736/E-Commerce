import { Component, input } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  imports: [],
  templateUrl: './promo-card.component.html',
  styleUrl: './promo-card.component.css',
})
export class PromoCardComponent {
  promoCard = input<any>();
}
