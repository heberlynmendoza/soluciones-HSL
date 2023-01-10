import { Component } from '@angular/core';
import { Version } from '../models/version'

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent {

  version: Version[] = [
    {
      id: 1,
      fecha: 12-1-2023,
      codigo: 1259863,
      descripcion:"",
    },
    {
      id: 1,
      fecha: 3-1-2023,
      codigo: 4255863,
      descripcion:"",
    },
    {
      id: 1,
      fecha: 1-1-2023,
      codigo: 78954863,
      descripcion:"",
    },
    {
      id: 1,
      fecha: 4-1-2023,
      codigo: 5421863,
      descripcion:"",
    }

  ];

  selectedVersion: Version = new Version();

  addOrEdit() {

    if (this.selectedVersion.id === 0) {
      this.selectedVersion.id = this.version.length + 1;
      this.version.push(this.selectedVersion);
    }
    this.selectedVersion = new Version();
    console.log(this.version);
  }

  openForEdit(version: Version) {
    this.selectedVersion = version;
  }

  delete(){
    if(confirm('Seguro que deseas eliminar esta version?')){
      this.version = this.version.filter( x => x.id !== this.selectedVersion.id);
      this.selectedVersion = new Version();
    }
  }
}
