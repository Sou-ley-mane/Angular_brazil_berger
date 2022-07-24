import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CadreProduitComponent } from '../cadre-produit/cadre-produit.component';
import { IMenu } from '../menu/IMenu';
import { CatalogueService } from '../service/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  menu!:IMenu[];
  burger!:IMenu[];
  // @ViewChild(CadreProduitComponent, { static: false }) fils!: CadreProduitComponent;
  constructor(private catalogue:CatalogueService) { }
  ngOnInit(): void {
    this.lesDonnees();
  }
  lesDonnees(){
    
    this.menu=this.catalogue.getDonnees();
    this.burger=this.catalogue.getBurger();
    // console.log(this.menu);
  }



}

