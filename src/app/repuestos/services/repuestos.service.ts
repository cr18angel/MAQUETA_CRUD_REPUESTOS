import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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




}// fin clase
