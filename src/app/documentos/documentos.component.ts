import { Component } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent {
  documentos = [
    {
      especificacion_requisitos:"",
      codigo_fuente:"",
      codigo:"",
      descripcion:"",
      tipo:"",
    },
    {
      especificacion_requisitos:"",
      codigo_fuente:"",
      codigo:"",
      descripcion:"",
      tipo:"",
    },
    {
      especificacion_requisitos:"",
      codigo_fuente:"",
      codigo:"",
      descripcion:"",
      tipo:"",
    }
  ];

  displayedColumns: string[] = ['especificacion_requisitos', 'codigo_fuente', 'codigo', 'descripcion', 'tipo'];

}
