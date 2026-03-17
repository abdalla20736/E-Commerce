import { Component } from '@angular/core';
import { FeatureCardComponent } from './feature-card/feature-card.component';

@Component({
  selector: 'app-why-choose-us',
  imports: [FeatureCardComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css',
})
export class WhyChooseUsComponent {
  cards = [
    {
      iconName: 'truck',
      title: 'Free Shipping',
      description: 'On orders over 500 EGP',
      bgColor: 'bg-blue-100',
      textColor: 'text-[#2B7FFF]',
    },
    {
      iconName: 'half-shield',
      title: 'Secure Payment',
      description: '100% secure transactions',
      bgColor: 'bg-emerald-100',
      textColor: 'text-[#00BC7D]',
    },
    {
      iconName: 'return',
      title: 'Easy Returns',
      description: '14-day return policy',
      bgColor: 'bg-orange-100',
      textColor: 'text-[#FF6900]',
    },
    {
      iconName: 'headset',
      title: '24/7 Support',
      description: 'Dedicated support team',
      bgColor: 'bg-violet-100',
      textColor: 'text-[#AD46FF]',
    },
  ];
}
