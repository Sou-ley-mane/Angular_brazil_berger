import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionCommandeService } from '../service/gestion-commande.service';

@Component({
  selector: 'app-gestion-des-commande',
  templateUrl: './gestion-des-commande.component.html',
  styleUrls: ['./gestion-des-commande.component.css']
})
export class GestionDesCommandeComponent implements OnInit {
tableauDeCommande:any[]=[]
formateDateToday(){
  let date=new Date();
  let day =date.toLocaleDateString().slice(0,2);
  let month = date.toLocaleDateString().slice(3,5);
  let year= date.toLocaleDateString().slice(6);
  return year+"-"+month+"-"+day ;
  //2022-08-10
}
//  d:Date = new Date();
  // date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
searchText=this.formateDateToday();
couleur:string='btn btn-success '
titre:string='valider'
 lesCmdValidOuEnCours:any[]=[]
 pages:number=1
  constructor(private gestionCommade:GestionCommandeService,private activeRoue:ActivatedRoute,private http:HttpClient) { }


//   changeEtatCmd(id:number){
// this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id,{etatCmd:"valider"}).subscribe()
//     // console.log(id);
    
//     // let id: number = +this.activeRoue.snapshot.params['id'];
//     // this.gestionCommade.getOneOneCommande(id).subscribe(data=>{
//     //   console.log(data);
//     // })


//   }

changerCouleur(){
  this.titre='annuler'
   this.couleur='btn btn-danger'
}


  changeEtatCmd(id:number,faire:string){
    if (faire=="annuler") {
      this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id,{etatCmd:"annuler"}).subscribe()
    }else if (faire=="valider") {
     this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id,{etatCmd:"valider"}).subscribe()
    }else{
     this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id,{etatCmd:"terminer"}).subscribe()
    }
      }


  ngOnInit(): void {

    this.gestionCommade.getCommandes().subscribe(data=> {
      this.tableauDeCommande=data  
      // ****************Test
      this.tableauDeCommande.forEach(commande=>{
        if (commande.etatCmd=='valider' || commande.etatCmd=='En cours') {
        this.lesCmdValidOuEnCours.push(commande)
          
        }
      })
      // console.log(data);
      

    
    })
  }

}
