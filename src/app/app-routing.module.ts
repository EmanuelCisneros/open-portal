import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalLayoutComponent } from './external-layout/external-layout.component';
import { SuccessPageComponent } from './success-page/success-page.component';

const routes: Routes = [
  { path: '', component: ExternalLayoutComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-page/login-page.module').then((m) => m.LoginPageModule),
  },
  { path: 'success', component: SuccessPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
