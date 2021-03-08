
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NoteDeFraisComponent } from './note-de-frais.component';

const routes: Routes = [
  {
    path: '',
    component: NoteDeFraisComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteDeFraisRoutingModule {}