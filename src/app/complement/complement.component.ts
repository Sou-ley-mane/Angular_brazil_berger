import { Component, OnInit } from '@angular/core';
import { ComplementService } from '../service/complement.service';

@Component({
  selector: 'app-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {

  constructor(private complement :ComplementService) { }

  ngOnInit(): void {
    this.complement.getComplement().subscribe(data=>{
      console.log(data);
      
    })

}
}
