import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Centro } from '../centros/centros.component';

@Component({
  selector: 'app-selector-centro',
  //templateUrl: './selector-centro.component.html',
  template: `
    <input (keyup)="buscarCentro($event)" [value]="centroSeleccionado?.nombre">
    <ul>
      <li *ngFor="let c of centrosFiltrados" (click)="seleccionarCentro(c)" role="button">{{c?.nombre | titlecase | slice:0:-7 }} </li>
    </ul>
  `,
  styleUrls: ['./selector-centro.component.css']
})

export class SelectorCentroComponent implements OnInit {

  centros: Centro[] = [
    {nombre: "Ponce de León, 09012"},
    {nombre: "San Agustín, 47008"}
  ]

  centrosFiltrados: Centro[] = [];
  @Output()
  centroSeleccionado?: Centro = {nombre: ''};

  constructor() { }

  ngOnInit(): void {
  }

  buscarCentro($event: KeyboardEvent) {
    let target = $event.target as HTMLInputElement;
    this.centrosFiltrados = this.centros.filter(centro => centro.nombre?.toLocaleLowerCase().includes(target.value.toLocaleLowerCase()));
  }

  seleccionarCentro(centro: Centro) {
    this.centroSeleccionado = centro;
  }
}
