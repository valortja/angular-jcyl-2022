import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor() { }

  getSolicitudes() {
    return [
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
    ];
  }
}
