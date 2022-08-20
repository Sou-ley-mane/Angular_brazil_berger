import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { burger, IBurger } from '../burger/burger';
import { IMenu } from '../menu/IMenu';
import { AuthentificationService } from './authentification.service';
import { DetailService } from './detail.service';
import { Commande, ICommande } from './modeles/ICommande';
import { ILivraison, ILvreur } from './modeles/IZones';

@Injectable({
  providedIn: 'root'
})
export class GestionCommandeService {

 qte :number=0;
 som:number=0
 laQuantite!:number
 panier:any=this.serviceDetail.getItems()
 CommandesAliver:Commande[]=[]
 lePrixDeLaLivraison:number=0

 urlCmd="http://127.0.0.1:8000/api/commandes"
//  urlOneCmd="http://127.0.0.1:8000/api/commandes/"
  constructor(private http: HttpClient,private serviceDetail:DetailService,private authentifi:AuthentificationService) { }

  AddCmd(body:ICommande) {
    // alert("commande")
    const headers = { 'Authorization': 'Bearer'+"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjA2NjQ5NjYsImV4cCI6MTY2MDY2ODU2Niwicm9sZXMiOlsiUk9MRV9HRVNUSU9OTkFJUkUiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiZ2F5ZUBleGFtcGxlLmNvbSJ9.f0vrGlAune_LSS4mrPzqfbkXfliga0c_91HCFfqJ8sLk3bnvjujRFwWC9e2kbP5eb1EsdSQsiFik-3Fx3aSwgqzphXbaegribsrmFxBpwFODKMCSuImWOqXHZIoXAKbwknRhHHAFPHfqJyk64bbTixzm6r_Jdhs5INplZvccQipfT38V03rJeTdw30nornso9pseqME_eQ6z7LvGDO0mK8K3_SBdKPNK1oUALgQYDE0wWR838PxJnofYBo95u29Bg2AUO52qGFR5u3SA7XW3BsRALmsXV1VYx1uMBuhfKPi3PJjNkF4zKGlYotsWA_8JNOC-2MzUaVnyVpL9KJKY67bvFRi_V-qxdO8kCixQ7WCexSGsg8sbEtT-N23rEWkkZ5WnpLu_4ixdga9TZ2WyVi0L3f_Ka2dAKf9dkRxknaw2qOJnakQNsFhYr_K5oZoBv2piKMSYDLmNbIBOPPVDs-wqwlvbz6E80Q898SyI_XajyjYduBPngcnDzqH-1zT_r5MO6h_58z3Z0Eg5ddwyV3OfxbDMDVcHxNoY9QDKb8mX5RGOxs1fbhzt3l1DLxxnJIXidoTWqA-e50SNzMuUfz4kmQRH_K9wjl81hohTEG63J6HN_xdgpdI6ghcKf6L7kCEjoXYEPrBDWdWYajTFNaCHjZkW7E25NqacG-G38tI"};
    this.http.post<any>(this.urlCmd, body, { headers }).subscribe();
  }

   ajouterBurger(body:burger){
    // console.log(this.authentifi.tokenUser);
    // const headers = { 'Authorization': 'Bearer'+this.authentifi.tokenUser};
    this.http.post<any>('http://127.0.0.1:8000/api/burgers', body).subscribe();
  }

 
  getCommandes(): Observable<any> {
    return this.http.get<any>(this.urlCmd);
  }
  

  getOneOneCommande(id: number): Observable<ICommande> {
    return this.http.get<ICommande>("http://127.0.0.1:8000/api/commandes/"+ id);
  }
// Ajouter la commande dans le tableau
  ajoutDansLaLivraison(commande:Commande){
    this.CommandesAliver.push(commande)
  }

  // Retirer la commande dans le tableau
retirerDansLivraison(commande:Commande){
  this.CommandesAliver.splice(this.CommandesAliver.indexOf(commande,1))
}

activation(){
  if (this.CommandesAliver.length>0) {
    return false
  }else{
    return true
  }
  
}


getLivreur(): Observable<ILvreur> {
  return this.http.get<ILvreur>('http://127.0.0.1:8000/api/livreurs');
}

AddLivraison(body:ILivraison) {
  const headers = { 'Authorization': 'Bearer '+"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjA4MTg2NjgsImV4cCI6MTY2MDgyMjI2OCwicm9sZXMiOlsiUk9MRV9HRVNUSU9OTkFJUkUiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiZ2F5ZUBleGFtcGxlLmNvbSJ9.IVUOiPA1uY4ZYjHVW6_v-ekkcBDXqDEFiXZ1XXEpAoTnWNytYptl_f7_ywVvA5qogw2xxreJ92PL9cmw9ZW1KCNAyov6ZrRSTFcsQP8H7BpUPiYrBRomiIBOe0HmAh5G8-K9fKHc43YETgub8K205u6tM2CU0mpBqXR4y4ObEI_0RsUSRxEKZhQpgQiZ5H2YQ2qz-g8cW6T81UEzRNaCJFrLVGikytTxoNVDQ9YaGxPhi2_IRS7zcakezflcHlOgONI-EnaZgKyMheAi-Kc7XwsJ7FswdcAklBLFog2VKbYpKq_5TfEhDvKsJ1qoPwo-5IsE620vTqRs6eKzfOC5eoR9xcl65z4DjAAkbOBx2rGh0MwRwVbo2_5X8SbEMZMZ1ppuprCRBjdZWjRy8Kxm6fdPZ0V20ax4HJq4BGbOdxI7BpCThdzM85H2SDJhBWsZcQ8-zQQrva3V9kYxnMir6zfz51j2zsGW7iU7i4ndTnlTZ_MLGILHxc1Yi0yjJk4j9v6Fb9OTixCTzlvQBoSkEu_4ocuXBX2tpF8-kcOkojoziEPX7wRylCUmZxMtV0s4i-0DvoUe58IlAlH_nFVxFMfUdxK70g_KTd11ohy_TP4bYtjmz1pEQaEpJRERi1Zz-V5PBVz2UktlTviWCzgdX8-yd2waOWSoT-gpJMJGg14"};
  this.http.post<any>('http://127.0.0.1:8000/api/livraisons', body, { headers }).subscribe();
}


//   getLigneCmd(){
//     let  lesProduits:any[]=[]
//     this.serviceDetail.items$.subscribe(data=>{
//      data.forEach((element:any) => {
//       lesProduits.push({
//         produit:element,
//        quantite:2
//       })
//      });
//     })
// return lesProduits
//   }


//   recuperation(){

//  let  lesProduits:any[]=[]
// panier.forEach((produit:IBurger|IMenu)=>{
//  lesProduits.push({
//   quantite:3,
//   produit:'',
//  })

// })
// return lesProduits
//   }




  }






