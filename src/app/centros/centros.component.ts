import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros',
  template: `
    <div class="container my-5">
      <div class="card">
        <div class="card-header">
          <h5><i class="bi bi-file-text"></i> Listado de Centros</h5>
        </div>
        <div class="card-body">
          <ul>
            <li *ngFor='let c of centros'><app-centro [centro]="c"></app-centro></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./centros.component.css']
})

export class CentrosComponent implements OnInit {

  centros: Centro[] = [
    {nombre: "Fernando de Rojas"},
    {nombre: "Agustinas"}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

export class Centro {
  nombre?: string
}

