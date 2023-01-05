import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users = [
    {
      id: 1,
      nombre:"Jose",
      apellido: "Perez",
      edad: "20",
      cedula: "29456987"
    },
    {
      id: 2,
      nombre:"Maria",
      apellido: "Lopez",
      edad: "46",
      cedula: "13986523"
    },
    {
    id: 3,
    nombre:"Carlos",
    apellido: "Mendez",
    edad: "56",
    cedula: "7589631"
    }


  ];

 displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'cedula'];

}
