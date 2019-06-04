import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  id=0;
  nombre = "";
  descripcion="";
  precio:number;
  img="";
  cantidad:number;

  constructor() { 
    this.cantidad=0;
    this.precio=100;
    this.nombre="no asignado";
    this.img="assets/img/01-8.jpg";
  }
  Aumentar(){
    this.cantidad++;
  }
  Restar(){
    if(this.cantidad>0)
    {
      this.cantidad--;
    }
  }
  Agregar(){
    //falta agregar los datos al carrito
    this.cantidad=0;
  }
  Cancelar(){
    this.cantidad=0;
  }
  ngOnInit() {

  }

}
