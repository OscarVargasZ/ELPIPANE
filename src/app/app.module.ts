import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { LoginComponent } from './componentes/login/login.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { CarrucelComponent } from './componentes/carrucel/carrucel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PaginaArticuloComponent } from './Pages/pagina-articulo/pagina-articulo.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ArticuloService } from './servicios/articulo.service';
import { ArticuloCarroComponent } from './componentes/articulo-carro/articulo-carro.component';
import {CarritoService} from './servicios/carrito.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    LoginComponent,
    CarritoComponent,
    ArticuloComponent,
    CarrucelComponent,
    FooterComponent,
    PaginaArticuloComponent,
    HomePageComponent,
    ArticuloCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticuloService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
