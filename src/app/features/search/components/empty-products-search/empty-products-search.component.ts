import { Component, output } from '@angular/core';

@Component({
  selector: 'app-empty-products-search',
  imports: [],
  templateUrl: './empty-products-search.component.html',
  styleUrl: './empty-products-search.component.css',
})
export class EmptyProductsSearchComponent {
  clearfilters = output();

  clearAllFilters(): void {
    this.clearfilters.emit();
  }
}
