import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {
    numero: 0,
    nif: '99999999R',
    nombre: 'Armando',
    apellido1: 'Guerra',
    apellido2: 'Segura'
  };

  solicitudes = [
    {
      numero: 1,
      nif: '9999999R',
      nombre: 'Armando',
      apellido1: 'Guerra',
      apellido2: 'Segura'
    },
    {
      numero: 2,
      nif: '00000000T',
      nombre: 'Aitor',
      apellido1: 'Bellino',
      apellido2: 'Campestre'
    },
    {
      numero: 3,
      nif: '1111111H',
      nombre: 'Francisco',
      apellido1: 'Miendo',
      apellido2: 'Montones'
    },
    {
      numero: 4,
      nif: '22222222J',
      nombre: 'Iñaki',
      apellido1: 'Osko',
      apellido2: 'Cerrado'
    },
    {
      numero: 5,
      nif: '33333333P',
      nombre: 'Orcar',
      apellido1: 'Panta',
      apellido2: 'Hambriento'
    }
  ]


  constructor() {
    setInterval(() => {
        this.solicitud.numero = Math.floor(Math.random() * (101));
        //this.solicitud.nombre = 'Armando-' + this.solicitud.numero;
    }, 2000);
  }

  ngOnInit(): void {
  }

  guardar(param:string) {
    console.log('guardar ' + param + '!');
  }

  eliminar(solicitud: any) {
    console.log('eliminar ' + solicitud + '!');
    this.solicitudes = this.solicitudes.filter(s => s.nif !== solicitud.nif);
  }

  limpiar(param:string) {
    console.log('limpiar ' + param + '!');
  }

  enviar() {
    console.log('enviar!');
  }

  nif($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.nif = element.value;
  }

  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.nombre = element.value;
  }

  apellido1($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellido1 = element.value;
  }

  apellido2($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellido2 = element.value;
  }

  getDisabled() {
    var validacion = this.solicitud.nif.length == 9
    && this.solicitud.nombre.length >= 3
    && this.solicitud.apellido1.length >= 3
    && this.solicitud.apellido2.length >= 3;

    console.log(validacion);
    return !validacion;
  }
}

