import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {
    numero: 0,
    nombre: 'Armando',
    apellido1: 'Guerra',
    apellido2: 'Segura'
  };

  constructor() {
    setInterval(() => {
        this.solicitud.numero = Math.floor(Math.random() * (101));
        this.solicitud.nombre = 'Armando-' + this.solicitud.numero;
    }, 2000);
  }

  ngOnInit(): void {
  }

  guardar(param:string) {
    console.log('guardar ' + param + '!')
  }

  eliminar(param:string) {
    console.log('eliminar ' + param + '!')
  }

  limpiar(param:string) {
    console.log('limpiar ' + param + '!')
  }

}
