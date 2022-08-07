import { Component, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IBurger } from '../burger/burger';
import { IMenu } from '../menu/IMenu';

import { CatalogueService } from '../service/catalogue.service';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-cadre-produit',
  templateUrl: './cadre-produit.component.html',
  styleUrls: ['./cadre-produit.component.css'],
})
export class CadreProduitComponent implements OnInit {
  @Input() produit!: any;
  
  
  // @Input() produit1!: any;

  etat:string=''
  tab:any []=[]
  q=0;

  // i: number = 0;
  // nombreDeproduit: number = 0;
 element!:IMenu;
  constructor(private route: Router,private auPanier:DetailService) {}
// onTouch():number{
//   this.q= this.q+1;
//   return this.q;
// }
  
changeCouleur(){
  return this.etat='bg-warning '
}
testExistance(produit:any){

  // return true

}
addToCart(produitChoix:IMenu|IBurger){
  this.auPanier.addToCart(produitChoix)
  //  this.auPanier.calcul(produitChoix);

}

  // theProduct(produitChoix:IMenu|IBurger){
  //  this.auPanier.calcul(produitChoix);
  // }

  ngOnInit(): void {
  
  }

}
