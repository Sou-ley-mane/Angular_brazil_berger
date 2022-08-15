import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {
  loginForm!: FormGroup;
  tableauxUsers:any[]=[]
  // controle des messages d'erreurs a l'aide de cette propriété
  isSubmitted  =  false;
  constructor(
    private serviceAuth:AuthentificationService,
    private router:Router,
    private formBuilder:FormBuilder
    
    ) { }

  ngOnInit(): void {

    // validation
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
    
    this.lesUsersValides()
  }

  // Getter pour faciliter le controle
  get f(): { [key: string]: AbstractControl }{
    return this.loginForm.controls;
  }

  lesUsersValides(){
    this.serviceAuth.UtilisateurValides().subscribe(users=>{
      this.tableauxUsers=users
      // console.log(this.tableauxUsers);
    })
  }

  // FONCTION POUR VERIFIER L'INFORMATION DE L'UTILISATEUR
  verifInfoUser(infoUtilisateur:any):boolean{
  let  bonInfo=false
  // console.log("Les users");
   let users:any=this.tableauxUsers;
   users.forEach((element:any) => {
    if (element.email==infoUtilisateur.email ) {
      bonInfo=true
    }else{
      bonInfo=bonInfo
    }
   });
   return bonInfo
  }



  seConnecter(){
    // this.isSubmitted=true
    if (this.verifInfoUser(this.loginForm.value)) {
      this.isSubmitted=true
      if (this.loginForm.invalid) {
        return
      }
      this.serviceAuth.seConnecter(this.loginForm.value)
      this.router.navigateByUrl('/commandes')
    }else{
      // alert("Merci de verifier votre email")
      
      // alert();
      
    }
    


  }





}
