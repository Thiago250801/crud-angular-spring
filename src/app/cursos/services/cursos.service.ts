import { Injectable } from '@angular/core';
import {Curso} from "../model/curso";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly API = '/assets/cursos.json'

  constructor(
    private httpClient: HttpClient
  ) { }

  listAll() {
    return this.httpClient.get<Curso[]>(this.API);
  }


}
