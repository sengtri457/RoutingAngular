import { Component } from '@angular/core';

interface ScheduleType {
  time: string;
  location: string;
  instractor: string;
  Course: string;
  dateCourse: string;
}

@Component({
  selector: 'app-schedule',
  imports: [],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
})
export class Schedule {
  duration: number = 4;
  title: string[] = [
    'Web Development Basics',
    'Advanced CSS Techniques',
    'Project Workshop',
    'Guest Speaker Series: Industry Trends',
  ];
  dateDay: string[] = [
    'Monday, July 8th',
    'Tuesday, July 9th ',
    'Wednesday, July 10th',
    'Friday, July 12th',
  ];
  timeDate: string[] = [
    '10:00 AM - 12:00 PM',
    '02:00 PM - 04:00 PM',
    '02:00 PM - 04:00 PM',
    '02:00 PM - 04:00 PM',
  ];
  location: string[] = [
    'Online - Zoom Link',
    'Online - Zoom Link',
    'Online - Zoom Link',
    'Online - Zoom Link',
  ];
  Instructor: string[] = ['Jane Doe', 'tri', 'tri', 'tri'];

  displaySchdule() {
    const row: ScheduleType[] = [];
    for (let index = 0; index < this.duration; index++) {
      row.push({
        dateCourse: this.dateDay[index],
        Course: this.title[index],
        time: this.timeDate[index],
        instractor: this.Instructor[index],
        location: this.location[index],
      });
    }
    return row;
  }
}
