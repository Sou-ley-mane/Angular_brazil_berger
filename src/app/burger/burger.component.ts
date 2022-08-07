import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  @Input() burgerMenu:any;
  constructor() { }

  ngOnInit(): void {
  }

}
