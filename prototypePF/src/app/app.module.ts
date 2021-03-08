import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxElectronModule } from 'ngx-electron';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule } from '@angular/material/list';
import { RegisterComponent } from './auth/register/register.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HeaderbarComponent } from './nav/headerbar/headerbar.component';
import { SocietelisteComponent } from './components/societeliste/societeliste.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EmployeeListeComponent } from './components/employee-liste/employee-liste.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTreeModule} from '@angular/material/tree';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { FinancesComponent } from './components/finances/finances.component';
import { ComptaComponent } from './components/compta/compta.component';
import { FacturesComponent } from './components/factures/factures.component';
import { NoteDeFraisComponent } from './components/note-de-frais/note-de-frais.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { SidnavlisteComponent } from './nav/sidnavliste/sidnavliste.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DevislisteComponent } from './components/devisliste/devisliste.component';
import { FooterbarComponent } from './footerbar/footerbar.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    HeaderbarComponent,
    SocietelisteComponent,
    EmployeeListeComponent,
    ForgetPasswordComponent,
    FinancesComponent,
    ComptaComponent,
    FacturesComponent,
    NoteDeFraisComponent,
    SidnavlisteComponent,
    DevislisteComponent,
    FooterbarComponent,
  ],
  imports: [
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    ModalModule,
    FormsModule,
    BsDropdownModule,
    TooltipModule,
    // Material
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTreeModule,
    MatSelectModule,
    MatExpansionModule,
    ChartsModule,
    MatNativeDateModule,
    NgbModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
