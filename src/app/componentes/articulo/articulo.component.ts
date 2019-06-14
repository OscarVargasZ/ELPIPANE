import { Component, OnInit, Input } from '@angular/core';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { Observable } from 'rxjs';
import { ArticuloInterface } from 'src/app/Model/articulos-interface';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})

export class ArticuloComponent implements OnInit {
   id:number;
  nombre:string;
  descripcion="";
  precio:number;
  img="";
  cantidad:number;

  
  constructor(private artservices: ArticuloService) { 
    this.cantidad=0;


  }
  BuscarDatosSegunID(id:number){
    var d:ArticuloInterface[];
    this.artservices.getArticuloPorId(2).subscribe( data => {
      this.precio = data.precio;
      this.descripcion = data.descripcion;
      this.img = data.img;
      this.nombre = data.nombre;
    } );

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
    this.BuscarDatosSegunID(2);
  }
}
