import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import Swal from 'sweetalert2';
import { Recipe } from '../../services/recipe';
interface color {
  color: string;
  text: string;
  clas?: string;
}
@Component({
  selector: 'app-hide-row',
  imports: [CommonModule, RouterLink],
  templateUrl: './hide-row.html',
  styleUrl: './hide-row.css',
})
export class HideRow implements OnInit {
  isActive = true;
  isdark = true;
  isAc = true;
  ad = inject(Recipe);
  navigatepage = inject(Router);
  admin = this.ad.catchAdmin();
  getcolor() {
    const row: color[] = [
      {
        color: '#FF5733',
        text: 'Course',
        clas: 'fa-solid fa-graduation-cap',
      },
      {
        color: '#33FF57',
        text: 'Schedule',
        clas: 'fa-solid fa-calendar-days',
      },
      {
        color: '#3357FF',
        text: 'Attendent',
        clas: 'fa-solid fa-clipboard-user',
      },
      {
        color: '#F1C40F',
        text: 'Score',
        clas: 'fa-solid fa-list-check',
      },
      {
        color: '#9B59B6',
        text: 'Teacher',
        clas: 'fa-solid fa-person-chalkboard',
      },
      {
        color: '#E67E22',
        text: 'Class',
        clas: 'fa-solid fa-landmark',
      },
    ];
    return row;
  }
  RowColor() {
    const row: color[] = [
      { color: '#1ABC9C', text: 'Account', clas: 'fa-solid fa-user' },
      { color: '#2ECC71', text: 'Login', clas: 'fa-solid fa-user-tie' },
    ];
    return row;
  }
  hideNav() {
    return {
      navbarClass: this.isActive ? 'wrappernavbar' : 'active',
      iconClass: this.isAc ? 'fa-solid fa-bars' : 'fa-solid fa-xmark',
    };
  }
  clickNav() {
    this.isActive = !this.isActive;
    this.isAc = !this.isAc;
  }
  CongrateData() {
    return Swal.fire({
      title: 'welcome Admin',
      icon: 'success',
      draggable: true,
    });
  }
  Loout() {
    this.navigatepage.navigate(['/aba']);
  }
  NavigatePage(text: string) {
    if (text == 'Course') {
      this.navigatepage.navigate(['/Course']);
    } else if (text == 'Schedule') {
      this.navigatepage.navigate(['/Scedule']);
    } else if (text == 'Attendent') {
      this.navigatepage.navigate(['/Attendent']);
    } else if (text == 'Score') {
      this.navigatepage.navigate(['/Sore']);
    } else if (text == 'Teacher') {
      this.navigatepage.navigate(['/Teacher']);
    } else if (text == 'Class') {
      this.navigatepage.navigate(['/Class']);
    } else {
      alert('No Page found');
    }
  }
  darkMode() {
    return this.isdark ? 'wrapper-dash' : 'activeDark';
  }
  toggleDarkMode() {
    this.isdark = !this.isdark;
  }
  ngOnInit(): void {
    this.CongrateData();
  }
}
