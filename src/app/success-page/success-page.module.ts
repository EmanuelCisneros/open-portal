import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessPageComponent } from './success-page.component';
import { SuccessRoutingModule } from './success-page-routing.module';

@NgModule({
  declarations: [SuccessPageComponent],
  imports: [CommonModule, SuccessRoutingModule],
})

export class SuccessPageModule { }
