import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {
    nombre: 'Armando',
    apellido1: 'Guerra',
    apellido2: 'Segura'
  };

  constructor() {
    setInterval(() => {
        this.solicitud.nombre = 'Armando-' + Math.floor(Math.random() * (101));
    }, 2000);
  }

  ngOnInit(): void {
  }

}
