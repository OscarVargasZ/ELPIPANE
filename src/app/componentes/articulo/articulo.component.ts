import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { Observable } from 'rxjs';
import { ArticuloInterface } from 'src/app/Model/articulos-interface';

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

  
  constructor(private artservices: ArticuloService) { 
    this.cantidad=0;
    this.precio=100;
    this.nombre="no asignado";
    this.img="assets/img/01-8.jpg";
  }
  BuscarDatosSegunID(id:number){
    var d:ArticuloInterface[];
    this.artservices.getArticuloPorId(2)

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
