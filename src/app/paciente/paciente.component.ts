import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html'
})
export class PacienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Paciente agregado correctamente.',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
