import { Component, Input, OnInit } from '@angular/core';
import { IBurger } from '../burger/burger';
import { IMenu } from '../menu/IMenu';
import { CatalogueService } from '../service/catalogue.service';

@Component({
  selector: 'app-cadre-produit',
  templateUrl: './cadre-produit.component.html',
  styleUrls: ['./cadre-produit.component.css']
})
export class CadreProduitComponent implements OnInit {
 @Input() lesMenus!:IMenu[];
 @Input() lesBurgers!:IBurger[];


  constructor() { }
  ngOnInit(): void {
    
    // console.log(this.lesMenus);
    
  }

 
}
