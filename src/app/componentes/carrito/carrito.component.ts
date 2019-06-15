import { Component} from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import {ArticuloClienteInterface} from 'src/app/Model/articulo-cliente-interface';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent{
  private carrito= [];
  ptotal =0;

  constructor(private carServices:CarritoService) {
    this.getCarrito();
  }
  getCarrito(){
    this.carServices.getCarritoIdUser("p")
    .subscribe((a:ArticuloClienteInterface)=>this.carrito.push(a));
  }
}
