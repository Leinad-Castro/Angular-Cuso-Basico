import { NgModule } from "@angular/core";
import { ContadorComponente } from "./componente/contador.component";

@NgModule({
  declarations:[
    ContadorComponente
  ], //Componentes
  exports:[
    ContadorComponente
  ]//Modulos
})

export class ContadorModule{}
