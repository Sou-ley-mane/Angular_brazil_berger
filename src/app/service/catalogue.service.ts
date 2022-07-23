import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenu } from '../menu/IMenu';
import { IBurger } from '../burger/burger';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService { 
private buger!:IBurger;
  private menu:IMenu[]=[
    {
      "id":1,
      "nomProduit": "menu simple",
      "image": "assets/menu.jpeg",
      "prix": 3000
   },
    {
      "id":2,
      "nomProduit": "menu simple",
      "image": "assets/menu.jpeg",
      "prix": 3000
   },
  {
    "id":3,
      "nomProduit": "menu simple",
      "image": "assets/menu.jpeg",
      "prix": 3000
   },
   {
    "id":4,
    "nomProduit": "menu simple",
    "image": "assets/menu.jpeg",
    "prix": 3000
 },
 {
  "id":5,
  "nomProduit": "menu simple",
  "image": "assets/menu.jpeg",
  "prix": 3000
},
{
  "id":6,
  "nomProduit": "menu simple",
  "image": "assets/menu.jpeg",
  "prix": 3000
},
{
  "id":7,
  "nomProduit": "menu simple",
  "image": "assets/menu.jpeg",
  "prix": 3000
},
{
  "id":8,
  "nomProduit": "menu simple",
  "image": "assets/menu.jpeg",
  "prix": 3000
},

  
  ];

  private Burger:IBurger[]=[
    {
      "id":9,
      "nomProduit": "burger simple",
      "image": "assets/burger.jpeg",
      "prix": 3000
   },
    {
      "id":10,
        "nomProduit": "burger simple",
        "image": "assets/burger.jpeg",
        "prix": 3000
     },
     {
      "id":11,
      "nomProduit": "buregr simple",
      "image": "assets/burger.jpeg",
      "prix": 3000
   },
   {
    "id":12,
    "nomProduit": "burger simple",
    "image": "assets/burger.jpeg",
    "prix": 3000
 },
   {
    "id":13,
    "nomProduit": "burger simple",
    "image": "assets/burger.jpeg",
    "prix": 3000
  },
  {
    "id":14,
    "nomProduit": "burger simple",
    "image": "assets/burger.jpeg",
    "prix": 3000
  },
  {
    "id":15,
    "nomProduit": "burger simple",
    "image": "assets/burger.jpeg",
    "prix": 3000
  },
  {

    "id":16,
    "nomProduit": "burger simple",
    "image": "assets/burger.jpeg",
    "prix": 3000
  },
    
    ];
  constructor() { }
  // private http:HttpClient
  // getDonnees():Observable<IMenu[]>{
  //   return this.http.get<IMenu[]>("assets/catalogue.json");
  // }
  getDonnees(){
    return this.menu
    // return this.http.get<any>("assets/catalogue.json");
  }
getBurger(){
    return this.Burger
    // return this.http.get<any>("assets/catalogue.json");
  }



  }
    
  


