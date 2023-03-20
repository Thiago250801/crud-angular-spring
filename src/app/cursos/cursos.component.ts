import { Component, OnInit } from '@angular/core';
import {Curso} from "./model/curso";
import {CursosService} from "./services/cursos.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {ErrorDialogComponent} from "../shared/components/error-dialog/error-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'categoria'];
  cursos$: Observable <Curso[]>;

  constructor(
    private cursoService: CursosService,
    private dialog: MatDialog
  ) {
    this.cursos$ = this.cursoService.listAll()
      .pipe(
        catchError(error => {
          this.onError("Erro ao carregar cursos.")
          return of([])
        })
      )
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    })
  }

  ngOnInit(): void {

  }



}
