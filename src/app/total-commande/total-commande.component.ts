import { Component, OnInit } from '@angular/core';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-total-commande',
  templateUrl: './total-commande.component.html',
  styleUrls: ['./total-commande.component.css']
})
export class TotalCommandeComponent implements OnInit {
totalCommande:number=this.detail.getPrix();
  constructor(private detail:DetailService) { }
  ngOnInit(): void {
  }

}
