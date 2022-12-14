import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GestionCommandeService } from 'src/app/service/gestion-commande.service';
import { Commande } from 'src/app/service/modeles/ICommande';
import { ILivraison, ILvreur, IZones } from 'src/app/service/modeles/IZones';
import { ZonesService } from 'src/app/service/zones.service';

@Component({
  selector: 'app-gerer-livraison',
  templateUrl: './gerer-livraison.component.html',
  styleUrls: ['./gerer-livraison.component.css']
})
export class GererLivraisonComponent implements OnInit {
lesLivreurs:any
lesLivreursDisponible:any[]=[]



  constructor(private gestionDesCommandes:GestionCommandeService,private zone:ZonesService,private route:ActivatedRoute,private router :Router) { }

  

  id: number = +this.route.snapshot.params['id'];
  lesCmdDesZone!:IZones
  commandes:Commande[]=[]
  idlivreur!:number

  desactive(){
return this.gestionDesCommandes.activation()
  }


  getLivreur(input:any){
   this.idlivreur=+input.value
  }

  getLaZone(commande:Commande){
    console.log(commande);
    
    // alert(commande.zone.id)

  }

  leszones(){
    this.zone.getZones().subscribe(zones=>{
      console.log(zones);
      
    })
  }

listDesLivreur(){
  this.gestionDesCommandes.getLivreur().subscribe((data:ILvreur)=>{
    this.lesLivreurs=data
    this.lesLivreurs.forEach((livreur:ILvreur) => {
      if (livreur.etat=='disponible') {
        this.lesLivreursDisponible.push(livreur)
      }
      
    });
    console.log(this.lesLivreursDisponible);
    
    console.log(this.lesLivreurs);
  })
// return  this.lesLivreursDisponible
}
// livreurs(){
//   return this.lesLivreurs
// }

  ngOnInit(): void {
    this.zone.getOneOneZones(this.id).subscribe(data=>{  
        this.lesCmdDesZone=data
        // console.log(data);
        this.lesCmdDesZone.commandes.forEach(commande=>{
          if (commande.etatCmd=="terminer") {
           this.commandes.push(commande)
          //  console.log(this.commandes);
          }
        
        })
        
    })

    this.listDesLivreur()
    this.leszones()


  }

  //Recuperation des commandes  a livrer
  getValueCheck(commande:Commande,input:HTMLInputElement){
    if (input.checked) {
      this.gestionDesCommandes.ajoutDansLaLivraison(commande)
    }else{
      this.gestionDesCommandes.retirerDansLivraison(commande)
    }
    // console.log(this.gestionDesCommandes.CommandesAliver);
  }



  addLivraison(){
   let tab:string[]=[]

  //  console.log(this.gestionDesCommandes.CommandesAliver);
   
    this.gestionDesCommandes.CommandesAliver.forEach(cmd=>{
      tab.push("/api/commandes/"+cmd.id)
    })
// console.log(tab); 

    let body:ILivraison ={
        livreur: "/api/livreurs/"+this.idlivreur,
        commandes:tab, 
        zone: "/api/zones/2"
    }
if (body.commandes.length>0) {
  this.gestionDesCommandes.AddLivraison(body);
  
}else{
  alert("veillez selectionner au moins une commande")
}

  }
  

}
