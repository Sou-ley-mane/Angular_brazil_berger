import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplementService {

  constructor(private http:HttpClient) { }
   getComplement():Observable<any[]>{
     return this.http.get<any[]>("http://localhost:8000/api/complement");
   }
}
