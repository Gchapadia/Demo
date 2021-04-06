import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodMenuRoutingModule } from './food-menu-routing.module';
import { FoodMenuComponent } from './food-menu/food-menu.component';


@NgModule({
  declarations: [FoodMenuComponent],
  imports: [
    CommonModule,
    FoodMenuRoutingModule
  ]
})
export class FoodMenuModule { }
