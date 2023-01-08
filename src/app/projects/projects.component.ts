import { Component } from '@angular/core';
import { Projects } from '../models/projects';

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
  projects: Projects[] = [
    {
      id: 1,
      name: "Proyecto 1",
      fechaInicio: new Date(),
      fechaFinal: new Date(),
      descripcion: "Loremp Ipsum"
    },
    {
      id: 2,
      name: "Proyecto 2",
      fechaInicio: new Date(),
      fechaFinal: new Date(),
      descripcion: "Loremp Ipsum 2"
    }
  ]

  selectedProject: Projects = new Projects();

  addOrEdit() {

    if (this.selectedProject.id === 0) {
      this.selectedProject.id = this.projects.length + 1;
      this.projects.push(this.selectedProject);
    }
    this.selectedProject = new Projects();
    console.log(this.projects);
  }

  openForEdit(project: Projects) {
    this.selectedProject = project;
  }

  delete(){
    if(confirm('Seguro que deseas eliminar este proyecto?')){
      this.projects = this.projects.filter( x => x.id !== this.selectedProject.id);
      this.selectedProject = new Projects();
    }
  }
}


