import { Component, Input, OnInit } from '@angular/core';
import { IBurger } from 'src/app/burger/burger';
import { IMenu } from 'src/app/menu/IMenu';
import { ILigneCmd, IProduit } from 'src/app/service/modeles/ICommande';

@Component({
  selector: 'app-info-produit',
  templateUrl: './info-produit.component.html',
  styleUrls: ['./info-produit.component.css']
})
export class InfoProduitComponent implements OnInit {
  @Input() produit!:{quantite:number,produit:IProduit}
  constructor() { }

  ngOnInit(): void {
  }

}
