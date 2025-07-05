import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface typeClick {
  fil?: string;
  color?: string;
}
@Component({
  selector: 'app-course',
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  maxLenght: number = 1;
  istrue = true;
  code: typeClick[] = Array(this.maxLenght).fill('');
  key: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  FillFun() {
    return this.code;
  }
  Fill() {
    return this.istrue ? 'circle' : 'filled';
  }
  ClikTrue(): void {
    this.istrue = !this.istrue;
    this.Fill();
  }
}
