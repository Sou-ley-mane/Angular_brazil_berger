import { Component, OnInit } from '@angular/core';
import { IZones } from '../service/modeles/IZones';
import { ZonesService } from '../service/zones.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
nosZones:IZones[]=[]
  constructor(private zones:ZonesService) { }

  ngOnInit(): void {
    this.zones.getZones().subscribe((zones:IZones)=>{
      this.nosZones.push(zones)
      console.log(this.nosZones);
    })
  }

}
