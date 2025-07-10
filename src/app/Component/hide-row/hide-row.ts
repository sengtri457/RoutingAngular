import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
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

  theme = signal<'wrapper-dash' | 'activeDark'>('wrapper-dash');
  toggleTheme() {
    this.theme.update((current) =>
      current == 'wrapper-dash' ? 'activeDark' : 'wrapper-dash'
    );
  }
  currentLanguage: 'en' | 'km' = 'en';
  getcolor(): color[] {
    const textMap = {
      en: ['Course', 'Schedule', 'Attendent', 'Score', 'Teacher', 'Class'],
      km: [
        'វគ្គសិក្សា',
        'កាលវិភាគ',
        'វត្តមាន',
        'ពិន្ទុ',
        'គ្រូបង្រៀន',
        'ថ្នាក់',
      ],
    };

    const classMap = [
      'fa-solid fa-graduation-cap',
      'fa-solid fa-calendar-days',
      'fa-solid fa-clipboard-user',
      'fa-solid fa-list-check',
      'fa-solid fa-person-chalkboard',
      'fa-solid fa-landmark',
    ];

    return textMap[this.currentLanguage].map((text, index) => ({
      color: ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#E67E22'][
        index
      ],
      text,
      clas: classMap[index],
    }));
  }
  RowColor(): color[] {
    const textMap = {
      en: ['Account', 'Login'],
      km: ['គណនី', 'ចូលប្រើប្រាស់'],
    };

    const classMap = ['fa-solid fa-user', 'fa-solid fa-user-tie'];

    return textMap[this.currentLanguage].map((text, index) => ({
      color: ['#1ABC9C', '#2ECC71'][index],
      text,
      clas: classMap[index],
    }));
  }
  NameChange() {
    const NameChnage = {
      en: 'Bun Sengtri',
      km: 'ប៊ុន សេងទ្រី',
    };
    return NameChnage[this.currentLanguage];
  }
  AdminChange() {
    const adminName = {
      en: 'Admin',
      km: 'អ្នក​គ្រប់គ្រង',
    };
    return adminName[this.currentLanguage];
  }
  idChange() {
    const idChnage = {
      en: ['Id:', '10 100'],
      km: ['លេខសម្គាល់', '១០ ​១០០'],
    };
    return idChnage[this.currentLanguage]
      .map((id) => {
        return id;
      })
      .join(' ');
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
    const routeMap: Record<string, string> = {
      Course: '/Course',
      Schedule: '/Scedule',
      Attendent: '/Attendent',
      Score: '/Sore',
      Teacher: '/Teacher',
      Class: '/Class',
      វគ្គសិក្សា: '/Course',
      កាលវិភាគ: '/Scedule',
      វត្តមាន: '/Attendent',
      ពិន្ទុ: '/Sore',
      គ្រូបង្រៀន: '/Teacher',
      ថ្នាក់: '/Class',
    };

    const route = routeMap[text];
    if (route) {
      this.navigatepage.navigate([route]);
    } else {
      Swal.fire({
        title: 'Page Not Found',
        icon: 'error',
        draggable: false,
      });
    }
  }

  // darkMode() {
  //   return this.isdark ? 'wrapper-dash' : 'activeDark';
  // }
  // toggleDarkMode() {
  //   this.isdark = !this.isdark;
  // }
  KhmerLanguaue() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'km' : 'en';
  }
  ngOnInit(): void {
    this.CongrateData();
  }
}
