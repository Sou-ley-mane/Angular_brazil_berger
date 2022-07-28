import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { IBurger } from '../burger/burger';
import { IMenu } from '../menu/IMenu';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
TableauProduit:any[]=[]
// *********************************************
private itemsSubject = new BehaviorSubject<any>([]);
items$ = this.itemsSubject.asObservable();
// ***********************************************
total:number[]=[];
prix:number=0;
// nombre:number=0;

  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products')||'[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
   }
  // Recuperation du produit selectionné
  // ***************************************
  addToCart(product:IMenu|IBurger) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }
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
  getItems(){
    return  JSON.parse(localStorage.getItem('products')||'[]')
  }




  supprimer(leProduit:IMenu|IBurger){
    this.items$.pipe(
      take(1),
      map((products) => {
        products.splice(products.indexOf(leProduit),1)
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }


calcul(product:IMenu){
this.prix+=product.prix
  console.log(this.prix);
}

getPrix(){
  return this.prix
}


}