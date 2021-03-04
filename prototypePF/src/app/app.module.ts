import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxElectronModule } from 'ngx-electron';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule } from '@angular/material/list';
import { RegisterComponent } from './components/register/register.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { SocietelisteComponent } from './components/societeliste/societeliste.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EmployeeListeComponent } from './components/employee-liste/employee-liste.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTreeModule} from '@angular/material/tree';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxElectronModule,
    BrowserAnimationsModule,
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
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
