import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface color {
  color: string;
  text: string;
  code: any;
  price: number;
}

@Component({
  selector: 'app-aba-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './aba-card.html',
  styleUrl: './aba-card.css',
})
export class AbaCard {
  isActive = true;
  getcolor() {
    const row: color[] = [
      { color: '#FF5733', text: 'Red', code: this.RandomCode(), price: 200 },
      { color: '#33FF57', text: 'Green', code: this.RandomCode(), price: 300 },
      { color: '#3357FF', text: 'Blue', code: this.RandomCode(), price: 400 },
      { color: '#F1C40F', text: 'Yellow', code: this.RandomCode(), price: 500 },
      { color: '#9B59B6', text: 'Purple', code: this.RandomCode(), price: 600 },
      { color: '#E67E22', text: 'Orange', code: this.RandomCode(), price: 700 },
      { color: '#1ABC9C', text: 'Teal', code: this.RandomCode(), price: 800 },
      {
        color: '#E74C3C',
        text: 'Crimson',
        code: this.RandomCode(),
        price: 900,
      },
      { color: '#34495E', text: 'Navy', code: this.RandomCode(), price: 1000 },
      {
        color: '#2ECC71',
        text: 'Emerald',
        code: this.RandomCode(),
        price: 1100,
      },
    ];
    return row;
  }
  RandomCode() {
    const num = Math.floor(Math.random() * 1_000_000_000)
      .toString()
      .padStart(9, '0');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
