import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks = [
    {
      id: 1,
      descripcion: "Problema con el panel de control",
      tipo: "De informatica",
      fechaInicioEstimada:"10/05/2022",
      fechaInicioReal:"02/08/2022",
      duracionEstimada:"Un mes",
      duracionReal:"Tres meses",
      nombreClave:"JJ8"
    },
    {
      id: 2,
      descripcion: "Problema con el inicio de sesion",
      tipo: "De logistica",
      fechaInicioEstimada:"10/07/2022",
      fechaInicioReal:"13/10/2022",
      duracionEstimada:"Un mes",
      duracionReal:"Tres meses",
      nombreClave:"JJ8"
    },
    {
      id: 3,
      descripcion: "Problema con el menu",
      tipo: "De informatica",
      fechaInicioEstimada:"10/05/2022",
      fechaInicioReal:"02/08/2022",
      duracionEstimada:"Un mes",
      duracionReal:"Tres meses",
      nombreClave:"JJ8"
    }

  ];

 displayedColumns: string[] = ['id', 'descripcion', 'tipo','fechaInicioReal','fechaInicioEstimada','duracionReal','duracionEstimada','nombreClave'];
}
