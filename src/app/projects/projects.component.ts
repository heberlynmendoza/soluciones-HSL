import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {


  /*
    Conectarse al backend.
    Consultar los proyectos en Base de Datos
    El array de Proyectos almacenarlos en la variable projects
  */

  projects = [
    {
      id: 1,
      name:"Proyecto 1",
      fechaInicio: "01/10/2022",
      fechaFinal: "01/12/2022",
      descripcion: "Loremp Ipsum"
    },
    {
      id:2 ,
      name:"Proyecto 2",
      fechaInicio: "21/10/2022",
      fechaFinal: "21/12/2022",
      descripcion: "Loremp Ipsum 2"
    }
  ]

  displayedColumns: string[] = ['id', 'name', 'fechaInicio', 'fechaFinal', 'descripcion'];

}
