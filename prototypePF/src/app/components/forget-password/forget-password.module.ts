import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password.component';
import { ForgetPasswordRoutingModule } from './forget-password-routing.module';

@NgModule({
  declarations: [ForgetPasswordComponent],
  imports: [CommonModule,FormsModule, ForgetPasswordRoutingModule]
})
export class ForgetPasswordModule {}