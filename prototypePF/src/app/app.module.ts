import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import {DefaultModule} from './layouts/default/default.module';
import { ClientsModule } from './shared/components/donneesclient/clients/clients.module';
import { RegisterComponent } from './shared/auth/register/register.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { ForgetPasswordComponent } from './shared/auth/forget-password/forget-password.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ClientsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    DefaultModule,
    MatCardModule,
    MatFormFieldModule,

    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
