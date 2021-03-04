
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListeComponent } from './employee-liste.component';
import {HeaderbarModule} from '../headerbar/headerbar.module'
const routes: Routes = [
  {
    path: '',
    component: EmployeeListeComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderbarModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeListeRoutingModule {}