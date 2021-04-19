import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {DefaultModule} from './layouts/default/default.module';
import { ClientsModule } from './shared/components/donneesclient/clients/clients.module';
import { RegisterComponent } from './shared/auth/register/register.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { ForgetPasswordComponent } from './shared/auth/forget-password/forget-password.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListearticleModule } from './shared/components/listearticle/listearticle.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ClientsModule,
    ListearticleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    DefaultModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    
  ],
  
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
