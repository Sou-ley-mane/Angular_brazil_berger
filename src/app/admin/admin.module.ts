import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProduitsComponent } from './produits/produits.component';
import { LiivraisonsComponent } from './liivraisons/liivraisons.component';
import { ZonesComponent } from './zones/zones.component';
import { GererLivraisonComponent } from './gerer-livraison/gerer-livraison.component';
import { ListLivreurComponent } from './list-livreur/list-livreur.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProduitsComponent,
    LiivraisonsComponent,
    ZonesComponent,
    GererLivraisonComponent,
    ListLivreurComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
