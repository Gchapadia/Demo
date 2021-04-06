import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PATHS } from './enums/paths.enum';

const routes: Routes = [
  {
    path: PATHS.DASHBOARD,
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        mod => mod.DashboardModule
      ),
  },
  {
    path: PATHS.RESERVATION,
    loadChildren: () =>
      import('./components/reservation/reservation.module').then(
        mod => mod.ReservationModule
      ),
  },
  {
    path: PATHS.ACCOUNTING,
    loadChildren: () =>
      import('./components/accounting/accounting.module').then(
        mod => mod.AccountingModule
      ),
  },
  {
    path: PATHS.EMPLOYER,
    loadChildren: () =>
      import('./components/employer/employer.module').then(
        mod => mod.EmployerModule
      ),
  },
  {
    path: PATHS.FOOD_MENU,
    loadChildren: () =>
      import('./components/food-menu/food-menu.module').then(
        mod => mod.FoodMenuModule
      ),
  },
  {
    path: PATHS.HELP,
    loadChildren: () =>
      import('./components/help/help.module').then(
        mod => mod.HelpModule
      ),
  },
  {
    path: '',
    redirectTo: PATHS.DASHBOARD,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
