import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBurger } from '../burger/burger';
import { IMenu } from '../menu/IMenu';
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
 urlCmd="http://127.0.0.1:8000/api/commandes"
//  urlOneCmd="http://127.0.0.1:8000/api/commandes/"
  constructor(private http: HttpClient,private serviceDetail:DetailService) { }

  AddCmd(body:ICommande) {
    const headers = { 'Authorization': 'Bearer'+"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk4NzUyNjQsImV4cCI6MTY1OTg3ODg2NCwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiY2xpZW50MUBleGFtcGxlLmNvbSJ9.CqrHhryjyzOfxrEOxsFSO1XyQq_uuvQPqZ6YeVvzjNBxTyZWlUuXaHHwsu18YkcEeB-z8uyjtZFdDwazQVwUAoZfezdpOP7PKb8n_C8AXJMRN_JNiscxCNlRBcJGFTWAtlbE3gPjlDyeTEsQXbBNeuHS8btSr--7yWv0iQ5tkB-UgUdVYhHYCeZGSTkcr9Dq8qIR_8_qjR__LMZu64qVeoKCtn0txeAmXN7dpFEPvFLBjck2fnH2G3tEK8kU0JVpo1rGePBJw59Yngoyqekb4VCE1cfT25pkpGfGcIYlVkuK9wYkWBB9F8AxwHjxvFVVGiQXLG9q3APSHT1FvFGNhrbThy_frqBuskXe_znm-8blzClmMRM7uoBQQVIrBk7Pv1DRSsll--pvMWFYUtJ3WHqYG-OYBIRiN6GtpfXJftXHG5B-OiQApiPfhChJkKc1Mef5B7Dcv-F9MFNr2MpqZopwak6ElEHKddyUrsBLqqoTZqgSVsr3suyaliSX-n-QOuEhrHYBcLi5Tf4BTUXUm_C1M-PrQ-RYXamuT0-UsZRkgAQGKYd9CgTSJ50GPK01nS7WmZ9EbPeMDCOAMcOpWnmtQS9xwbOmuS1-XC5C4paG747wWDvOyDwcaNr0PgE6BpNoiEGN7Tdb0FnvgWUceQW-bnMrR-dBBx9j2WJsuBc"};
    this.http.post<any>(this.urlCmd, body, { headers }).subscribe();
  }

 
  getCommandes(): Observable<any> {
    return this.http.get<any>(this.urlCmd);
  }

  getOneOneCommande(id: number): Observable<ICommande> {
    return this.http.get<ICommande>("http://127.0.0.1:8000/api/commandes/"+ id);
  }

  ajoutDansLaLivraison(commande:Commande){
    this.CommandesAliver.push(commande)
  }
retirerDansLivraison(commande:Commande){
  this.CommandesAliver.splice(  this.CommandesAliver.indexOf(commande,1))
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
  const headers = { 'Authorization': 'Bearer '+"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjAyNDQ4NTMsImV4cCI6MTY2MDI0ODQ1Mywicm9sZXMiOlsiUk9MRV9HRVNUSU9OTkFJUkUiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiZ2F5ZUBleGFtcGxlLmNvbSJ9.Aw1Fzd7TeF3JtR2V_lUYhgGro3fQx6IQYC-tDpEOrQfF9c_R9hBakbwCOcOVSJ43DcGADzYX8TGK6rbzUD2rWA-pWH84GJ2r2VB4KSgq8G3983fWVBN2dq_7X1wFcBCyd36UYN7SCPvxzR5_3N3LBzzWhpFXgaWPv2r-qX7f6N3NUT-ZcFCl33TtXMQqm5THhQMASwREQY7MEQ29obtI2W7aiFvvVet2KrORG0h30wxcfWCZojJxf1dIKDPw-3AeeGdSksVPk-XwwqJtayzc9oOlrBetaC91Y1dQ4EIeb6KdMSLMcrlPkVxbes6FEKNv_dSRUCfATP1GAOKZtIPqyhEzB9_XnujLesRVhXoOdxZyuIPXkBrHfftk1W1oCqKsPIM3amkFYT660va6f1Wds6kUhIRO3zApj6nRBU9ctVp2zfMzLyzrnVf_TsFAbIXVzq0jHcTKqm9gybcguXNOyhnw0ezeDYdDGJ72FxRYiSC8GAHPD227a1mFw6lAXF-mZ_xl191ZZ4VgdU9mI80-0vvzdz95_ZW-fJbgf0Cwk9d1-mP4qVKV4LE1ILhKk27y8jL8JwSPmsCcTzUFDzscW1T0p0ZBdjxR6M4r3BRZZMChZsxZh8QWIfyLluTieBi7UJcSmMYc5uTqIqLC0HRx3uk02WRXPWI8U4utheVWq-Q"};
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






