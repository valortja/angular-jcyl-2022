import { Component, Input, OnInit } from '@angular/core';
import { Centro } from '../centros/centros.component';

const textoCuerpo = "Inserción de un nuevo componente.";

@Component({
  selector: 'app-centro',
  //templateUrl: './centro.component.html',
  /*
  template: `
    <div class="container my-5">
      <div class="card">
        <div class="card-header">
          <h5><i class="bi bi-file-text"></i> Inserción de Centro</h5>
        </div>
        <div class="card-body">
          ${textoCuerpo}
        </div>
      </div>
    </div>
  `,
  */
  template: `
    {{centro?.nombre}}
  `,
  styleUrls: ['./centro.component.css']
})

export class CentroComponent implements OnInit {

  @Input()
  centro?: Centro;

  constructor() { }

  ngOnInit(): void {
  }

}
