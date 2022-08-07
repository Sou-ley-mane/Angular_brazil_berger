import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonComponent } from './boisson/boisson.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ComplementComponent } from './complement/complement.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path:'connexion',component:FormConnexionComponent},
  {path:'panier',component:PanierComponent},
  {path:'',component:CatalogueComponent},
  {path:'produit/:id',component:DetailProduitComponent},
  {path:'complement',component:ComplementComponent},
  {path:'varite',component:BoissonComponent},


  {path:'**',redirectTo:'/',pathMatch:'full'}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
