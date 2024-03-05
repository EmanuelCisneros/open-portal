import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external-layout',
  templateUrl: './external-layout.component.html',
  styleUrls: ['./external-layout.component.css']
})
export class ExternalLayoutComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
  }

  redirectToLogin() {
    console.log('Hola');
    this.router.navigateByUrl('/login');
  }

  redirectToURL(): void {
    this.router.navigateByUrl('URL_PRUEBA');
  }
}





