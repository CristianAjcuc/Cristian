import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html'
})
export class RolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Rol agregado correctamente.',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
