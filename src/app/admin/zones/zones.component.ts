import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommande } from 'src/app/service/modeles/ICommande';
import { IZones } from 'src/app/service/modeles/IZones';
import { ZonesService } from 'src/app/service/zones.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {
  zoneAvecCmdTerminer:IZones[]=[]
  constructor(private zones:ZonesService,private route:ActivatedRoute,private router :Router) { }
  getLaZones(zone:IZones){
    this.router.navigateByUrl('admin/commandes/zone/'+zone.id)
     }
meszone:any
zonesCmdTerminer:IZones[]=[]
  ngOnInit(): void {

    // this.zones.getZones().subscribe(data=>{
    //   this.meszone=data
    // this.meszone.forEach((zone:IZones)=>{
    //   zone.commandes.forEach(commande=>{
    //     if (commande.etatCmd=="terminer") {
    //       this.zonesCmdTerminer.push(zone)
    //     }
    //   })
    // })
    // this.zonesCmdTerminer=this.filter(this.zonesCmdTerminer)
   
    
    // })

  }

filter(tab:any[]){
  return tab.filter((element,i)=>
  i===tab.indexOf(element)
  )

}

}
