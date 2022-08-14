import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { AuthentificationService } from '../service/authentification.service';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-header-catalogue',
  templateUrl: './header-catalogue.component.html',
  styleUrls: ['./header-catalogue.component.css']
})
export class HeaderCatalogueComponent implements OnInit {
  items$:Observable<any>=this.detailServ.items$
  
  constructor(private detailServ:DetailService,private serviceAuth:AuthentificationService,private router:Router) { 
    
  }

  deconnecter(){
    this.serviceAuth.deconnecter()
    this.router.navigateByUrl('/catalogue')
  }

  siConnecter(){
   return this.serviceAuth.estConnecte();
  }

  ngOnInit(): void {
  //  this.affectation();

  }

}
