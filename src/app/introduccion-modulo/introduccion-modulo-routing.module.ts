import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionModuloComponent } from './introduccion-modulo.component';

const routes: Routes = [{ path: 'introduccion-modulo', component: IntroduccionModuloComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IntroduccionRoutingModule { }



