import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  template: `
    {{solicitud.nif + ' - ' + solicitud.nombre + ' ' + solicitud.apellido1 + ' ' + solicitud.apellido2 }}
    <button (click)="eliminar(solicitud)">Eliminar</button>
  `,
  styleUrls: ['./fila-solicitud.component.css']
})

export class FilaSolicitudComponent implements OnInit {

  @Input()
  indice: any;

  @Input()
  solicitud: any;

  @Output()
  solicitudEliminada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(solicitud: any) {
    this.solicitudEliminada.emit(solicitud);
  }

}
