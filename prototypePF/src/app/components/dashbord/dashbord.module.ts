import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashbordRoutingModule } from './dashbord-routing.module';
import {HeaderbarModule} from '../headerbar/headerbar.module'
import { DashbordComponent } from './dashbord.component';

@NgModule({
  declarations: [DashbordComponent],
  imports: [CommonModule,FormsModule,HeaderbarModule, DashbordRoutingModule]
})
export class DashbordComponentModule {}