import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restaurant-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public items = [
    {
      name: 'Italian Pizza',
      price: '35',
      orders: '40',
      revenue: '12000'
    },
    {
      name: 'Italian Pizza',
      price: '35',
      orders: '40',
      revenue: '12000'
    },
    {
      name: 'Italian Pizza',
      price: '35',
      orders: '40',
      revenue: '12000'
    },
    {
      name: 'Italian Pizza',
      price: '35',
      orders: '40',
      revenue: '12000'
    },
    {
      name: 'Italian Pizza',
      price: '35',
      orders: '40',
      revenue: '12000'
    },
    {
      name: 'Italian Pizza',
      price: '35',
      orders: '40',
      revenue: '12000'
    },
    {
      name: 'Italian Pizza',
      price: '35',
      orders: '40',
      revenue: '12000'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
