import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { ContactComponent } from './contact/contact.component';
import { ServicioComponent } from './servicio/servicio.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'doctor', component: DoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
