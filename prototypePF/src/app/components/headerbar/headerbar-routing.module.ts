
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderbarComponent } from './headerbar.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderbarComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderbarRoutingModule {}