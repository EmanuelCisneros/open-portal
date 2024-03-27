import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLayoutComponent } from './external-layout/external-layout.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { LoginComponent } from './login/login.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { IntroduccionModuloComponent } from './introduccion-modulo/introduccion-modulo.component';
import { ServicioModuloComponent } from './servicio-modulo/servicio-modulo.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: ExternalLayoutComponent },
  {
    path: 'registro',
    loadChildren: () =>
      import('./login-page/login-page.module').then((m) => m.LoginPageModule),
  },
  { path: 'success', component: SuccessPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recovery-password', component: RecoveryPasswordComponent },
  { path: 'introduccion-modulo', component: IntroduccionModuloComponent },
  { path: 'servicio-modulo', component: ServicioModuloComponent }, 
  { path: 'navbar', component: NavbarComponent }, 




/*
{
  path: 'success',
  loadChildren: () =>
    import('./success-page/success-page.module').then((m) => m.SuccessPageModule),
},*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
