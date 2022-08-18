import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IBurger } from '../burger/burger';
import { IMenu } from '../menu/IMenu';
import { DetailService } from '../service/detail.service';
import { GestionCommandeService } from '../service/gestion-commande.service';
import { IBoisson } from '../service/modeles/IBoisson';
import { ICommande, ILigneCmd, IProduit } from '../service/modeles/ICommande';
import { IZones } from '../service/modeles/IZones';
// import { IZones, IZpones } from '../service/modeles/IZones';
import { ZonesService } from '../service/zones.service';

@Component({
  selector: 'app-form-recuperation',
  templateUrl: './form-recuperation.component.html',
  styleUrls: ['./form-recuperation.component.css']
})
export class FormRecuperationComponent implements OnInit {

  // form !: FormBuilder(
  //   place !: string;
  //   livraison !: string;
  // )
  liv:any=""
  result = ""
 mesZones:any
 input:any
 zoneClient:any
 zoneDisponible:any
  constructor(private zone:ZonesService,private gestionCmde:GestionCommandeService,private detailService :DetailService,private router:Router) { }

  getZoneClient(input:HTMLInputElement){
   
    this.zoneClient=input.value
    // alert( this.zoneClient)
    // alert(this.zoneClient)
    // alert("ohhhhhh")

  }
  viderPanier(tableau:any[]){ 
    tableau.forEach(produit=>{
      this.detailService.supprimer(produit)
    }) 

  
    
  }

  valider(){
   
    let body:ICommande ={
      Produits:this.operationCmd(),
      // zone:"/api/zones/2"
      zone:"/api/zones/"+this.zoneClient

    }
    console.log(body);
    // alert("azerty") 
   this.gestionCmde.AddCmd(body)
   this.viderPanier(this.detailService.getItems());
   this.router.navigateByUrl('')
  //  location.reload()
   
  }


coche(){
  this.zone.getZones().subscribe(data=>{
    this.mesZones=data
    this.mesZones.forEach((element:IZones) => {
      if (element.etatZone=='accessible') {
        this.zoneDisponible.push(element)
        
      }
      
    });
    // return this.mesZones
    //  console.log(data);
   })

}

donneZones(){
  return this.mesZones
}

operationCmd(){
  let produits:ILigneCmd[]=[]
  this.gestionCmde.panier.forEach((produit:IProduit)=> {
    produits.push({
      produit:'/api/produits/'+produit.id,
      quantite:+produit.quantites
    })
    
  });
  return produits
}
  ngOnInit(): void {
    this.zone.getZones().subscribe(data=>{
      this.mesZones=data
      this.mesZones.forEach((element:IZones) => {
        if (element.etatZone=='accessible') {
          this.zoneDisponible.push(element)
          
        }
        
      });
      // return this.mesZones
      //  console.log(data);
     })
//  this.coche()
    
  }

}
