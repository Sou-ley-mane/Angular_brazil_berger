import { Component, Input, OnInit } from '@angular/core';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-produit-commande',
  templateUrl: './produit-commande.component.html',
  styleUrls: ['./produit-commande.component.css']
})
export class ProduitCommandeComponent implements OnInit {
  // @Input() produit!:any[];
  // elementSup!:any;
  // quantite:number=this.serviceDetail.nombre

  // 
  constructor(private serviceDetail:DetailService) { }
  items$=this.serviceDetail.items$

    onSup(element:any){
      this.serviceDetail.supprimer(element)
    // console.log(element);
    

    }
  ngOnInit(): void {
   
    
  }

 
}
