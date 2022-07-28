import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu } from '../menu/IMenu';
import { CatalogueService } from '../service/catalogue.service';
import { ComplementService } from '../service/complement.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  // @Input() produitElement!:any;
 detailProduit:any;
  constructor(private produit:CatalogueService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    
  const id:number=+this.route.snapshot.params['id'];
  this.produit.getProduit(id).subscribe(
    data=>{
    this.detailProduit=data;
    console.log( this.detailProduit);
  });



 
  
  }

}
