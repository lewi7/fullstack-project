import { Component, OnInit, Compiler } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  dataClient : Client[] = [];

  constructor(private clientService : ClientService,private routerAppli : Router,private _compiler: Compiler) { }

  ngOnInit() {
    this._compiler.clearCache();
      this.getListClient();
  }

  getListClient(){
      this.clientService.getListeClients().subscribe( res => this.dataClient = res )
      this.clientService.getListeClients().subscribe( (res) => console.log(res))
  }

  addClient(){
    // alert('page ajout');
    this.routerAppli.navigate(['/ajout-client']);
  }

  listeClient(){
    this.routerAppli.navigate(['/liste-client']);
  }

  deleteClient(id:any){
      // c : variable nforoporonina
      // dataClient tableau liste client
      // console.log(id);
      // alert('supprimer');

      this.clientService.deleteClient(id)
          .subscribe( () => {
              this.dataClient = this.dataClient.filter(c => c !== id)
              // this.listeClient();
              this.getListClient();
          })
      
  }

  

}
