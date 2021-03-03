
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SocietelisteComponent } from './societeliste.component';

const routes: Routes = [
  {
    path: '',
    component: SocietelisteComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocietelisteRoutingModule {}