import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BurgerComponent } from './burger/burger.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CadreProduitComponent } from './cadre-produit/cadre-produit.component';
import { HeaderCatalogueComponent } from './header-catalogue/header-catalogue.component';
import { FiltreCatalogueComponent } from './filtre-catalogue/filtre-catalogue.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { FormRecuperationComponent } from './form-recuperation/form-recuperation.component';
import { BoissonComponent } from './boisson/boisson.component';
import { ComplementComponent } from './complement/complement.component';
import { PanierComponent } from './panier/panier.component';
import { TotalCommandeComponent } from './total-commande/total-commande.component';
import { ProduitCommandeComponent } from './produit-commande/produit-commande.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriteMenuComponent } from './frite-menu/frite-menu.component';
import { ListeClientCmdComponent } from './liste-client-cmd/liste-client-cmd.component';
import { DetailCommandeComponent } from './liste-client-cmd/detail-commande/detail-commande.component';
import { InfoCommandeComponent } from './liste-client-cmd/detail-commande/info-commande/info-commande.component';
import { InfoProduitComponent } from './liste-client-cmd/detail-commande/info-produit/info-produit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GestionDesCommandeComponent } from './gestion-des-commande/gestion-des-commande.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { BoissonComplementComponent } from './boisson-complement/boisson-complement.component';
import { RegistreComponent } from './registre/registre.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AjouterBurgerComponent } from './ajouter-burger/ajouter-burger.component';
import { AuthinterceptorInterceptor } from './authinterceptor.interceptor';


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
    FormRecuperationComponent,
    BoissonComponent,
    ComplementComponent,
    PanierComponent,
    TotalCommandeComponent,
    ProduitCommandeComponent,
    FormConnexionComponent,
    FriteMenuComponent,
    ListeClientCmdComponent,
    DetailCommandeComponent,
    InfoCommandeComponent,
    InfoProduitComponent,
    GestionDesCommandeComponent,
    LivraisonComponent,
    BoissonComplementComponent,
    RegistreComponent,
    AjouterBurgerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgxPaginationModule
 
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorInterceptor , multi: true},
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
