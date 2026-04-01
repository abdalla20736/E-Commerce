import { Component, computed, inject, input, model, OnInit, signal } from '@angular/core';
import { IProduct } from '../../../../core/models/products/product.model';

import { IReview } from '../../../../core/models/reviews/review.model';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { CreateReviewComponent } from './components/create-review/create-review.component';
import { AuthService } from '../../../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-details-review',
  imports: [ReviewCardComponent, CreateReviewComponent, RouterLink, TranslatePipe],
  templateUrl: './details-review.component.html',
  styleUrl: './details-review.component.css',
})
export class DetailsReviewComponent {
  private readonly authService = inject(AuthService);

  product = input<IProduct>();
  reviews = model<IReview[]>([]);
  reviewsCount = input.required<number>();
  activeTab = signal(0);
  currentUser = toSignal(this.authService.currentUser$);
  isLoggedIn = this.authService.isLoggedIn;
  isShowedAllReviews = signal(false);
  isShowedCreateReview = signal(false);
  isPostedReviewAlready = computed(() => {
    const user = this.currentUser();
    const reviews = this.reviews();

    if (!user) return false;

    return reviews.some((review) => review?.user?._id === user._id);
  });

  getStarType(star: number): 'full' | 'half' | 'empty' {
    const rating = this.product()?.ratingsAverage ?? 0;
    return rating >= star ? 'full' : rating >= star - 0.5 ? 'half' : 'empty';
  }

  getRatingPercentByStar(star: number) {
    const reviews = this.reviews();
    const ratingByStar = reviews.filter((review) => review.rating === star);
    const percent = (ratingByStar.length / this.reviewsCount()) * 100;
    return percent;
  }

  deleteReview(reviewId: string): void {
    this.reviews.update((reviews) => reviews.filter((r) => r._id !== reviewId));
  }

  addReview(review: IReview): void {
    this.reviews.update((current) => [review, ...current]);
  }
}
