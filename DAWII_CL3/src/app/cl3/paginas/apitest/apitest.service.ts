import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './apitest';

@Injectable({
  providedIn: 'root'
})
export class ApitestService {

  constructor(
    private http: HttpClient
  ) { }

  listarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>("https://6498a6489543ce0f49e23ad2.mockapi.io/usario");
  }
}
