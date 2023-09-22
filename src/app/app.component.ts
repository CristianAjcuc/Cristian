import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinica';

  constructor(
    private router: Router,
  ) { }

  home(){
    this.router.navigate(['']);
  }

  about(){
    this.router.navigate(['about']);
  }

  services(){
    this.router.navigate(['services']);
  }

  contact(){
    this.router.navigate(['contact']);
  }

  iniciarSesion(){
    this.router.navigate(['login']);
  }
}
