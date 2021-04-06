import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restaurant-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories = [
    {
      name: 'Pizza',
      items: 7,
      icon: 'bi-circle'
    },
    {
      name: 'Burger',
      items: 3,
      icon: 'bi-circle'
    },
    {
      name: 'Pasta',
      items: 5,
      icon: 'bi-circle'
    },
    {
      name: 'Cake',
      items: 3,
      icon: 'bi-circle'
    }
  ];

  public selected: any;

  constructor() {
    this.selected = this.categories[0];
  }

  ngOnInit(): void {
  }

}
