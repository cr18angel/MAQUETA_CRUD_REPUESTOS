import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Relacion } from '../interfaces/relacion.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelacionesService {
  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) { }


  addRelacion(relacion: Relacion) : Observable<Relacion> {
    return this.http.post<Relacion>(`${ this.baseUrl }/maquina_repuesto`, relacion)
  }
















}
