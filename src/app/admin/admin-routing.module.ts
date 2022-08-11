import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GererLivraisonComponent } from './gerer-livraison/gerer-livraison.component';
import { ZonesComponent } from './zones/zones.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'commandes', children:[
  { path: 'zone', component: ZonesComponent },
  { path: 'zone/:id', component: GererLivraisonComponent }


  ] },
  { path: '', component: AdminComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
