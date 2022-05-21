import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  //Base de Datos de los pasajes
  pasajes!: Array<Pasaje>;

  constructor() { 
    this.pasajes = new Array<Pasaje>();
    this.pasajes = [
      { 
        id: 1,
        dniPasajero: 40526554,
        precioPasaje: 5000.00,
        categoriaPasaje: "Jubilado",
        fechaCompra: new Date()
      },
      {
        id: 2,
        dniPasajero: 25425514,
        precioPasaje: 10000.00,
        categoriaPasaje: "Menor",
        fechaCompra: new Date()
      },
      {
        id: 3,
        dniPasajero: 12345678,
        precioPasaje: 15000.00,
        categoriaPasaje: "Adulto",
        fechaCompra: new Date()
      },
    ];
  }

  getPasajes(){
    return this.pasajes;
  }

  addPasajes(pasaje: Pasaje){
    pasaje.id = this.getUltipoPasaje();
    this.pasajes.push(pasaje);
  }

  getUltipoPasaje(): number{
    var ultimoPasaje: number = 0;
    for(var i = 0; i < this.pasajes.length; i++){
      if(ultimoPasaje < this.pasajes[i].id){
        ultimoPasaje = this.pasajes[i].id;
      }
    }
    return (ultimoPasaje + 1);
  }

  getPasaje(id: number):Pasaje{
    let pasaje: Pasaje = new Pasaje();
    let indexPasaje: number = this.pasajes.findIndex(p => (p.id == id));
    pasaje = this.pasajes[indexPasaje];
    
    return pasaje;
  }

  updatePasaje(pasaje: Pasaje){
  }

  deletePasaje(pasaje: Pasaje): Array<Pasaje>{
    let i:number;
    let auxIndex: number=0;
    for(i=0;i<this.pasajes.length;i++){
      if(this.pasajes[i].id == pasaje.id){
        auxIndex=i;
      }
    }
    this.pasajes.splice(auxIndex,1);

    return this.pasajes;
  }

}
