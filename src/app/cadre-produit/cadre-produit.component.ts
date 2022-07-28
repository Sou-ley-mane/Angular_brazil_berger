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
  @Input() produit!: IMenu | IBurger;
  etat:string=''
  // i: number = 0;
  // nombreDeproduit: number = 0;
 element!:IMenu;
  constructor(private route: Router,private auPanier:DetailService) {}

  
changeCouleur(){
  return this.etat='bg-dark'
}
  
  theProduct(produitChoix:IMenu){
    console.log(produitChoix);
    this.auPanier.addToCart(produitChoix)
   this.auPanier.calcul(produitChoix);
    // this.element=produitChoix
    // this.auPanier.addToCart( this.element)
    // this.auPanier.addProd(this.element)
    // console.log(this.auPanier);
    // return this.element
  }
  
  ngOnInit(): void {
    
    
    // console.log();
    
    //  this.catalo.show(this.el);
  }

 

}
