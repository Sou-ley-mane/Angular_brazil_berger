import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { IBurger } from '../burger/burger';
import { ICatalogue } from '../catalogue/ICatalogue';
import { IMenu } from '../menu/IMenu';
import { CatalogueService } from '../service/catalogue.service';
import { ComplementService } from '../service/complement.service';
import { DetailService } from '../service/detail.service';
import { GestionCommandeService } from '../service/gestion-commande.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css'],
})
export class DetailProduitComponent implements OnInit {
  // @Input() produitElement!:any;
  detailProduit: any;
  burgers: any;
  frites: any;
  boissons: any;
  taiile:any
  siOk:boolean=false
  id: number = +this.route.snapshot.params['id'];
  

  constructor(
    private catalogueService: CatalogueService,
    private route: ActivatedRoute,
    private detail: DetailService,
    private gestionCmd:GestionCommandeService
  ) {}
  ajouter(produit: any) {
    console.log(produit);
    this.detail.addToCart(produit);
  }

  a(quantite:number){
if (this.boisson()==quantite) {
this.siOk=true
}else{
this.siOk=false

}
    // alert("ok");
  }

  boisson():number{
    let som=0
    const inputs=document.querySelectorAll("input")
    inputs.forEach(element => {
      som+=+element.value
    });
    return som
  }
  ngOnInit(): void {
    this.catalogueService.getProduit(this.id).subscribe((data) => {
      this.detailProduit = data; 
      console.log(this.detailProduit);
      this.burgers = this.detailProduit.menuBurgers;
      this.frites = this.detailProduit.menuPortionFrites;
      this.taiile = this.detailProduit.menuTailleBoissons;
      this.boissons=this.detailProduit.menuTailleBoissons[0].tailleBoisson.boissons
      console.log(this.taiile[0].quantite);
      this.gestionCmd.laQuantite=this.taiile[0].quantite
      
    });
    // this.gestionCmd.getLigneCmd()

    //   this.produit
    //     .getCatalogue()
    //     .pipe(
    //       take(1),
    //       map((products: ICatalogue) => {
    //         products.burgers.forEach((prod) => {
    //           if (this.id == prod.id) {
    //             this.detailProduit = prod;
    //             console.log(this.detailProduit);

    //             return;
    //           }
    //         });

    //         products.menus.forEach((prod) => {
    //           if (this.id == prod.id) {
    //             this.detailProduit = prod;
    //   this.burgers=prod.menuBurgers
    //   this.frites=prod.menuPortionFrites
    //   this.boissons=prod.menuTailleBoissons
    //   console.log(this.detailProduit.menuTailleBoissons);
    //             console.log(this.detailProduit);

    //             return;
    //           }
    //         });
    //       })
    //     )
    //     .subscribe();
    // }
    // isMenu(){
  }
}
