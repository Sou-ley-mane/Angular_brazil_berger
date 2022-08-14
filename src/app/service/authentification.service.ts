import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from './modeles/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  meConnecter(body:Utilisateur) {
    // const headers = { 'Authorization': 'Bearer'+"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk4NzUyNjQsImV4cCI6MTY1OTg3ODg2NCwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoiY2xpZW50MUBleGFtcGxlLmNvbSJ9.CqrHhryjyzOfxrEOxsFSO1XyQq_uuvQPqZ6YeVvzjNBxTyZWlUuXaHHwsu18YkcEeB-z8uyjtZFdDwazQVwUAoZfezdpOP7PKb8n_C8AXJMRN_JNiscxCNlRBcJGFTWAtlbE3gPjlDyeTEsQXbBNeuHS8btSr--7yWv0iQ5tkB-UgUdVYhHYCeZGSTkcr9Dq8qIR_8_qjR__LMZu64qVeoKCtn0txeAmXN7dpFEPvFLBjck2fnH2G3tEK8kU0JVpo1rGePBJw59Yngoyqekb4VCE1cfT25pkpGfGcIYlVkuK9wYkWBB9F8AxwHjxvFVVGiQXLG9q3APSHT1FvFGNhrbThy_frqBuskXe_znm-8blzClmMRM7uoBQQVIrBk7Pv1DRSsll--pvMWFYUtJ3WHqYG-OYBIRiN6GtpfXJftXHG5B-OiQApiPfhChJkKc1Mef5B7Dcv-F9MFNr2MpqZopwak6ElEHKddyUrsBLqqoTZqgSVsr3suyaliSX-n-QOuEhrHYBcLi5Tf4BTUXUm_C1M-PrQ-RYXamuT0-UsZRkgAQGKYd9CgTSJ50GPK01nS7WmZ9EbPeMDCOAMcOpWnmtQS9xwbOmuS1-XC5C4paG747wWDvOyDwcaNr0PgE6BpNoiEGN7Tdb0FnvgWUceQW-bnMrR-dBBx9j2WJsuBc"};
    this.http.post<any>('http://127.0.0.1:8000/api/login', body).subscribe();
  }
  // METHODE POUR SE CONNECTER
  public seConnecter(userInfo: Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    this.meConnecter(userInfo)
  }
  // VERIFIER LA CONNEXION
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  // SUPPRIMER LE TOKEN DANS LE LOCAL STORAGE POUR LA DECONNEXION
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
