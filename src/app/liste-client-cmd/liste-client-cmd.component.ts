import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, take } from 'rxjs';
import { CatalogueService } from '../service/catalogue.service';
import { IClient } from '../service/modeles/ICommande';

@Component({
  selector: 'app-liste-client-cmd',
  templateUrl: './liste-client-cmd.component.html',
  styleUrls: ['./liste-client-cmd.component.css']
})
export class ListeClientCmdComponent implements OnInit {
tabClientCmd:IClient[]=[]
  constructor(private service :CatalogueService,private route:Router) { }



  ngOnInit(): void {
    this.service.getClients().pipe(
      take(1),
      map((data:any)=>{
        data.filter((client:IClient)=>{
          if (client.commandes.length>0) {
            this.tabClientCmd.push(client)
          }

        })

      })
    ).subscribe()
  }

  detailCmd(client:IClient){
    this.route.navigateByUrl('commande/'+client.id)

  }

}
