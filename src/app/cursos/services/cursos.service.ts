import { Injectable } from '@angular/core';
import {Curso} from "../model/curso";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  listAll(): Curso[] {
    return  [
      { _id: '', nome: 'Angular', categoria: 'Front-end'}
    ];
  }


}
