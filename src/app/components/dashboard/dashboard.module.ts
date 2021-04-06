import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { CustomizeMenuComponent } from './dashboard/customize-menu/customize-menu.component';
import { CategoriesComponent } from './dashboard/customize-menu/categories/categories.component';
import { ItemsComponent } from './dashboard/customize-menu/items/items.component';


@NgModule({
  declarations: [DashboardComponent, OverviewComponent, CustomizeMenuComponent, CategoriesComponent, ItemsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
