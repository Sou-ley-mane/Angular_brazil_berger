import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {
@Input() Photo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
