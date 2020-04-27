import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-editer-component',
  templateUrl: './editer-component.component.html',
  styleUrls: ['./editer-component.component.css']
})
export class EditerComponentComponent implements OnInit {

  id:any;
  data : any;
  unClient = new Client('','','','');

  constructor(private route : ActivatedRoute,private clientService : ClientService,private router : Router) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.findOneClient();
  }

  listeClient(){
    // alert('liste du client');
    this.router.navigate(['/liste-client']);
  }

  findOneClient(){
    this.clientService.editerClient(this.id)
        .subscribe( (res) => {
            console.log(res);
            this.data = res;
            this.unClient = this.data;
        })
  }

  updateClient(){
    this.clientService.updateClient(this.id,this.unClient).subscribe( (res) => this.router.navigate(['/liste-client']) )
  }

}
