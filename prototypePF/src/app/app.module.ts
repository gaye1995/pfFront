import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {DefaultModule} from './layouts/default/default.module';
import { ClientsModule } from './shared/components/donneesclient/clients/clients.module';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListearticleModule } from './shared/components/listearticle/listearticle.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../app/services/auth/auth.service';
import { AuthInterceptor } from './services/interceptor/http.inspector';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { ComptableModule } from './shared/components/donneesComptable/comptable/comptable.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ClientsModule,
    ListearticleModule,
    ComptableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    DefaultModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastContainerModule , 
  ],
  
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ,
    { 
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
