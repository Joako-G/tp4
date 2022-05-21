import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  pasaje!: Pasaje;
  pasajes!: Array<Pasaje>;
  formtitle!: string;
  categoriaEmpty: boolean = false;
  precioEmpty: boolean = false;
  categorias: Array<string> = ['Menor','Adulto','Jubilado'];
  descuento!: number;
  accion: string = "new";

  constructor(private pasajeService: PasajeService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
    this.formtitle = "REGISTRO DE PASAJES"
    this.pasaje = new Pasaje();
  }

  change(precio: number){
    if(precio != 0){
      this.precioEmpty = true;
    }
  }

  onChange(categoria: string){
   if(categoria != ""){
     this.categoriaEmpty = true;
      if(this.precioEmpty == true){
        if(this.pasaje.categoriaPasaje == "Menor"){
          this.descuento = this.pasaje.precioPasaje - (25 * this.pasaje.precioPasaje) / 100;
        }else{
          if(this.pasaje.categoriaPasaje == "Jubilado"){
            this.descuento = this.pasaje.precioPasaje - (50 * this.pasaje.precioPasaje) / 100;
          }else{
            this.descuento = this.pasaje.precioPasaje;
          }
        }
      }
   }
   this.pasaje.precioPasaje = this.descuento;
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=> {
      if(params['id'] == "0"){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.cargarPasaje(params['id']);
      }
    });
  }

  public cargarPasaje(id:number){
    this.pasaje = this.pasajeService.getPasaje(id);
  }

  guardarRegistro(){
    this.pasajeService.addPasajes(this.pasaje);
    this.router.navigate(['registro']);
  }

  actualizarPasaje(){
    this.pasajeService.updatePasaje(this.pasaje);
    this.router.navigate(['registro']);
  }

}
