import { Component, OnInit, Input } from '@angular/core';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { Observable } from 'rxjs';
import { ArticuloInterface } from 'src/app/Model/articulos-interface';

@Component({
  selector: 'app-articulo-carro',
  templateUrl: './articulo-carro.component.html',
  styleUrls: ['./articulo-carro.component.css']
})
export class ArticuloCarroComponent implements OnInit {
  @Input() id:number;
  nombre:string;
  ptotal:number;
  precio:number;
  img="";
  @Input() cantidad:number;
  constructor(private artservices: ArticuloService) {
  }
  ngOnInit() {
    this.BuscarDatosSegunID();
  }
  BuscarDatosSegunID(){
    var d:ArticuloInterface[];
    this.artservices.getArticuloPorId(this.id)
    .subscribe( data => {
      this.precio = data.precio;
      this.img = data.img;
      this.nombre = data.nombre;
      this.ptotal = data.precio*this.cantidad;
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
}
