import { Component, OnInit } from '@angular/core';
import { IMenu } from '../menu/IMenu';
import { CatalogueService } from '../service/catalogue.service';

@Component({
  selector: 'app-cadre-produit',
  templateUrl: './cadre-produit.component.html',
  styleUrls: ['./cadre-produit.component.css']
})
export class CadreProduitComponent implements OnInit {
  menu!:IMenu[];
  burger!:IMenu[];
  constructor(private catalogue:CatalogueService) { }

  ngOnInit(): void {
    this.lesDonnees();
  }
  lesDonnees(){
    
      this.menu=this.catalogue.getDonnees();
      this.burger=this.catalogue.getBurger();
  
      console.log(this.menu);
      
      
     
    }
}
