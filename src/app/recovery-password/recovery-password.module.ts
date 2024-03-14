import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoveryPasswordComponent } from './recovery-password.component';
import { RecoveryPasswordRoutingModule } from './recovery-password-routing.module';


@NgModule({
  declarations: [RecoveryPasswordComponent],
  imports: [CommonModule,RecoveryPasswordRoutingModule],
})

export class RecoveryPasswordModule { }
