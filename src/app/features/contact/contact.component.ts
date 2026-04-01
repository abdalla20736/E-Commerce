import { Component } from '@angular/core';
import { BreadcrumbHeaderComponent } from "../../shared/components/breadcrumb-header/breadcrumb-header.component";
import { FeaturesSectionComponent } from "../../shared/components/features-section/features-section.component";

@Component({
  selector: 'app-contact',
  imports: [BreadcrumbHeaderComponent, FeaturesSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
