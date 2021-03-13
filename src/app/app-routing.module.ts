import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './view/table/table.component';
import { ChartComponent } from './view/chart/chart.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'chart', component: ChartComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
