import { Component, OnInit } from '@angular/core';
import {Curso} from "./model/curso";
import {CursosService} from "./services/cursos.service";
import {Observable} from "rxjs";
import {delay, first, tap} from "rxjs/operators";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'categoria'];
  cursos$: Observable <Curso[]>;

  constructor(
    private cursoService: CursosService
  ) {
    this.cursos$ = this.cursoService.listAll()
      .pipe(
        first(),
        tap(cursos => console.log(cursos))
      )
  }

  ngOnInit(): void {

  }



}
