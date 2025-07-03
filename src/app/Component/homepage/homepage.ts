import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  AlrtReceipt() {
    alert('Welcome Receipt Page');
  }
  AlrtLoan() {
    alert('Welcome Loan Page');
  }
}
