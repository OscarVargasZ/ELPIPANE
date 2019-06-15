import { ArticuloService } from 'src/app/servicios/articulo.service';
import { Observable } from 'rxjs';
import { ArticuloInterface } from 'src/app/Model/articulos-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-pagina-articulo',
  templateUrl: './pagina-articulo.component.html',
  styleUrls: ['./pagina-articulo.component.css']
})
export class PaginaArticuloComponent implements OnInit {
  id:number;
  nombre:string;
  descripcion="";
  precio:number;
  img="";
  cantidad=0;
  constructor(private artservices: ArticuloService, private rutaActiva: ActivatedRoute) { 
    this.id=+this.rutaActiva.snapshot.paramMap.get("id");
    this.BuscarDatosSegunID();
  }
  BuscarDatosSegunID(){
    var d:ArticuloInterface[];
    this.artservices.getArticuloPorId(this.id).subscribe( data => {
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
    
  }
}