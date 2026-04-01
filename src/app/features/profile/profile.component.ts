import { Component } from '@angular/core';
import { BrandCardComponent } from '../brands/components/brand-card/brand-card.component';
import { BreadcrumbHeaderComponent } from '../../shared/components/breadcrumb-header/breadcrumb-header.component';
import { FeaturesSectionComponent } from '../../shared/components/features-section/features-section.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [
    BreadcrumbHeaderComponent,
    FeaturesSectionComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
