import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  submitForm() {
    console.log('Formulario enviado');
    this.router.navigate(['/success']).then((success) => {
      if (!success) {
        console.error('No se pudo navegar a la página de éxito.');
      }
    });
  }

}
