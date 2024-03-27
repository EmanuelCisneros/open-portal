import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ExternalLayoutComponent } from './external-layout/external-layout.component';
import { LoginPageModule } from './login-page/login-page.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { IntroduccionModuloComponent } from './introduccion-modulo/introduccion-modulo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ServicioModuloComponent } from './servicio-modulo/servicio-modulo.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ExternalLayoutComponent,
    LoginComponent,
    RecoveryPasswordComponent,
    IntroduccionModuloComponent,
    ServicioModuloComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
