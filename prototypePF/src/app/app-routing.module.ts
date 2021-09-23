import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '././shared/auth/login/login.component';
import { RegisterComponent } from '././shared/auth/register/register.component';
import { DashbordComponent } from '././shared/components/dashbord/dashbord.component';
import { SocietelisteComponent } from '././shared/components/societeliste/societeliste.component';
import { EmployeeListeComponent } from '././shared/components/donneesEmployees/employee-liste/employee-liste.component'
import { ForgetPasswordComponent } from '././shared/auth/forget-password/forget-password.component';
import { ComptaComponent } from '././shared/components/compta/compta.component';
import { FinancesComponent } from '././shared/components/finances/finances.component';
import { NoteDeFraisComponent } from '././shared/components/donneesEmployees/note-de-frais/note-de-frais.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ListeClientsComponent } from './shared/components/donneesclient/liste-clients/liste-clients.component';
import { ClientsComponent } from './shared/components/donneesclient/clients/clients.component';
import { FacturesComponent } from './shared/components/donneesclient/factures/factures.component';
import { BanqueComponent } from './shared/components/banque/banque.component';
import { ListebanqueComponent } from './shared/components/listebanque/listebanque.component';
import { DiscussionComponent } from './shared/components/discussion/discussion.component';
import { CloctureComponent } from './shared/components/clocture/clocture.component';
import { UtilisateursComponent } from './shared/components/donneesComptable/utilisateurs/utilisateurs.component';
import { ListearticleComponent } from './shared/components/listearticle/listearticle.component';
import { BilanComponent } from './shared/components/bilan/bilan.component';
import { DepenseComponent } from './shared/components/depense/depense.component';
import { ComptederesultatComponent } from './shared/components/comptederesultat/comptederesultat.component';
import { RepportComponent } from './shared/components/repport/repport.component';
import { ProfileComponent } from './shared/components/donneesComptable/profile/profile.component';
import { NewfactureComponent } from './shared/components/donneesComptable/newfacture/newfacture.component';
import { DetailsbanqueComponent } from './shared/components/banque/banque/detailsbanque/detailsbanque.component';
import { DataComptablesComponent } from './shared/components/donneesComptable/data-comptables/data-comptables.component';
import { DevislisteComponent } from './shared/components/donneesclient/devisliste/devisliste.component';
import { ComptableComponent } from './shared/components/donneesComptable/comptable/comptable.component';
import { FacturesComptableComponent } from './shared/components/donneesComptable/factures-comptable/factures-comptable.component';
import { DetailsEmployeeComponent } from './shared/components/donneesEmployees/details-employee/details-employee.component';
import { NewserviceComponent } from './shared/components/donneesComptable/newservice/newservice.component';
import { ListeserviceComponent } from './shared/components/donneesComptable/listeservice/listeservice.component';
import { BilanupdateComponent } from './shared/components/bilanupdate/bilanupdate.component';

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
      path: 'employees/:id',
      component: DetailsEmployeeComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'datacomptable',
      component: DataComptablesComponent,
    },
    {
      path: 'newfacture',
      component: NewfactureComponent,
    },
    {
      path: 'newservice',
      component: NewserviceComponent,
    },
    {
      path: 'service',
      component: ListeserviceComponent,
    },
    {
      path: 'article',
      component: ListearticleComponent,
    },
    {
      path: 'bilan',
      component: BilanComponent,
    },
    {
      path: 'bilan/:id',
      component: BilanupdateComponent,
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
      path: 'liste-clients',
      component: ListeClientsComponent
    },
    {
      path: 'clients/:id',
      component: ClientsComponent
    },
    {
      path: 'clients/:id/factures',
      component: FacturesComponent
    }
    ,
    {
      path: 'clients/:id/devis',
      component: DevislisteComponent
    },
    {
      path: 'employee-liste',
      component: EmployeeListeComponent
    },
    {
      path: 'employees/:id/note-de-frais',
      component: NoteDeFraisComponent
    }
      ,
    {
      path: 'liste_comptables',
      component: UtilisateursComponent
    } ,
    {
      path: 'comptables/:id',
      component: ComptableComponent,
    },
    {
      path: 'factureComptable',
      component: FacturesComptableComponent,
    },
    {
      path: 'listebanque',
      component: ListebanqueComponent,
    } ,
    {
      path: 'detailsbanque',
      component: DetailsbanqueComponent,
    }
      ,
    {
      path: 'banque',
      component: BanqueComponent
    } ,
    {
      path: 'societeliste',
      component: SocietelisteComponent
    },
    {
      path: 'clocture',
      component: CloctureComponent
    },
    {
      path: 'compta',
      component: ComptaComponent
    },
    {
      path: 'finances',
      component: FinancesComponent
    }
    ,
    {
      path: 'repport',
      component: RepportComponent,
    }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
