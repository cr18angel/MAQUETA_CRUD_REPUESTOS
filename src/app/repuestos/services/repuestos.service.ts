import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Repuesto } from '../interfaces/repuesto.interfaces';

@Injectable({
  providedIn: 'root'
})

export class RepuestosService {
  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) { }

  getRepuesto(): Observable<Repuesto[]> {
    return this.http.get<Repuesto[]>(`${ this.baseUrl }/repuestos`);
  }

  getRepuestoById(NroParte: string ): Observable<Repuesto|undefined>{
    return this.http.get<Repuesto>(`${this.baseUrl}/repuestos/${NroParte}`)

      .pipe(
        catchError( error => of(undefined))
      );
  }


  addRespuesto( repuesto: Repuesto): Observable<Repuesto> {
    return this.http.post<Repuesto>(`${ this.baseUrl }/repuestos`, repuesto)
  }


  updateRepuesto( repuesto: Repuesto ): Observable<Repuesto> {
    if ( !repuesto.id ) throw Error('Repuesto id is required');

    return this.http.patch<Repuesto>(`${ this.baseUrl }/repuestos/${ repuesto.id }`, repuesto );
  }


  deleteRepuestoById( id: string ): Observable<boolean> {

    return this.http.delete(`${ this.baseUrl }/repuestos/${ id }`)
      .pipe(
        map( resp => true ),
        catchError( err => of(false) ),
      );
  }




}// fin clase
