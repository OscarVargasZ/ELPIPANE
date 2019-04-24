import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { ColumnasComponent } from './columnas/columnas.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng2CarouselamosModule} from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    ColumnasComponent,
    CarouselComponent,
    Ng2CarouselamosModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
