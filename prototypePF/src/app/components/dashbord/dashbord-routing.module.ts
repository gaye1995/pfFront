
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { RegisterRoutingModule } from 'src/app/auth/register/register-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes),RegisterRoutingModule],
  exports: [RouterModule]
})
export class DashbordRoutingModule {}