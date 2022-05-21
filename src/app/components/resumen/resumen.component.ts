import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  pasajesXCat!: Array<Pasaje>;
  categorias: Array<string> = ['Menor','Adulto','Jubilado'];
  categoriaSelect!: string;

  constructor(private pasajeService: PasajeService){
    this.pasajesXCat = new Array<Pasaje>();
  }

  onChange(categoria: string){
    let aux: Array<Pasaje> = new Array<Pasaje>();
    this.pasajesXCat = new Array<Pasaje>();
    
    aux = this.pasajeService.getPasajes();

    this.categoriaSelect = categoria;
    for(let i = 0; i < aux.length;i++){
      if(aux[i].categoriaPasaje == categoria){
        this.pasajesXCat.push(aux[i]);
      }
    }
  }

  ngOnInit(): void {
  }

}
