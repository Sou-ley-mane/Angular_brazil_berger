import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ComplementComponent } from './complement/complement.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'panier',component:PanierComponent},
  {path:'',component:CatalogueComponent},
  {path:'produit/:id',component:DetailProduitComponent},
  {path:'complement',component:ComplementComponent},

  {path:'**',redirectTo:'/',pathMatch:'full'}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
