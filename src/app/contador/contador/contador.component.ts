import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <div class="container">
    <h1>{{ titulo }}</h1>
    <h3>
        La base es: <strong>{{ base }}</strong>
    </h3>

    <div class="d-flex align-items-center">
        <button (click)="acumular(base)" class="btn btn-primary shadow-none">
        + {{ base }}
        </button>
        <span class="mx-3">{{ numero }}</span>
        <button (click)="acumular(-base)" class="btn btn-primary shadow-none">
        - {{ base }}
        </button>
    </div>
    </div>
    `
  })

export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}