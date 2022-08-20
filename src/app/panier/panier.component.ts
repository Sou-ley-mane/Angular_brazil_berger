import { Component, Input, OnInit } from '@angular/core';
import { CatalogueService } from '../service/catalogue.service';
import { DetailService } from '../service/detail.service';
import { GestionCommandeService } from '../service/gestion-commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  mesPhoto:any;
  frites:any;
  lesBoissons:any[]=[]
  taillesDesboisson:any[]=[]

  mesProduit:any;
// @Input() tableau:any[]=[]
  constructor(private catalogue:CatalogueService,private panier:DetailService,private gestionCommande:GestionCommandeService) { }
 


  ngOnInit(): void {
    this.mesProduit=this.panier.items$
    this.panier.calcule()

    
  this.mesPhoto=this.catalogue.getBoisson();
  // console.log( this.mesPhoto);


  this.catalogue.getBoisson().subscribe(data=>{
    this.lesBoissons=data
    this.lesBoissons.forEach(element => {
      this.taillesDesboisson=element.tailles
      // console.log(this.taillesDesboisson);
    });
// console.log(data);

    
 
    
  })

  // this.frites=this.catalogue.getFrite();
  // console.log(this.frites);
  
  // this.mesProduit=this.panier.getTableauProduit();
 
  // console.log(this.mesProduit);


  // this.catal.getCatalogue().subscribe(data=>{
  //   this.burgers=data.burger;
  //   this.menus=data.menu;
  // console.log(this.burgers);
  // })
// console.log(this.getLesTailles());

  }
 
  // **********************************
getLesTailles(){
  this.catalogue.getBoisson().subscribe(data=>{
    this.lesBoissons=data
    this.lesBoissons.forEach(element => {
      this.taillesDesboisson=element.tailles
      // console.log(this.taillesDesboisson);
    });   
  })
  
  this.catalogue.tableauDeTaille=this.taillesDesboisson
  return  this.catalogue.tableauDeTaille
}

  

}
