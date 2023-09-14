import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import { Maquina } from '../interfaces/maquina.interface';
import { environments } from '../../../environments/environments';


@Injectable({ providedIn: 'root' })


export class MaquinasService {

  private baseUrl: string = environments.baseUrl;


  constructor(private http: HttpClient) { }


  getMaquinas():Observable<Maquina[]> {
    return this.http.get<Maquina[]>(`${ this.baseUrl }/heroes`);
  }

 



  getMaquinaById( id: string ): Observable<Maquina|undefined> {
    return this.http.get<Maquina>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  getSuggestions( query: string ): Observable<Maquina[]> {
    return this.http.get<Maquina[]>(`${ this.baseUrl }/heroes?q=${ query }&_limit=6`);
  }


  addHero( maquina: Maquina ): Observable<Maquina> {
    return this.http.post<Maquina>(`${ this.baseUrl }/heroes`, maquina );
  }

  updateHero( maquina: Maquina ): Observable<Maquina> {
    if ( !maquina.id ) throw Error('Maquina id is required');

    return this.http.patch<Maquina>(`${ this.baseUrl }/heroes/${ maquina.id }`, maquina );
  }

  deleteHeroById( id: string ): Observable<boolean> {

    return this.http.delete(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        map( resp => true ),
        catchError( err => of(false) ),
      );
  }





















}
