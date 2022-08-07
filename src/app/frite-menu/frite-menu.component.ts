import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frite-menu',
  templateUrl: './frite-menu.component.html',
  styleUrls: ['./frite-menu.component.css']
})
export class FriteMenuComponent implements OnInit {
  @Input() fritesMenu:any;
  constructor() { }

  ngOnInit(): void {
  }

}
