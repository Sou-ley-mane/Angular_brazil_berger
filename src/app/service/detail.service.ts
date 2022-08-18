import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { IBurger } from '../burger/burger';
import { IMenu } from '../menu/IMenu';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  TableauProduit: any[] = [];
  // *********************************************
  private itemsSubject = new BehaviorSubject<any>([]);
  items$ = this.itemsSubject.asObservable();
  // ***********************************************
  total: number[] = [];
  prix: number = 0;

  constructor() {
    let existingCartItems = JSON.parse(
      localStorage.getItem('products') || '[]'
    );
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }
  // Recuperation du produit selectionné
  // ********************************************************************************
  verifieExistanceProduit(prod: any): boolean {
    let exist = true;
    let tab = this.getItems();
    if (tab) {
      let produit = tab.find((params: { id: number }) => params.id == prod.id);
      if (!produit) {
        // prod.quantite=1
        exist = exist;
      } else {
        exist = false;
      }
    }
    return exist;
  }

  // ************************************************************************************

  addToCart(product: IMenu | IBurger) {
    // product.quantites=0
    // this.nombre=this.nombre+1
    this.items$
      .pipe(
        take(1),
        map((products) => {
          if (this.verifieExistanceProduit(product)) {
            product.quantites = 1;
            products.push(product);
          } else {
            let tabb = this.getItems();
            tabb.forEach((element: any) => {
              if (element.id == product.id) {
                product.quantites++;
              }
            });
          }
          localStorage.setItem('products', JSON.stringify(products));
        })
      )
      .subscribe();
  }
  // ***************************************
  // addToCart(product:IMenu|IBurger) {
  //   this.items$.pipe(
  //     take(1),
  //     map((products) => {
  //       products.push(product);
  //       localStorage.setItem('products', JSON.stringify(products));
  //     }),
  //   ).subscribe();
  // }
  // *****************************************************
  //   addProd(ele:any){
  //  this.TableauProduit.push(ele);
  //  this.getNombreProduit();
  // //  this.prixCommane();
  //  console.log(this.nombre);
  //   }

  // getNombreProduit(){
  //   this.nombre=this.nombre++
  //   return this.nombre
  // }

  // getTableauProduit(){
  //   return this.TableauProduit
  // }
  getItems() {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }

  supprimer(leProduit: IMenu | IBurger) {
    this.items$
      .pipe(
        take(1),
        map((products) => {
          products.splice(products.indexOf(leProduit), 1);
          // this.getPrix() - leProduit.prix;
          localStorage.setItem('products', JSON.stringify(products));
        })
      ) 
      .subscribe();
  }




  calcul(product: IMenu | IBurger): number {
    this.prix += product.prix * product.quantites;
    return this.prix;
    // console.log(this.prix);
  }

  getPrix() {
    return this.prix;
  }

  // prixDuProduit(product:IMenu|IBurger,qt:number=1){
  //    this.items$.pipe(
  //     take(1),
  //     map((products) => {
  //       product.prix=this.calcul(product,qt)
  //       products.push(product);
  //       localStorage.setItem('products', JSON.stringify(products));
  //     }),
  //   ).subscribe();

  // }

  // oo(qt:number){
  //   this.items$.forEach(data=>{
  //     data.prix*qt
  //   })
  // }
}
