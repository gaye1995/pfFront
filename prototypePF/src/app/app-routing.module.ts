import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '././shared/auth/login/login.component';
import { RegisterComponent } from '././shared/auth/register/register.component';
import { DashbordComponent } from '././shared/components/dashbord/dashbord.component';
import { SocietelisteComponent } from '././shared/components/societeliste/societeliste.component';
import { EmployeeListeComponent } from '././shared/components/employee-liste/employee-liste.component'
import { ForgetPasswordComponent } from '././shared/auth/forget-password/forget-password.component';
import { ComptaComponent } from '././shared/components/compta/compta.component';
import { FinancesComponent } from '././shared/components/finances/finances.component';
import { NoteDeFraisComponent } from '././shared/components/note-de-frais/note-de-frais.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ListeClientsComponent } from './shared/components/liste-clients/liste-clients.component';
import { ClientsComponent } from './shared/components/donneesclient/clients/clients.component';
import { FacturesComponent } from './shared/components/donneesclient/factures/factures.component';
import { BanqueComponent } from './shared/components/banque/banque.component';
import { ListebanqueComponent } from './shared/components/listebanque/listebanque.component';
import { DiscussionComponent } from './shared/components/discussion/discussion.component';
import { CloctureComponent } from './shared/components/clocture/clocture.component';
import { UtilisateursComponent } from './shared/components/utilisateurs/utilisateurs.component';
import { ListearticleComponent } from './shared/components/listearticle/listearticle.component';
import { BilanComponent } from './shared/components/bilan/bilan.component';
import { DepenseComponent } from './shared/components/depense/depense.component';
import { ComptederesultatComponent } from './shared/components/comptederesultat/comptederesultat.component';
import { RepportComponent } from './shared/components/repport/repport.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { NewfactureComponent } from './shared/components/newfacture/newfacture.component';


export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
 
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'dashbord',
      component: DashbordComponent
    }, 
    {
      path: 'employee-liste',
      component: EmployeeListeComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'newfacture',
      component: NewfactureComponent,
    },
    
    {
      path: 'article',
      component: ListearticleComponent,
    },
    {
      path: 'Bilan',
      component: BilanComponent,
    },
    {
      path: 'depense',
      component: DepenseComponent,
    },
    {
      path: 'Comptederesultat',
      component: ComptederesultatComponent,
    },
    {
      path: 'discussion',
      component: DiscussionComponent
    },
    {
      path: 'clients',
      component: ClientsComponent
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
      path: 'repport',
      component: RepportComponent,
    }
      ,
    {
      path: 'utilisateurs',
      component: UtilisateursComponent
    }
      ,
    {
      path: 'clocture',
      component: CloctureComponent
    }
      ,
    {
      path: 'note-de-frais',
      component: NoteDeFraisComponent
    }
      ,
    {
      path: 'listebanque',
      component: ListebanqueComponent,
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
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
