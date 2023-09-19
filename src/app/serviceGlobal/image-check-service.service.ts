import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageCheckServiceService {

  constructor(private _http: HttpClient) { }

  imageExists(url: string): Observable<boolean> {
    return this._http.get(url, { responseType: 'blob' })
      .pipe(
        // Si no hubo error, devolver true
        map(() => true),
        // Si la imagen no existe o hay otro error, devolver false
        catchError(() => of(false))
      );
  }
}