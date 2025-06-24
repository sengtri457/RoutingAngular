import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Homepage } from './Component/homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'RouterAngular';
}
