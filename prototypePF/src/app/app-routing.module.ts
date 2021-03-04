import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './components/login/login-routing.module';
import { RegisterRoutingModule } from './components/register/register-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { DashbordRoutingModule } from './components/dashbord/dashbord-routing.module';
import {DashbordComponent } from './components/dashbord/dashbord.component';
import { SocietelisteRoutingModule } from './components/societeliste/societeliste-routing.module';
import {SocietelisteComponent } from './components/societeliste/societeliste.component';
import {EmployeeListeComponent} from './components/employee-liste/employee-liste.component'
import { ForgetPasswordRoutingModule } from './components/forget-password/forget-password-routing.module';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
const routes: Routes = [
  {
  path:'',
  redirectTo : 'login',
  pathMatch: 'full',
  
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'dashbord',
  component: DashbordComponent
},
{
  path: 'societeliste',
  component: SocietelisteComponent
},
{
  path: 'employee-liste',
  component: EmployeeListeComponent
},
{
  path: 'forget-password',
  component: ForgetPasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),LoginRoutingModule, RegisterRoutingModule,DashbordRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
