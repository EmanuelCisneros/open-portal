import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { ConfirmacionRegistroComponent } from './confirmacion-registro/confirmacion-registro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { ExternalLayoutComponent } from './external-layout/external-layout.component';
import { LoginPageModule } from './login-page/login-page.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { IntroduccionModuloComponent } from './introduccion-modulo/introduccion-modulo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AltaUsuarioComponent,
    ConfirmacionRegistroComponent,
    ConsultaComponent,
    AdministracionComponent,
    ExternalLayoutComponent,
    LoginComponent,
    RecoveryPasswordComponent,
    IntroduccionModuloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
