import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocietelisteRoutingModule } from './societeliste-routing.module';

import { SocietelisteComponent } from './societeliste.component';

@NgModule({
  declarations: [SocietelisteComponent],
  imports: [CommonModule,FormsModule, SocietelisteComponent,SocietelisteRoutingModule]
})
export class DashbordComponentModule {}