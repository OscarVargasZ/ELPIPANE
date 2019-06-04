import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { ColumnasComponent } from './componentes/columnas/columnas.component';
import { LoginComponent } from './componentes/login/login.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { CarrucelComponent } from './componentes/carrucel/carrucel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PaginaArticuloComponent } from './Pages/pagina-articulo/pagina-articulo.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    ColumnasComponent,
    LoginComponent,
    CarritoComponent,
    ArticuloComponent,
    CarrucelComponent,
    FooterComponent,
    PaginaArticuloComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
