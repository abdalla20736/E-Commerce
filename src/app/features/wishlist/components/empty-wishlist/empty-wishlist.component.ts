import { Component, inject } from '@angular/core';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { AuthService } from '../../../../core/services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-empty-wishlist',
  imports: [IconComponent],
  templateUrl: './empty-wishlist.component.html',
  styleUrl: './empty-wishlist.component.css',
})
export class EmptyWishlistComponent {
  private readonly authService = inject(AuthService);

  currentUser = toSignal(this.authService.currentUser$);
}
