import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RecoveryPasswordComponent } from '../recovery-password/recovery-password.component';

const routes: Routes = [{ path: '', component: LoginComponent }, { path: 'recovery-password', component: RecoveryPasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginLoginRoutingModule {}



