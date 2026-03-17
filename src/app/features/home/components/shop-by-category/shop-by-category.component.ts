import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoryService } from '../../../../core/services/category.service';
import { PromoCardComponent } from './promo-card/promo-card.component';
import { ICategory } from '../../../../core/models/categories/category.model';
import { CategoryCardComponent } from '../../../../shared/components/category-card/category-card.component';

@Component({
  selector: 'app-shop-by-category',
  imports: [SectionHeaderComponent, RouterLink, PromoCardComponent, CategoryCardComponent],
  templateUrl: './shop-by-category.component.html',
  styleUrl: './shop-by-category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopByCategoryComponent {
  private readonly categoriesService = inject(CategoryService);
  private readonly route = inject(ActivatedRoute);

  categories: ICategory[] = [];

  promos: any[] = [
    {
      id: 1,
      icon: '🔥',
      badge: 'Deal of the Day',
      title: 'Fresh Organic Fruits',
      description: 'Get up to 40% off on selected organic fruits',
      discount: '40% OFF',
      code: 'ORGANIC40',
      buttonText: 'Shop Now',
      containerClass: 'bg-gradient-to-br from-emerald-500 to-emerald-700 text-white',
      buttonClass: 'bg-white text-emerald-600 hover:bg-emerald-50',
    },
    {
      id: 2,
      icon: '✨',
      badge: 'New Arrivals',
      title: 'Exotic Vegetables',
      description: 'Discover our latest collection of premium vegetables',
      discount: '25% OFF',
      code: 'FRESH25',
      buttonText: 'Explore Now',
      containerClass: 'bg-gradient-to-br from-orange-400 to-rose-500 text-white',
      buttonClass: 'bg-white text-orange-500 hover:bg-orange-50',
    },
  ];

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.loadCategories();
    });
  }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      },
    });
  }
}
