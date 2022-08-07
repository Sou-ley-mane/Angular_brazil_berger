import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IBurger } from '../burger/burger';
import { IMenu } from '../menu/IMenu';
import { GestionCommandeService } from '../service/gestion-commande.service';
import { IBoisson } from '../service/modeles/IBoisson';
import { ICommande, ILigneCmd } from '../service/modeles/ICommande';
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
  constructor(private zone:ZonesService,private gestionCmde:GestionCommandeService) { }

  valider(){
    let body:ICommande ={
      Produits:this.operationCmd(),
      zone:"/api/zones/2"
    }
    // console.log(body);
    
   this.gestionCmde.AddCmd(body)
  }


coche(){
  // this.zone.getZones().subscribe(data=>{
  //   this.mesZones=data
  //   return this.mesZones
  //   //  console.log(data);
  //  })

}

operationCmd(){
  let produits:ILigneCmd[]=[]
  this.gestionCmde.panier.forEach((produit:IMenu|IBurger)=> {
    produits.push({
      produit:'/api/produits/'+produit.id,
      quantite:+produit.quantites
    })
    
  });
  return produits
}
  ngOnInit(): void {
 
    
  }

}
