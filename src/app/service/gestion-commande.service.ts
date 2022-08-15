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

 urlCmd="http://127.0.0.1:8000/api/commandes"
//  urlOneCmd="http://127.0.0.1:8000/api/commandes/"
  constructor(private http: HttpClient,private serviceDetail:DetailService,private authentifi:AuthentificationService) { }

  AddCmd(body:ICommande) {
    const headers = { 'Authorization': 'Bearer'+"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk4NzUyNjQsImV4cCI6MTY1OTg3ODg2NCwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiY2xpZW50MUBleGFtcGxlLmNvbSJ9.CqrHhryjyzOfxrEOxsFSO1XyQq_uuvQPqZ6YeVvzjNBxTyZWlUuXaHHwsu18YkcEeB-z8uyjtZFdDwazQVwUAoZfezdpOP7PKb8n_C8AXJMRN_JNiscxCNlRBcJGFTWAtlbE3gPjlDyeTEsQXbBNeuHS8btSr--7yWv0iQ5tkB-UgUdVYhHYCeZGSTkcr9Dq8qIR_8_qjR__LMZu64qVeoKCtn0txeAmXN7dpFEPvFLBjck2fnH2G3tEK8kU0JVpo1rGePBJw59Yngoyqekb4VCE1cfT25pkpGfGcIYlVkuK9wYkWBB9F8AxwHjxvFVVGiQXLG9q3APSHT1FvFGNhrbThy_frqBuskXe_znm-8blzClmMRM7uoBQQVIrBk7Pv1DRSsll--pvMWFYUtJ3WHqYG-OYBIRiN6GtpfXJftXHG5B-OiQApiPfhChJkKc1Mef5B7Dcv-F9MFNr2MpqZopwak6ElEHKddyUrsBLqqoTZqgSVsr3suyaliSX-n-QOuEhrHYBcLi5Tf4BTUXUm_C1M-PrQ-RYXamuT0-UsZRkgAQGKYd9CgTSJ50GPK01nS7WmZ9EbPeMDCOAMcOpWnmtQS9xwbOmuS1-XC5C4paG747wWDvOyDwcaNr0PgE6BpNoiEGN7Tdb0FnvgWUceQW-bnMrR-dBBx9j2WJsuBc"};
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
  const headers = { 'Authorization': 'Bearer '+"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjAzMTAxNjUsImV4cCI6MTY2MDMxMzc2NSwicm9sZXMiOlsiUk9MRV9HRVNUSU9OTkFJUkUiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiZ2F5ZUBleGFtcGxlLmNvbSJ9.LQeViGBGqO4SinZuxoCsqQWI6C7V6p8GYiAmwz9RDWmWpJW5vZFJg0znHAlGhiEALyBBOeUgzbi4GDLtOcXGTVWy-u-JRQHYEd__ioV60nh1WaMhTV1TZ1ncJ4UWniMnm2yjrrB5vjEYX3ejMoRgkDu6LjcQTr8JDkC8x19t0x7BW9nPENtdTgN4CVHVwKJJfdBkzdoYUB-He2IanwydaWA4kn_0MK945hhASs_6Rv4gapf__3QFYj9-s39kLLhpnrp4YgD5opzcioobeKFVOE0Cv_BsHgxVjI1DUJQ77klpV8o754tL9IDK0yqje0Qj9cqsMvWzMRcwj0oSbTVcIJfKcnRXyP-xy6ihivI02f7HdZKO9D-Dyjq1LwBIcym6kQBHfhfif8QU0hDRdvHIGIonVvMcgd7r24dUFfbzJKZzHFm0fj3RWy-7zMQ73Dg-_VogMLde61Pfj9_2amH27hMNc7e5Y1gtFsATEjAS4bey6-Zo1oS7IFMWTBfCTFFAcpRjXFEby1N2YWMcVttcZXJcD4BJWeVMfd9GaSt9gAEprBdgoxq4b9MXT5v-cBH5OREtFxGFlR2uNmPU2jfwJ3RxeHqg2JqoF2jzaiX5tBVMtpEdNeXHFEDFcj6_2b9u8cXKQyPiMVOSMbBtv-Xc5kpLjCupZdjgXYbMs1lB1ZE"};
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






