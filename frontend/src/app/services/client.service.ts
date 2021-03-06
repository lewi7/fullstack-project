import { Injectable, Compiler, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const api = 'http://localhost:8000/api/client';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClientService implements OnInit{

  constructor(private http : HttpClient) { }


  ngOnInit() {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getListeClients() : Observable<Client[]> {
    return this.http.get<Client[]>(api,httpOptions)
            .pipe(
              tap(client => console.log('fetched api get client ')),
              catchError(this.handleError('getListeClients', []))
            );
  }

  createClient(data:any){
      return this.http.post<Client>(api,data,httpOptions)
            .pipe(
              tap(client => console.log(`fetched api post client`)),
              catchError(this.handleError<Client>('createClient'))
            );
  }

  editerClient(id:any){
    return this.http.get(`${api}/${id}`,httpOptions)
            .pipe(
              tap(_ => console.log(`fetched api get client id=${id}`)),
              catchError(this.handleError<Client>(`editerClient id=${id}`))
            );
  }
  
  updateClient(id:number,data:any){
    return this.http.patch<Client>(`${api}/${id}`,data,httpOptions)
            .pipe(
              tap(_ => console.log(`fetched api patch client id=${id}`)),
              catchError(this.handleError<any>('updateClient'))
            );
  }
  
  deleteClient(id:any){
    return this.http.delete(`${api}/${id}`,httpOptions)
            .pipe(
              tap(_ => console.log(`fetched api delete client id=${id}`)),
              catchError(this.handleError<Client>('deleteClient'))
            );
  }

}
