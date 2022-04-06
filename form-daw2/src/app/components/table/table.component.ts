import { Component, Input, OnInit } from '@angular/core';
import { Perfiles } from 'src/app/interfaces/perfiles.interface';

const perfilUsers : Perfiles[] = [
  {
    id: 0,
    name: "Emilio",
    age: 20,
    desc: "Esto es una prueba"
  },
  {
    id: 1,
    name: "Pacoooo",
    age: 22,
    desc: "Esto no es una prueba"
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit { 
  displayedColumns: string[] = ['id', 'name', 'age', 'description', 'actions']
  dataSource= perfilUsers; 

  constructor() { }

  ngOnInit(): void {
  }

}
