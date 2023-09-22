import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalComponent } from './personal/personal.component';
import { PacienteComponent } from './paciente/paciente.component';
import { RolComponent } from './rol/rol.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ConsultarComponent } from './productos/consultar/consultar.component';
import { ModificarComponent } from './productos/modificar/modificar.component';
import { ReporteComponent } from './productos/reporte/reporte.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    AboutComponent,
    ServicioComponent,
    ContactComponent,
    MenuComponent,
    NavbarComponent,
    PersonalComponent,
    PacienteComponent,
    RolComponent,
    DoctorComponent,
    ConsultarComponent,
    ModificarComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule
  ],
  exports: [ 
    MatFormFieldModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
