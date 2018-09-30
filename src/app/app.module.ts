import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaRecetasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
