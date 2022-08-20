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
  // On considere le subjest comme observable
  items$ = this.itemsSubject.asObservable();
  // ***********************************************
  total: number[] = [];
  prix!: number;
  // montantTotal:number=0

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
          // this.calcule()
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
    let nouvlle:number=0
    this.items$
      .pipe(
        take(1),
        map((products) => {
         products.forEach((element:any) => {
          nouvlle+=element.prix
         });
         console.log(nouvlle-leProduit.prix);
         localStorage.setItem('total', JSON.stringify(nouvlle-leProduit.prix));
          products.splice(products.indexOf(leProduit), 1);
          localStorage.setItem('products', JSON.stringify(products));
         
        })
      ) 
      .subscribe(data=>{
        // console.log(data);
      });
      location.reload()
  }

  // nouvellePrix(produit:any){
  //   let som=0
  //   this.getItems().forEach((element:any) => {
  //   som+=element.prix-produit.prix
  //   });
  //  return  som
  //   // console.log(som-produit.prix);
    
  // }




    calcule() {
    let montantTotal:number=0
  this.items$.subscribe((p:any)=>{
    p.forEach((element:any)=>{
      // console.log(element.prix*element.quantites);
      montantTotal+=element.prix*element.quantites
      
    })
    this.prix=montantTotal
   
    localStorage.setItem('total', JSON.stringify(this.prix));
  })

 }

  getPrix() {
    return JSON.parse(localStorage.getItem('total') || '[]');
  }

  diokhmaPrixLiv(key:string){
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  supprimeKey(key:string){
      localStorage.removeItem(key);
  }
  
}
