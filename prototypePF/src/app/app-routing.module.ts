import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LoginRoutingModule } from './auth/login/login-routing.module';
import { RegisterRoutingModule } from './auth/register/register-routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { DashbordRoutingModule } from './components/dashbord/dashbord-routing.module';
import {DashbordComponent } from './components/dashbord/dashbord.component';
import { SocietelisteRoutingModule } from './components/societeliste/societeliste-routing.module';
import {SocietelisteComponent } from './components/societeliste/societeliste.component';
import {EmployeeListeComponent} from './components/employee-liste/employee-liste.component'
import { ForgetPasswordRoutingModule } from './auth/forget-password/forget-password-routing.module';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ComptaComponent } from './components/compta/compta.component';
import { FinancesComponent } from './components/finances/finances.component';
import { FacturesComponent } from './components/factures/factures.component';
import { NoteDeFraisComponent } from './components/note-de-frais/note-de-frais.component';
import { FacturesRoutingModule } from './components/factures/factures-routing.module';
import { NoteDeFraisRoutingModule } from './components/note-de-frais/note-de-frais-routing.module';
import { FinancesRoutingModule } from './components/finances/finances-routing.module';
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
},
{
  path: 'compta',
  component: ComptaComponent
},
{
  path: 'finances',
  component: FinancesComponent
},
{
  path: 'factures',
  component: FacturesComponent
}
,
{
  path: 'note-de-frais',
  component: NoteDeFraisComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),LoginRoutingModule, RegisterRoutingModule,DashbordRoutingModule,FacturesRoutingModule,
    NoteDeFraisRoutingModule,FinancesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
