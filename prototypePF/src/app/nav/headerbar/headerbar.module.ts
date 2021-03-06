import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderbarRoutingModule } from './headerbar-routing.module';

import { HeaderbarComponent } from './headerbar.component';

@NgModule({
  declarations: [HeaderbarComponent],
  imports: [CommonModule,FormsModule, HeaderbarComponent,HeaderbarRoutingModule]
})
export class HeaderbarModule {}