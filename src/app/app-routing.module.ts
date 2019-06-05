import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaArticuloComponent } from './Pages/pagina-articulo/pagina-articulo.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { RegisterComponent } from './Pages/register/register.component';

const routes: Routes = [
  {path:"articulo", component:PaginaArticuloComponent},
  {path:"perfil", component:ProfileComponent},
  {path:"registro", component:RegisterComponent},
  {path:"", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
