import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'UltraVein – szkolenia z dostępu naczyniowego i terapii infuzyjnej',
    loadComponent: () =>
      import('./features/home/home').then((m: typeof import('./features/home/home')) => m.Home),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
