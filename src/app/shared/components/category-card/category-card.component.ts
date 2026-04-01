import { Component, input } from '@angular/core';
import { ICategory } from '../../../core/models/categories/category.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-card',
  imports: [RouterLink],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  category = input<ICategory>();
  isShortcutStyle = input(true);
}
