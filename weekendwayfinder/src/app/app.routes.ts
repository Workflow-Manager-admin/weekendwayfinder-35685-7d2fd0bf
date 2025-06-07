import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { TripPlannerComponent } from './trip-planner/trip-planner.component';

export const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    title: 'Sign In — WeekendWayfinder'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home — WeekendWayfinder'
  },
  {
    path: 'trip-planner',
    component: TripPlannerComponent,
    title: 'Trip Planner — WeekendWayfinder'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  },
  {
    path: '**',
    redirectTo: 'sign-in'
  }
];
