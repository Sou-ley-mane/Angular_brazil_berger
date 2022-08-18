import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILivraison } from './modeles/IZones';

@Injectable({
  providedIn: 'root'
})
export class GestionDesLivraisonsService {

  constructor(private http:HttpClient) { }

  getLivraisons(): Observable<ILivraison> {
    return this.http.get<ILivraison>('http://localhost:8000/api/livraisons');
  }
}
