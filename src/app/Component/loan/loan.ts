import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
interface loanType {
  no: number;
  principal: number;
  interest: number;
  total: number;
  status: string;
  crrDate: string;
}
@Component({
  selector: 'app-loan',
  imports: [CommonModule, FormsModule],
  templateUrl: './loan.html',
  styleUrl: './loan.css',
})
export class Loan {
  fixedValue: string = '';
  fixValueInterest: string = '';
  fixValueDuration: string = '';
  price = 2000;
  duration = 10; // months
  interestRate = 2; // 2%
  totalPrice: number = 0;
  principal = this.price / this.duration;
  interest = (this.price * this.interestRate) / 100;
  total = this.principal + this.interest;
  StausCheck: string = 'active';
  currentDate = new Date('2023-05-08');
  dateList: string[] = [];
  LoanList() {
    let rows: loanType[] = [];
    for (let i = 1; i <= this.duration; i++) {
      rows.push({
        no: i,
        principal: this.principal,
        interest: this.interest,
        total: this.total,
        status: this.StausCheck,
        crrDate: this.dateList[i - 1] || this.currentDate.toDateString(),
      });
    }
    return rows;
  }
  calas() {
    let numericValuePrice = parseFloat(this.fixedValue) || 2000;
    let numericValueInterest = parseFloat(this.fixValueInterest) || 0;
    let numericValueduration = parseFloat(this.fixValueDuration) || 0;
    if (numericValuePrice > 2000) {
      if (numericValueInterest <= 0) {
        numericValueInterest = this.interestRate;
      }
      if (numericValueduration <= 0) {
        numericValueduration = this.duration;
      }
      let NewInterest = (numericValuePrice * numericValueInterest) / 100;
      let newPrin = numericValuePrice / numericValueduration;
      let newTotal = newPrin + NewInterest;
      this.price = numericValuePrice;
      this.principal = newPrin;
      this.interest = NewInterest;
      this.total = newTotal;
      this.duration = numericValueduration;
      this.dateList = []; // Clear previous dates
      this.Getdate();
      Swal.fire({
        title: 'Update Success!',
        icon: 'success',
        draggable: true,
      });
    } else {
      Swal.fire({
        title: 'Please Input Value > 2000!',
        icon: 'error',
        draggable: true,
      });
    }
    this.fixedValue = '';
    this.fixValueInterest = '';
    this.fixValueDuration = '';
  }
  totalInterest() {
    let sum = 0;
    for (let index = 0; index < this.duration; index++) {
      sum += this.interest;
    }
    return sum;
  }

  grandTotal() {
    let totalEnd = 0;
    for (let index = 0; index < this.duration; index++) {
      totalEnd += this.total;
    }
    return totalEnd;
  }

  Getdate() {
    this.dateList = []; // Clear previous dates if needed
    for (let i = 0; i < this.duration; i++) {
      const date = new Date(this.currentDate.getTime());
      date.setMonth(this.currentDate.getMonth() + i);
      this.dateList.push(date.toISOString().split('T')[0]);
    }
  }

  ngOnInit() {
    this.Getdate();
  }
}
