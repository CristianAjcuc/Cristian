import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SidebarService } from 'src/services/sidebar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:any = [];

  opcionSeleccionada: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    public sidebarservice: SidebarService
  ) { 
    this.menus = sidebarservice.getMenuList();
  }

  ngOnInit(): void {
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu:any) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach((element:any) => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu:any) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

  personal(){
    this.opcionSeleccionada = 'Personal';
  }

  roles(){
    this.opcionSeleccionada = 'Roles';
  }

  paciente(){
    this.opcionSeleccionada = 'Paciente';
  }

  doctor(){
    this.opcionSeleccionada = 'Doctor';
  }
  
}
