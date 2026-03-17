import { Routes, CanActivateFn } from '@angular/router';
import { APP_NAME_SUFFIX } from './core/сonstants/app.constant';
import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    canActivate: [guestGuard],
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent),
    title: 'Login' + APP_NAME_SUFFIX,
  },
  {
    canActivate: [guestGuard],
    path: 'signup',
    loadComponent: () =>
      import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
    title: 'Signup' + APP_NAME_SUFFIX,
  },
  {
    canActivate: [guestGuard],
    path: 'forget-password',
    loadComponent: () =>
      import('./features/auth/forget-password/forget-password.component').then(
        (m) => m.ForgetPasswordComponent,
      ),
    title: 'Forget Password' + APP_NAME_SUFFIX,
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Home' + APP_NAME_SUFFIX,
  },
  {
    path: 'shop',
    loadComponent: () => import('./features/shop/shop.component').then((m) => m.ShopComponent),
    title: 'Shop' + APP_NAME_SUFFIX,
  },
  {
    //canActivate: [authGuard],
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then((m) => m.CartComponent),
    title: 'Cart' + APP_NAME_SUFFIX,
  },

  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Fresh' + APP_NAME_SUFFIX,
  },
];
