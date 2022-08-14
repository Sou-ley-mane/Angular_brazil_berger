import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted  =  false;
  constructor(
    private serviceAuth:AuthentificationService,
    private router:Router,
    private formBuilder:FormBuilder
    
    ) { }

  ngOnInit(): void {
    // validation
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  get formControls(){
    return this.loginForm.controls;
  }

  seConnecter(){
    console.log(this.loginForm.value);
    this.isSubmitted=true
if (this.loginForm.invalid) {
  return
}
this.serviceAuth.seConnecter(this.loginForm.value)
this.router.navigateByUrl('/admin')

  }



}
