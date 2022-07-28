import { Component, Input, OnInit } from '@angular/core';
import { CatalogueService } from '../service/catalogue.service';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  mesPhoto:any;
  frites:any;
  mesProduit:any;
// @Input() tableau:any[]=[]
  constructor(private catalogue:CatalogueService,private panier:DetailService) { }
 


  ngOnInit(): void {
    this.mesProduit=this.panier.items$

    
  this.mesPhoto=this.catalogue.getPhoto();
  // console.log( this.mesPhoto);

  this.frites=this.catalogue.getFrite();
  console.log(this.frites);
  
  // this.mesProduit=this.panier.getTableauProduit();
 
  // console.log(this.mesProduit);


  
  }
 
  // **********************************


  

}
