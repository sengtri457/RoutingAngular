import { Routes } from '@angular/router';
import { RecipeItems } from './Component/recipe-items/recipe-items';
import { Homepage } from './Component/homepage/homepage';
import { Loan } from './Component/loan/loan';

export const routes: Routes = [
  {
    path: 'Receipe',
    component: RecipeItems,
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: Homepage,
  },
  {
    path: 'LoanSystem',
    component: Loan,
  },
];
