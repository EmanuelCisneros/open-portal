import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-modulo',
  templateUrl: './servicio-modulo.component.html',
  styleUrls: ['./servicio-modulo.component.css']
})
export class ServicioModuloComponent {
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