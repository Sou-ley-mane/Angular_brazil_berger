import { Component, Input, OnInit } from '@angular/core';
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
  // @Input() unezone!:IZones
  
  zoneAvecCmdTerminer:IZones[]=[]
  constructor(private zones:ZonesService,private route:ActivatedRoute,private router :Router) { }
  getLaZones(zone:IZones){
    this.router.navigateByUrl('admin/commandes/zone/'+zone.id)
     }
meszone:any
zonesCmdTerminer:IZones[]=[]
zoneAafficher:any[]=[]
  ngOnInit(): void {

    this.zones.getZones().subscribe(data=>{
      // console.log(data.commandes);
      this.meszone=data
      this.meszone.forEach((zone:IZones) => {
        if (zone.commandes.length>0) {
          this.zonesCmdTerminer.push(zone)
         
          
        }
        
      });
      // console.log(this.zonesCmdTerminer);
      this.zonesCmdTerminer.forEach(zone=>{
        // console.log(zone);
        zone.commandes.forEach(commande=>{
          if (commande.etatCmd=='terminer') {
            this.zoneAafficher.push(zone)
            // console.log(zone);
          }
        })
        
      })
      console.log(this.zoneAafficher);
      
      
      // console.log();



      
    // this.meszone.forEach((zone:IZones)=>{
    //   if (this.meszone.commande) {
        
    //   }
    //   zone.commandes.forEach(commande=>{
    //     if (commande.etatCmd=="terminer") {
    //       this.zonesCmdTerminer.push(zone)
    //     }
    //   })
    // })
    this.zonesCmdTerminer=this.filter(this.zoneAafficher)
   
    
    })

  }

filter(tab:any[]){
  return tab.filter((element,i)=>
  i===tab.indexOf(element)
  )
}

}
