import { Component, Output, ViewChild } from '@angular/core';
import { CadreProduitComponent } from './cadre-produit/cadre-produit.component';
import { IMenu } from './menu/IMenu';
import { CatalogueService } from './service/catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
//  @Output() nbr!:number;
  title = 'BrasilBurger';
  
  
}
