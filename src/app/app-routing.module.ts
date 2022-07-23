import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'catalogue',component:CatalogueComponent},
  {path:'detail/:id',component:DetailProduitComponent},
  {path:'**',redirectTo:'/',pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
