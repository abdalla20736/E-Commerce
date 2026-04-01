import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'home',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'categories',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'products',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'brands',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender,
  },

  {
    path: 'products/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'categories/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'search',
    renderMode: RenderMode.Server,
  },

  {
    path: 'login',
    renderMode: RenderMode.Client,
  },
  {
    path: 'signup',
    renderMode: RenderMode.Client,
  },
  {
    path: 'forget-password',
    renderMode: RenderMode.Client,
  },

  {
    path: 'cart',
    renderMode: RenderMode.Client,
  },
  {
    path: 'checkout',
    renderMode: RenderMode.Client,
  },
  {
    path: 'wishlist',
    renderMode: RenderMode.Client,
  },
  {
    path: 'orders',
    renderMode: RenderMode.Client,
  },

  {
    path: 'profile',
    renderMode: RenderMode.Client,
  },
  {
    path: 'profile/**',
    renderMode: RenderMode.Client,
  },

  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
