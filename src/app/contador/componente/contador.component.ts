import { Component } from "@angular/core";

@Component({

  selector: 'app-contador',
  template: `
    <h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click)="acumular(base)">+ {{base}}</button>
    <span> {{contador}} </span>
    <button (click)="acumular(-base)">- {{base}}</button>
  `
})
export class ContadorComponente{

  titulo: string = 'Contador App';
  base: number = 1;
  contador: number = 0;

  acumular (valor: number) {
    return this.contador += valor;
  }


}
