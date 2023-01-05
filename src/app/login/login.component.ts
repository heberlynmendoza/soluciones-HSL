import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  hide = true;
  email: string;
  password: string;

  constructor(private _router: Router) { }

  login() {
    let obj = {
      email: this.email,
      password: this.password
    }
    console.log('Aqui hacer conexión con login, credenciales: ', obj);
    /*
      Validar que el email y el password existe en BD.
      Hacer try {} catch {} para validar la respuesta si fue success enviar el router a Projects
      Sino, enviar mensaje de error
    */
    this._router.navigate(['projects']);
  }
}


