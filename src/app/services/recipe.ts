import { Injectable } from '@angular/core';
import { DataRecipeItems } from '../models/Datarecipe.type';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  constructor() {}

  private _UserName: string = '';
  private _Password: string = '';
  setUserName(userName: string, passsword: string) {
    this._UserName = userName;
    this._Password = passsword;
    localStorage.setItem('username', userName);
    localStorage.setItem('password', passsword);
  }
  getUserName(): string {
    return this._UserName || localStorage.getItem('username') || '';
  }
  getPassword(): string {
    return this._Password || localStorage.getItem('password') || '';
  }

  items: Array<DataRecipeItems> = [
    {
      id: 1,
      ProductName: 'coke',
      SellPrice: 100,
      Qty: 1,
      star: 'fa-solid fa-star',
    },
    {
      id: 2,
      ProductName: 'Sting',
      SellPrice: 100,
      Qty: 1,
      star: 'fa-solid fa-star',
    },
    {
      id: 3,
      ProductName: 'Tiger',
      SellPrice: 10.5,
      Qty: 1,
      star: 'fa-solid fa-star',
    },
    {
      id: 4,
      ProductName: 'Beer',
      SellPrice: 100,
      Qty: 1,
      star: 'fa-solid fa-star',
    },
    {
      id: 5,
      ProductName: 'Juice',
      SellPrice: 300,
      Qty: 1,
      star: 'fa-solid fa-star',
    },
    {
      id: 6,
      ProductName: 'Water',
      SellPrice: 200,
      Qty: 1,
      star: 'fa-solid fa-star',
    },
  ];
  total(): number {
    return this.items.reduce(
      (sum, item) => sum + item.SellPrice * (item.Qty ?? 0),
      0
    );
  }
  totalQty(): number {
    return this.items.reduce((sum, item) => sum + (item.Qty ?? 0), 0);
  }
  cash: number = 1000;
  totalCash(): number {
    return this.cash - this.total();
  }

  admin: string = 'Admin';
  catchAdmin(): string {
    return this.admin;
  }
}
