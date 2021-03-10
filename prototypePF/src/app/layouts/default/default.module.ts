import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './default.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { RegisterComponent } from '../../shared/auth/register/register.component';
import { DashbordComponent } from '../../shared/components/dashbord/dashbord.component';
import { SocietelisteComponent } from '../../shared/components/societeliste/societeliste.component';
import { EmployeeListeComponent } from '../../shared/components/employee-liste/employee-liste.component';
import { LoginComponent } from '../../shared/auth/login/login.component';
import { ForgetPasswordComponent } from '../../shared/auth/forget-password/forget-password.component';
import { DevislisteComponent } from 'src/app/shared/components/devisliste/devisliste.component';
import { FinancesComponent } from '../../shared/components/finances/finances.component';
import { ComptaComponent } from '../../shared/components/compta/compta.component';
import {DashbordService} from '../../shared/components/dashbord.service';
import { FacturesComponent } from '../../shared/components/factures/factures.component';
import { NoteDeFraisComponent } from '../../shared/components/note-de-frais/note-de-frais.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule } from '@angular/material/list';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    DevislisteComponent,
    SocietelisteComponent,
    EmployeeListeComponent,
    ForgetPasswordComponent,
    FinancesComponent,
    ComptaComponent,
     FacturesComponent,
     NoteDeFraisComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    ModalModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    SharedModule,
    TooltipModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatGridListModule,
    MatTreeModule,
      // Material
      MatSidenavModule,
      FlexLayoutModule,
      MatTreeModule,
      MatSelectModule,
      MatExpansionModule,
      ChartsModule,
      NgbModule,
      NgxElectronModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule,
  
  ],
  providers: [
    DashbordService,

  ]
})
export class DefaultModule { }
