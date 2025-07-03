import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Homepage } from './Component/homepage/homepage';
import { AbaCard } from './Component/aba-card/aba-card';
import { RecipeItems } from './Component/recipe-items/recipe-items';
import { PassworDeigits } from './Component/passwor-deigits/passwor-deigits';
import { HideRow } from './Component/hide-row/hide-row';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Homepage,
    AbaCard,
    RecipeItems,
    PassworDeigits,
    HideRow,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'RouterAngular';
}
