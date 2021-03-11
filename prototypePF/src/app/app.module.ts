import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import {DefaultModule} from './layouts/default/default.module';
import { ClientsModule } from './shared/components/donneesclient/clients/clients.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ClientsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
