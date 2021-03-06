import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderbarComponent } from '../headerbar/headerbar.component'
import { SidnavlisteComponent } from '../sidnavliste/sidnavliste.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [  
    CommonModule,
    HeaderbarComponent,
    SidnavlisteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderbarComponent,
    SidnavlisteComponent,
  ],

})
export class LayaoutModule { }
