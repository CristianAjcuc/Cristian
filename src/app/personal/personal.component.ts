import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html'
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Personal agregado correctamente.',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
