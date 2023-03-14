import { Component, OnInit } from '@angular/core';
import {Curso} from "./model/curso";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'categoria'];
  cursos: Curso[] = [
    { _id: '', nome: 'Angular', categoria: 'Front-end'}
  ];


  constructor() {
  }

  ngOnInit(): void {

  }



}
