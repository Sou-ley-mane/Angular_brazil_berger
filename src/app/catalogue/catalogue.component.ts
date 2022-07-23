import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from '../menu/IMenu';
import { CatalogueService } from '../service/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {



  constructor(private catalogue:CatalogueService) { }

  ngOnInit(): void {
   
  }


}

