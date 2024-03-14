import { Component } from '@angular/core';

@Component({
  selector: 'app-introduccion-modulo',
  templateUrl: './introduccion-modulo.component.html',
  styleUrls: ['./introduccion-modulo.component.css']
})
export class IntroduccionModuloComponent {
  showSubMenu: { [key: string]: boolean } = {
    gestion: false,
    inversiones: false,
    recaudaciones: false,
    transferencias: false,
    echeqs: false,
    billetera: false
  };

  toggleSubMenu(menuItem: string): void {
    console.log('toggleSubMenu called with:', menuItem);
    this.showSubMenu[menuItem] = !this.showSubMenu[menuItem];
  }
}
