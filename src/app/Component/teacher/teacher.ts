import { Component } from '@angular/core';
interface Description {
  id: number;
  username: string;
  title: string;
  description: string;
  btnTitle: string;
  imgUrl: string;
}
@Component({
  selector: 'app-teacher',
  imports: [],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
})
export class Teacher {
  displayTeacher() {
    const row: Description[] = [];
    row.push(
      {
        id: 1,
        username: 'Bun Sengtri',
        title: 'Senior web Development',
        description:
          'Bun Sengtri is an experienced web developer and educator with over 10 years in the industry. She specializes in front-end technologies and is passionate about helping students build interactive and user-friendly web applications. Her teaching philosophy focuses on practical, hands-on projects.',
        btnTitle: 'Views Sengtri Course',
        imgUrl: '/img/PortfolioPic.jpg',
      },
      {
        id: 2,
        username: 'Bun Sengtri',
        title: 'Senior web Development',
        description:
          'Bun Sengtri is an experienced web developer and educator with over 10 years in the industry. She specializes in front-end technologies and is passionate about helping students build interactive and user-friendly web applications. Her teaching philosophy focuses on practical, hands-on projects.',
        btnTitle: 'Views Sengtri Course',
        imgUrl: '/img/PortfolioPic.jpg',
      },
      {
        id: 3,
        username: 'Bun Sengtri',
        title: 'Senior web Development',
        description:
          'Bun Sengtri is an experienced web developer and educator with over 10 years in the industry. She specializes in front-end technologies and is passionate about helping students build interactive and user-friendly web applications. Her teaching philosophy focuses on practical, hands-on projects.',
        btnTitle: 'Views Sengtri Course',
        imgUrl: '/img/PortfolioPic.jpg',
      },
      {
        id: 4,
        username: 'Bun Sengtri',
        title: 'Senior web Development',
        description:
          'Bun Sengtri is an experienced web developer and educator with over 10 years in the industry. She specializes in front-end technologies and is passionate about helping students build interactive and user-friendly web applications. Her teaching philosophy focuses on practical, hands-on projects.',
        btnTitle: 'Views Sengtri Course',
        imgUrl: '/img/PortfolioPic.jpg',
      },
      {
        id: 5,
        username: 'Bun Sengtri',
        title: 'Senior web Development',
        description:
          'Bun Sengtri is an experienced web developer and educator with over 10 years in the industry. She specializes in front-end technologies and is passionate about helping students build interactive and user-friendly web applications. Her teaching philosophy focuses on practical, hands-on projects.',
        btnTitle: 'Views Sengtri Course',
        imgUrl: '/img/PortfolioPic.jpg',
      },
      {
        id: 6,
        username: 'Bun Sengtri',
        title: 'Senior web Development',
        description:
          'Bun Sengtri is an experienced web developer and educator with over 10 years in the industry. She specializes in front-end technologies and is passionate about helping students build interactive and user-friendly web applications. Her teaching philosophy focuses on practical, hands-on projects.',
        btnTitle: 'Views Sengtri Course',
        imgUrl: '/img/PortfolioPic.jpg',
      }
    );
    return row;
  }
}
