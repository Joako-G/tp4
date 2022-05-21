import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';

import { HomeComponent } from './components/home/home.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'punto1', component: Punto1Component},
  {path: 'punto2', component: Punto2Component},
  {path: 'formulario/:id' , component: FormularioComponent},
  {path: 'registro' , component: RegistroComponent},
  {path: 'resumen', component: ResumenComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
