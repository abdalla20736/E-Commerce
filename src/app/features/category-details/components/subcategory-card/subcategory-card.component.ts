import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ISubcategory } from '../../../../core/models/subcategories/subcategory.model';

@Component({
  selector: 'app-subcategory-card',
  imports: [RouterLink],
  templateUrl: './subcategory-card.component.html',
  styleUrl: './subcategory-card.component.css',
})
export class SubcategoryCardComponent {
  subcategory = input<ISubcategory>();
}
