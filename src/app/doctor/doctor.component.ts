import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
})
export class DoctorComponent implements OnInit {
  hide = true;

  password = new FormControl('', [Validators.required]);
  

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'doctor agregado correctamente.',
      showConfirmButton: false,
      timer: 1500
    })
    


    
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Debe ingresar su contraseña.';
    } else {
      return '';
    }
  }


}
