import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Array<any> = [];

  constructor(){
    this.items = [
      { name: 'assets/imagenes/pan1.png'},
      { name: 'assets/imagenes/pan2.png'},
      { name: 'assets/imagenes/pan3.png'},
      { name: 'assets/imagenes/pan4.png'},
      { name: 'assets/imagenes/pan1.png'},
      { name: 'assets/imagenes/pan2.png'},
      { name: 'assets/imagenes/pan3.png'},
      { name: 'assets/imagenes/pan4.png'}
    ];
  }  
}
