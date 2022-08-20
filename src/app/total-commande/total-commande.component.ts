import { Component, OnInit } from '@angular/core';
import { DetailService } from '../service/detail.service';
import { GestionCommandeService } from '../service/gestion-commande.service';

@Component({
  selector: 'app-total-commande',
  templateUrl: './total-commande.component.html',
  styleUrls: ['./total-commande.component.css']
})
export class TotalCommandeComponent implements OnInit {
totalCommande:any
prixLivraison!:number
apayer:number=0


Payer(totalCommande:number,prixLivraison:number){
  this.apayer=totalCommande+prixLivraison
  return this.apayer

}
// totalCommande!:number;
donneTotal(){
return  this.totalCommande=this.detail.getPrix();
}
liv(){
  if (this.detail.getItems().length==0) {
    this.detail.supprimeKey('livraison')
    return this.prixLivraison=0
    
  }else{
    return this.prixLivraison=this.detail.diokhmaPrixLiv('livraison')

  }
// console.log();
}





  constructor(private detail:DetailService,private gestionCommande:GestionCommandeService) { }
  ngOnInit(): void {
    // this.prixLivraison=this.gestionCommande.lePrixDeLaLivraison
    // this.detail.calcule()
    this.donneTotal()
    this.liv()
    this.Payer(this.totalCommande, this.prixLivraison)
   

  }

}
