import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GestionDesLivraisonsService } from '../service/gestion-des-livraisons.service';
import { Commande, ICommande } from '../service/modeles/ICommande';
import { ILivraison, ILvreur, IZones } from '../service/modeles/IZones';
import { ZonesService } from '../service/zones.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
commandes:any
lesLivraisons:any
livreur:any
 id!:number
 activeBouton=true
  constructor(private zones:ZonesService,private serviceLivraison:GestionDesLivraisonsService,private http:HttpClient) { }

getCommandesLivraison(livraison:ILivraison){
  this.commandes=livraison.commandes
  // console.log(livraison);
}


gererLivreur(livraison:ILivraison){
  this.livreur=livraison.livreur
  livraison.commandes.forEach(commade=>{
    if (commade.etatCmd=='cours') {
     this.activeBouton=true
    }
    else  if (commade.etatCmd!='cours') {
     this.id=this.livreur.id
     this.activeBouton=false
     
    }
  })
  // console.log(this.id);
  
  // console.log(livraison.commandes[0].etatCmd);
}

// FONCTION POUR CHANGER L'ETAT DU LIVREUR A DISPONIBLE
changeEtatLivreur(){
  // console.log(this.id);
  this.http.put<any>("http://127.0.0.1:8000/api/livreurs/"+this.id,{etat:"disponible"}).subscribe()
}

wawOK(idcmd:number,faire:string){
  // console.log(this.id);
  // this.http.put<any>("http://127.0.0.1:8000/api/livreurs/"+this.id,{etat:"disponible"}).subscribe()
  // alert(idliv);
  if (faire=='livrer') {
    this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+idcmd,{etatCmd:faire}).subscribe()
    this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+idcmd,{etatPaiement:"oui"}).subscribe()
  }else if (faire=='non livrer') {
    this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+idcmd,{etatCmd:faire}).subscribe()
    // this.http.put<any>("http://127.0.0.1:8000/api/livreurs/"+idlivreur,{etat:"disponible"}).subscribe()
    this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+idcmd,{etatPaiement:"non"}).subscribe()
    
  }

  // alert('ok');
}
changeEtatCmd(idcmd:number,idlivreur:number,faire:string){
  alert("azert")
  // this.http.put<any>("http://127.0.0.1:8000/api/livreurs/"+idlivreur,{etat:"disponible"}).subscribe()
  // if (faire=="livrer") {
  //   this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+idcmd,{etatCmd:"livrer"}).subscribe()
  //   this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+idcmd,{etatPaiement:"oui"}).subscribe()
  // }else if (faire=="non livrer") {
  //   this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+idcmd,{etatCmd:"non livrer"}).subscribe()
  //   // this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+idcmd,{etatPaiement:"o"}).subscribe()
  //   // this.http.put<any>("http://127.0.0.1:8000/api/livreurs/"+idlivreur,{etat:"disponible"}).subscribe()
  // }

    }

  ngOnInit(): void {
this.serviceLivraison.getLivraisons().subscribe((livraisins:ILivraison)=>{
  // console.log(livraisins);
  
  this.lesLivraisons=livraisins
  // console.log( this.lesLivraisons);
  
})





    // this.zones.getZones().subscribe((zones:IZones)=>{
    //   this.nosZones.push(zones)
    //   console.log(this.nosZones);
    // })
  }

}
