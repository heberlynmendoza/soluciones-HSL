import { Component } from '@angular/core';
import { Documentos } from '../models/documentos'
@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent {

  documentos: Documentos[] = [
    {
      id: 1,
      especificacion_requisitos:"",
      codigo_fuente: 3564589,
      codigo: 9943153,
      descripcion:"hola",
      tipo:"",
    },
    {
      id: 2,
      especificacion_requisitos:"",
      codigo_fuente:124589,
      codigo: 6233153,
      descripcion:"holis",
      tipo:"",
    },
    {
      id: 3,
      especificacion_requisitos:"",
      codigo_fuente:124589,
      codigo:8543153,
      descripcion:"holaa",
      tipo:"",
    }
  ];

  selectedDocumentos: Documentos = new Documentos();

  addOrEdit() {

    if (this.selectedDocumentos.id === 0) {
      this.selectedDocumentos.id = this.documentos.length + 1;
      this.documentos.push(this.selectedDocumentos);
    }
    this.selectedDocumentos = new Documentos();
    console.log(this.documentos);
  }

  openForEdit(project: Documentos) {
    this.selectedDocumentos = project;
  }

  delete(){
    if(confirm('Seguro que deseas eliminar este documento?')){
      this.documentos = this.documentos.filter( x => x.id !== this.selectedDocumentos.id);
      this.selectedDocumentos = new Documentos();
    }
  }

}
