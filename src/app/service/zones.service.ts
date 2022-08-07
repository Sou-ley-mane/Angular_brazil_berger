import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IZones } from './modeles/IZones';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {

  constructor(private http:HttpClient) { }

  // getZones():Observable<IZones>{
  //   return this.http.get<IZones>("http://127.0.0.1:8000/api/zones");
  // }

}
