import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  palabras: string [] = ["MESSI","RONALDO","NEYMAR","INIESTA",
    "XAVI","PELE","GALLARDO","SUAREZ","AGUERO","MARTINEZ"]; 
  abeceadrio: string [] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"
    ,"P","Q","R","S","T","U","V","W","X","Y","Z"];
  teclaSelected: string []=[""];
  palabra: string = "";
  palabraO: string ="";
  juegos: Array<Juego> = [];
  indice: number = 0;
  i: number = 0;
  juego: Juego = new Juego();

  accion: boolean = false;
  win: boolean = false;

  constructor() { 
    this.juegos = [{intentos: 0, img: "6.jpg"},
    {intentos: 1, img:"5.jpg"},{intentos: 2, img:"4.jpg"},
    {intentos: 3, img:"3.jpg"},{intentos: 4, img:"2.jpg"},
    {intentos: 5, img:"1.jpg"}];
    this.iniciar();
  }

  iniciar(){
    this.indice = Math.round(Math.random()*(0-10)+10);
    this.palabraO = this.palabras[this.indice];
    for(this.i = 0;this.i<this.palabras[this.indice].length;this.i++){
      this.palabra = this.palabra + "_ ";
    }
    this.juego = this.juegos[this.juego.intentos];
    console.log(this.palabraO);
  }

  estadoJuego(letra: string): void{
    if(this.win == false){
      if(this.juego.intentos == 0){
        alert("GAME OVER");
      }else{
        if(this.compararTeclas(letra)==false){
          var existe = false;
          var aux = this.palabra.replaceAll(" ","");
          var aux2 = aux.split("");
          for(this.i = 0; this.i < this.palabraO.length; this.i++){
            if(this.palabraO[this.i] == letra){
              console.log(this.i);
              aux2[this.i] = letra;
              existe = true;
            }
          }
          if(!existe){
            this.juego.intentos--;
          }
          this.palabra = aux2.toString();
          this.palabra = this.palabra.replace(/,/g," ");
          if(this.palabra.replace(/ /g,"") == this.palabraO){
            alert("FELICITACIONES!!!");
            this.win = true;
          }
          this.juego = this.juegos[this.juego.intentos];
        }
      }
    }
  }

  compararTeclas(letra: string):boolean{
    var band: boolean = false;
    for(this.i = 0;this.i<this.teclaSelected.length;this.i++){
      if(letra == this.teclaSelected[this.i]){
        band = true;
      }
    }
    if(band==false){
      this.teclaSelected.push(letra);
    }
    return band;
  }

  jugarDeNuevo(){
    location.reload();
  }

  ngOnInit(): void {
  }

}
