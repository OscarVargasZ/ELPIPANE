import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaArticuloComponent } from './Pages/pagina-articulo/pagina-articulo.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {path:"articulo/:id", component:PaginaArticuloComponent},
  {path:"", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
