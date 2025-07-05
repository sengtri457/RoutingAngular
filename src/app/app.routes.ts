import { Routes } from '@angular/router';
import { RecipeItems } from './Component/recipe-items/recipe-items';
import { Loan } from './Component/loan/loan';
import { Homepage } from './Component/homepage/homepage';
import { PassworDeigits } from './Component/passwor-deigits/passwor-deigits';
import { HideRow } from './Component/hide-row/hide-row';
import { Course } from './Component/course/course';
import { Teacher } from './Component/teacher/teacher';
import { Attendent } from './Component/attendent/attendent';
import { Schedule } from './Component/schedule/schedule';
import { PageError } from './Component/page-error/page-error';

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
  {
    path: 'Course',
    component: Course,
  },
  {
    path: 'Teacher',
    component: Teacher,
  },
  {
    path: 'Attendent',
    component: Attendent,
  },
  {
    path: 'Scedule',
    component: Schedule,
  },
  {
    path: '**',
    component: PageError,
  },
];
