import { Injectable, Compiler, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

const api = 'http://127.0.0.1:8000/api/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements OnInit{

  constructor(private http : HttpClient) { }


  ngOnInit() {
  }

  getListeClients(){
    return this.http.get<Client[]>(api);
  }

  // createClient(data:any){
  //     return this.http.post<Client>('http://127.0.0.1:8000/addClient/',data);
  // }

  createClient(data:any){
      return this.http.post<Client>(api,data);
  }

  // createClient(data:any){

  //     return new Promise( (resolve,reject) => {
  //           let erreur = false;
  //           let url = fetch('http://127.0.0.1:8000/addClient/').then(res => res.json());

  //           if (!erreur) {
  //               resolve(url);
  //           } 
  //           else{
  //               reject("echec d'enregistrement");
  //           }
  //      });

  //     // return this.http.post('http://127.0.0.1:8000/addClient/',data);
  // }

  // createClient(client:Client){
  //     return this.http.post('http://127.0.0.1:8000/api/client/',client);
  // }

  // this.clientService.createClient(newClient);
  // data = newClient
  // // Object { nom: "T", prenom: "J", contact: "6789", addresse: "SD" }

  // createClient(client:Client){
  //     return this.http.post<Client>('http://127.0.0.1:8000/api/client/',client);
  // }

  // createClient() : void{
  //     alert('ajouter');
  // }

  deleteClient(client:any){
    return this.http.delete(`${api}/${client}`);
  }

  editerClient(client:any){
    return this.http.get(`${api}/${client}`);
  }

  updateClient(id:number,data:any){
    return this.http.patch<Client>(`${api}/${id}`,data);
  }

  // updateClient(id:number,data:any){
  //   return this.http.patch(`http://127.0.0.1:8000/updateClient/${id}`,data);
  // }

}
