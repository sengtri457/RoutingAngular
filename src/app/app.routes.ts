import { Routes } from '@angular/router';
import { RecipeItems } from './Component/recipe-items/recipe-items';
import { Loan } from './Component/loan/loan';
import { Homepage } from './Component/homepage/homepage';
import { PassworDeigits } from './Component/passwor-deigits/passwor-deigits';
import { HideRow } from './Component/hide-row/hide-row';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'aba',
  },
  {
    path: 'Receipe',
    component: RecipeItems,
  },
  {
    path: 'home',
    component: Homepage,
  },
  {
    path: 'LoanSystem',
    component: Loan,
  },
  {
    path: 'aba',
    component: PassworDeigits,
  },
  {
    path: 'dashboard',
    component: HideRow,
  },
];
