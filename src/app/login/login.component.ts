import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  datos: any;
  usuario: any;
  user = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getErrorMessageUsuario() {
    if (this.user.hasError('required')) {
      return 'Debe ingresar su usuario.';
    } else {
      return '';
    }
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Debe ingresar su contraseña.';
    } else {
      return '';
    }
  }

  iniciar(){
    this.router.navigate(['menu']);
  }

}
