import { Component, OnInit } from '@angular/core';
import { PATHS } from 'src/app/enums/paths.enum';

@Component({
  selector: 'restaurant-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public Paths = PATHS;

  constructor() { }

  ngOnInit(): void {
  }

}
