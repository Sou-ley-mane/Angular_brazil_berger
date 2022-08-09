import { Component, Input, OnInit } from '@angular/core';
import { Commande } from 'src/app/service/modeles/ICommande';

@Component({
  selector: 'app-info-commande',
  templateUrl: './info-commande.component.html',
  styleUrls: ['./info-commande.component.css']
})
export class InfoCommandeComponent implements OnInit {
@Input() commande!:Commande
  constructor() { }

  ngOnInit(): void {
  }

}
