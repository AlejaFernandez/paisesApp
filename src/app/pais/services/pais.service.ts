import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'
  

  constructor(private http: HttpClient) { }

  get httParams (){
    return new HttpParams()
    .set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  buscarPais( termino:string): Observable<Country[]> {
    const url = `${ this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>( url, { params: this.httParams} );
  }
  buscarCapital( termino:string): Observable<Country[]> {
    const url = `${ this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>( url, { params: this.httParams} );
  }
  getPaisPorAlpha( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }
  buscarRegion( region: string ): Observable<Country[]>{
     
    const url = `${ this.apiUrl }/regionalbloc/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httParams} )
    .pipe(
      tap( console.log)
    )
  }
}
