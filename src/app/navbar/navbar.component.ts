import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  rutaActual: string;
  mostrar: boolean = false;

  constructor(
    @Inject(DOCUMENT) document: any,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.rutaActual = document.location.href;
  }

  ngOnInit(): void {
    this.rutaActual.trim().includes('menu') ? this.mostrar = false : this.mostrar = true;
  }

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
