import { Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { LogoIconComponent } from './components/icons/logo-icon/logo-icon.component';
import { TruckIconComponent } from './components/icons/truck-icon/truck-icon.component';
import { GiftIconComponent } from './components/icons/gift-icon/gift-icon.component';
import { EnvelopeIconComponent } from './components/icons/envelope-icon/envelope-icon.component';
import { UserIconComponent } from './components/icons/user-icon/user-icon.component';
import { UserPlusIconComponent } from './components/icons/user-plus-icon/user-plus-icon.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { IconComponent } from '../icon/icon.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    LogoIconComponent,
    TruckIconComponent,
    GiftIconComponent,
    EnvelopeIconComponent,
    UserIconComponent,
    RouterLink,
    IconComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly authService: AuthService = inject(AuthService);
  private readonly router = inject(Router);

  isMobileMenuOpen = signal(false);
  isCategoryMenuOpen = signal(false);
  isUserMenuOpen = signal(false);
  cartCount = signal(2);
  wishlistCount = signal(3);

  currentUser = toSignal(this.authService.currentUser$);
  isLoggedIn = computed(() => !!this.currentUser());

  @ViewChild('categoryMenu') categoryMenu!: ElementRef;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((state) => !state);
  }
  openCategoryMenu(): void {
    this.isCategoryMenuOpen.set(true);
  }

  closeCategoryMenu(): void {
    this.isCategoryMenuOpen.set(false);
  }

  openUserMenu(): void {
    this.isUserMenuOpen.set(true);
  }

  closeUserMenu(): void {
    this.isUserMenuOpen.set(false);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
