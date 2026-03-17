import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-features-section',
  imports: [CommonModule, IconComponent],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.css',
})
export class FeaturesSectionComponent {
  features = [
    {
      id: 1,
      icon: 'truck',
      title: 'Free Shipping',
      description: 'On orders over 500 EGP',
    },
    {
      id: 2,
      icon: 'return',
      title: 'Easy Returns',
      description: '14-day return policy',
    },
    {
      id: 3,
      icon: 'half-shield',
      title: 'Secure Payment',
      description: '100% secure checkout',
    },
    {
      id: 4,
      icon: 'headset',
      title: '24/7 Support',
      description: 'Contact us anytime',
    },
  ];
}
