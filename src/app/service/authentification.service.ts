import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './modeles/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
user:any
tokenUser:any

  constructor(private http: HttpClient) { }

  login(body:Utilisateur) {
    // const headers = { 'Authorization': 'Bearer'+""};
   return this.http.post('http://127.0.0.1:8000/api/login', body);
    // this.http.post<any>('http://127.0.0.1:8000/api/login', body).subscribe();

  }
  // METHODE POUR SE CONNECTER
  // public seConnecter(userInfo: Utilisateur){
  //   localStorage.setItem('ACCESS_TOKEN', "access_token");
  //   this.login(userInfo)
  // }
  // VERIFIER LA CONNEXION
  public estConnecte(){
    return localStorage.getItem('token') !== null;
  }


  // SUPPRIMER LE TOKEN DANS LE LOCAL STORAGE POUR LA DECONNEXION
  public deconnecter(){
    localStorage.removeItem('token');
  }

 
UtilisateurValides(): Observable<any> {
  return this.http.get<any>('http://localhost:8000/api/users');
}


}