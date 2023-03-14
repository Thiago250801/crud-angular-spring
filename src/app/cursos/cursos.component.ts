import { Component, OnInit } from '@angular/core';
import {Curso} from "./model/curso";
import {CursosService} from "./services/cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'categoria'];
  cursos: Curso[] = [];

  constructor(
    private cursoService: CursosService
  ) {
    this.cursos = this.cursoService.listAll()
  }

  ngOnInit(): void {

  }



}
