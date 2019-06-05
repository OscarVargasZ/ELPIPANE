import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import {ArticuloInterface} from "../Model/articulos-interface";
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  constructor(private htttp: HttpClient) {}

  getAllArticulos(){
    const url_api = 'http://localhost:3000/articulos';
    return this.htttp.get(url_api);
  }
  getArticuloPorId(id:number)
  {
    const url_api = 'http://localhost:3000/articulos/'+id;
    return this.htttp.get<ArticuloInterface>(url_api);
  }
}
