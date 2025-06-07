import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./pages/sign-in/sign-in.component').then(m => m.SignInComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'trip-planner',
    loadComponent: () =>
      import('./pages/trip-planner/trip-planner.component').then(m => m.TripPlannerComponent),
  },
  {
    path: 'ai-suggestions',
    loadComponent: () =>
      import('./pages/ai-suggestions/ai-suggestions.component').then(m => m.AiSuggestionsComponent),
  },
  // Wildcard/fallback
  {
    path: '**',
    redirectTo: 'sign-in'
  }
];
