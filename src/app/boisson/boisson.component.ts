import { Component, Input, OnInit } from '@angular/core';
import { CatalogueService } from '../service/catalogue.service';
import { GestionCommandeService } from '../service/gestion-commande.service';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css'],
})
export class BoissonComponent implements OnInit {
  @Input() mesBoissons: any;
  constructor(private gestionCmd: GestionCommandeService) {}
  Qte!: number;
  limiteQue!:number
  desativer:boolean=false

  

  

  ngOnInit(): void {
    this.Qte = this.gestionCmd.qte;
    this.limiteQue=  this.gestionCmd.laQuantite
    this.boisson()
    
  }


  
  moins(input: any):any {
    if (input.value == 0) {
      return 
    }
    input.value = --input.value;
  }

  plus(input: any) :any{
    if (input.value >= this.limiteQue || this.boisson()>=this.limiteQue) {
   return 
    }
    else{
      input.value = ++input.value;
    }
  }

  boisson():number{
    this.gestionCmd.som
    const inputs=document.querySelectorAll("input")
    inputs.forEach(element => {
      this.gestionCmd.som+=+element.value
    });
    return  this.gestionCmd.som
  }
}
