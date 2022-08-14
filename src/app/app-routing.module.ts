import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonComponent } from './boisson/boisson.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ComplementComponent } from './complement/complement.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { GestionDesCommandeComponent } from './gestion-des-commande/gestion-des-commande.component';
import { HomeComponent } from './home/home.component';
import { DetailCommandeComponent } from './liste-client-cmd/detail-commande/detail-commande.component';
import { ListeClientCmdComponent } from './liste-client-cmd/liste-client-cmd.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/catalogue'},
  {path:'connexion',component:FormConnexionComponent},
  {path:'panier',component:PanierComponent},
  {path:'catalogue',component:CatalogueComponent},
  {path:'produit/:id',component:DetailProduitComponent},
  {path:'complement',component:ComplementComponent},
  {path:'varite',component:BoissonComponent},
  {path:'client',component:ListeClientCmdComponent},
  {path:'commande/:id',component:DetailCommandeComponent},
  {path:'commandes',component:GestionDesCommandeComponent},
  {path:'cmd/:id',component:GestionDesCommandeComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

 
  {path:'**',redirectTo:'/',pathMatch:'full'}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
