import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IBurger } from '../burger/burger';
import { CadreProduitComponent } from '../cadre-produit/cadre-produit.component';
import { IMenu } from '../menu/IMenu';
import { CatalogueService } from '../service/catalogue.service';
import { ComplementService } from '../service/complement.service';
import { ICatalogue } from './ICatalogue';
  
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
 @Output() entier!:number;
  // produitsBurger!: IProduit[];
  menus:IMenu []=[];
  burgers:IBurger[]=[];
  catalogues!:ICatalogue;

 
  
  // subscribe ?= Subscription;

  constructor(private catalogue:CatalogueService) { }

  ngOnInit(): void {
  
    
    
    // this.catalogue.getDonnees().subscribe({
    //   next:(data:IMenu)=>{
    //     this.menus.push(data);
    //     console.log(data);
        
 
    //     // this.catalogues.push(data);
    //   },
    //   error: (error)=>console.log(`erreur ${error}`),
    //   complete:()=>console.log('Complete')
     
    // });
 
   
   

    // Recuperation des Menus
    // this.catalogue.getDonnees().subscribe({
    //   next: (value:IMenu)=>{
    //     this.menus.push(value)
    //   },
    //   error: (error)=>console.log(`erreur ${error}`),
    //   complete:()=>console.log('Complete')
    // });
   


    // Recuperation des burgers
    // this.catalogue.getBurger().subscribe(
    //   {
    //     next: (data:IBurger)=>{
    //       this.burgers.push(data)
    //     },
    //     error: (error)=>console.log(`erreur ${error}`),
    //     complete:()=>console.log('Complete')
    //   }
      
    // );
    // console.log(this.burgers)
  

    this.catalogue.getCatalogue().subscribe(data=>{
      this.burgers=data.burger;
      this.menus=data.menu;
    console.log(this.burgers);
    
  
    })

  




  }
}

