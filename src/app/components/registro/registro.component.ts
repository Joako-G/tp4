import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  pasajes!: Array<Pasaje>;

  constructor(private pasajeService: PasajeService,
              private router: Router) {
                this.pasajes = new Array<Pasaje>();
                this.pasajes = this.cargarPasajes();
  }
  
  cargarPasajes():Array<Pasaje>{
    let pasajesReg: Array<Pasaje> = new Array<Pasaje>();
    pasajesReg = this.pasajeService.getPasajes();
    return pasajesReg;
  }

  llamarAgregarPasaje(){
    this.router.navigate(['formulario', 0]);
  }

  eliminarPasaje(pasaje: Pasaje): void{
    this.pasajeService.deletePasaje(pasaje);
    
  }

  seleccionarPasaje(pasaje: Pasaje): void{
    this.router.navigate(['formulario',pasaje.id]);
  }

  ngOnInit(): void {
  }

}
