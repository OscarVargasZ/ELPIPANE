import { Component, OnInit, Input } from '@angular/core';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { Observable } from 'rxjs';
import { ArticuloInterface } from 'src/app/Model/articulos-interface';
import {CarritoService} from 'src/app/servicios/carrito.service'
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input() id:number;
  nombre:string;
  descripcion="";
  precio:number;
  img="";
  cantidad:number;
  constructor(private artservices: ArticuloService,private carrito: CarritoService) { 
    this.cantidad=0;
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
    //hay que validar si el usuario esta conectado
      //falta agregar los datos al carrito llamar carrito
    this.carrito.Add("p",this.id,this.cantidad);
    //si no esta conectado ofrecerle login

    this.cantidad=0;
  }
  Cancelar(){
    this.cantidad=0;
  }
  ngOnInit() {
    this.BuscarDatosSegunID();
  }
}
