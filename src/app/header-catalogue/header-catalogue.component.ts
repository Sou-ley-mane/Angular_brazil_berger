import { Component, Input, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-header-catalogue',
  templateUrl: './header-catalogue.component.html',
  styleUrls: ['./header-catalogue.component.css']
})
export class HeaderCatalogueComponent implements OnInit {
  items$:Observable<any>=this.detailServ.items$
  
  constructor(private detailServ:DetailService) { 
    
  }

  ngOnInit(): void {
  //  this.affectation();

  }

}
