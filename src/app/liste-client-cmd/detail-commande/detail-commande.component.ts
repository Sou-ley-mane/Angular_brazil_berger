import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { Commande, IClient } from 'src/app/service/modeles/ICommande';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
  id: number = +this.routeAc.snapshot.params['id'];
  client!:IClient
  commande!:Commande
  constructor(private routeAc:ActivatedRoute,private catalogueservice:CatalogueService) { }

  ngOnInit(): void {
    this.catalogueservice.getOneClient(this.id).subscribe((client:IClient)=>{
      this.client=client
    })
  }

}
