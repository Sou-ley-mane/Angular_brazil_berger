import { Component, Input, OnInit } from '@angular/core';
import { CatalogueService } from '../service/catalogue.service';

@Component({
  selector: 'app-boisson-complement',
  templateUrl: './boisson-complement.component.html',
  styleUrls: ['./boisson-complement.component.css']
})
export class BoissonComplementComponent implements OnInit {
@Input() boissonComplent :any
@Input() tailleboissonComplent :any
Boissons:any[]=[]
taillesboisson:any[]=[]
  constructor(private catalogue:CatalogueService) { }



  ngOnInit(): void {
  
   
  
  
  }

}
