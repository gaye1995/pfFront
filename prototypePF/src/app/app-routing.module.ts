import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '././shared/auth/login/login.component';
import { LoginRoutingModule } from '././shared/auth/login/login-routing.module';
import { RegisterRoutingModule } from '././shared/auth/register/register-routing.module';
import { RegisterComponent } from '././shared/auth/register/register.component';
import { DashbordRoutingModule } from '././shared/components/dashbord/dashbord-routing.module';
import {DashbordComponent } from '././shared/components/dashbord/dashbord.component';
import {SocietelisteComponent } from '././shared/components/societeliste/societeliste.component';
import {EmployeeListeComponent} from '././shared/components/employee-liste/employee-liste.component'
import { ForgetPasswordComponent } from '././shared/auth/forget-password/forget-password.component';
import { ComptaComponent } from '././shared/components/compta/compta.component';
import { FinancesComponent } from '././shared/components/finances/finances.component';
import { NoteDeFraisComponent } from '././shared/components/note-de-frais/note-de-frais.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ListeClientsComponent } from './shared/components/liste-clients/liste-clients.component';
import { ClientsComponent } from './shared/components/donneesclient/clients/clients.component';
import { FacturesComponent } from './shared/components/donneesclient/factures/factures.component';
import { BanqueComponent } from './shared/components/banque/banque.component';
export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashbordComponent
    },{
      path: 'employee-liste',
      component: EmployeeListeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
  ,
  {
    path: 'banque',
    component: BanqueComponent
  }
  ,
  {
    path: 'liste-clients',
    component: ListeClientsComponent
  }]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
