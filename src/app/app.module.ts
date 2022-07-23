import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BurgerComponent } from './burger/burger.component';
import {HttpClientModule} from '@angular/common/http';
import { CadreProduitComponent } from './cadre-produit/cadre-produit.component';
import { HeaderCatalogueComponent } from './header-catalogue/header-catalogue.component';
import { FiltreCatalogueComponent } from './filtre-catalogue/filtre-catalogue.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { FormRecuperationComponent } from './form-recuperation/form-recuperation.component';



@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    HomeComponent,
    MenuComponent,
    BurgerComponent,
    CadreProduitComponent,
    HeaderCatalogueComponent,
    FiltreCatalogueComponent,
    DetailProduitComponent,
    FormRecuperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
