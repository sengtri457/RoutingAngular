import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-error',
  imports: [],
  templateUrl: './page-error.html',
  styleUrl: './page-error.css',
})
export class PageError implements OnInit {
  Rou = inject(Router);

  WaitNavigate() {
    setTimeout(() => {
      this.Rou.navigate(['/dashboard']);
    }, 1000);
  }
  ngOnInit(): void {
    this.WaitNavigate();
  }
}
