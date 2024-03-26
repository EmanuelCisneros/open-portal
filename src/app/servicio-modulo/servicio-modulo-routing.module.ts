import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioModuloComponent } from './servicio-modulo.component';

const routes: Routes = [{ path: 'servicio-modulo', component: ServicioModuloComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServicioRoutingModule { }



