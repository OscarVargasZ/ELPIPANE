import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { from } from 'rxjs';
import {ArticuloClienteInterface} from 'src/app/Model/articulo-cliente-interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private htttp: HttpClient) {}
  getCarritoIdUser(user:string)
  {
    const url_api = 'http://localhost:3000/Carrito/'+user;
    return this.htttp.get<ArticuloClienteInterface>(url_api);

  }
  Add(username:string,articuloid:number,cantidad:number){
    //Hay que realizar consulta una consulta a la api rest
  }
}
